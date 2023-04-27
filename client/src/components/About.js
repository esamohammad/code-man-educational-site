import React from 'react';
import about from './../assets/images/info/about.jpg'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero  bg-base-200 max-w-screen-lg mx-auto mt-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={about} className="md:max-w-sm rounded-lg shadow-2xl md:mr-8 transition ease-in-out delay-150 hover:-translate-y-1 lg:hover:scale-110" alt='' />
                <div className='md:ml-8 '>
                    <h1 className="text-2xl lg:text-5xl font-bold pt-4">Over 20 Courses!</h1>
                    <p className="py-2 text-justify">A programming language is a way for programmers (developers) to communicate with computers. Programming languages consist of a set of rules that allows string values to be converted into various ways of generating machine code, or, in the case of visual programming languages, graphical elements.</p>
                    <button className="btn btn-secondary mt-4"><Link to='/courses'>Go to Courses</Link></button>
                </div>
            </div>
        </div>
    );
};

export default About;