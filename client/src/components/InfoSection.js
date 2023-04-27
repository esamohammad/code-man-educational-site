import React, { useEffect, useState } from 'react';

import bg1 from './../assets/images/carosel/bg1.jpg'
import Button from './Button';
import "../style/courses.css"

const InfoSection = () => {
    const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])


    return (
        <div className='' >

            <h1 className="text-2xl font-bold sm:text-5xl text-center mt-8 md:mt-20">Choose Your <span className='text-yellow-600 text-3xl'>Best Course!</span></h1>
            <h2 className='text-lg md:text-2xl font-bold    text-center mt-4'>Available Courses: {courses.length} Courses</h2>


            <div className="hero  bg-base-200 mt-4  max-w-screen-lg mx-auto">

                <div className="hero-content flex-col lg:flex-row-reverse cursor-pointer">
                    <img src={bg1} className="md:max-w-md rounded-lg shadow-2xl lg:ml-12  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150" alt='' />
                    <div>



                        <div className='grid-cols-2 gap-2 grid md:grid md:grid-cols-3 lg:mr-2'>
                            {courses.map((course) => (


                                <Button course={course} key={course._id}></Button>

                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;