import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h1 className='text-center'>Data: {courses.length}</h1>
        </div>
    );
};

export default Courses;