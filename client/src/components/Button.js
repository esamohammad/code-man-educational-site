import React from 'react';
import { Link } from "react-router-dom";

const Button = ({ course }) => {
    const { _id, title } = course;

    return (
        <div className=''>
            <div className=" text-center text-bold  text-base md:text-lg box-border border-solid border-yellow-600 border-2  hover:bg-secondary p-2"><Link to={`/courses/${_id}`} className="hover:text-white">
                {title}
            </Link></div>
        </div>
    );
};

export default Button;