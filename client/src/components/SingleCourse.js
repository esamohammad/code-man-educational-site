import React from 'react';
import { Link } from "react-router-dom";





const SingleCourse = ({ course }) => {
  const { _id, title, img, desc, price, ratting } = course;

  return (
    <Link
      to={`/courses/${_id}`}
      style={{ height: "320px" }}
      className="rounded-lg shadow-lg shadow-black relative single-course mt-10 md:mt-0 block cursor-auto"
    >
      <div className="overflow-hidden rounded-lg cursor-auto">
        <img
          style={{ height: "320px" }}
          className="rounded-lg"
          src={img}
          alt=""
        />
      </div>
      <div
        style={{ height: "320px" }}
        className="bg-black opacity-60 w-full absolute top-0 rounded-lg"
      ></div>
      <div className="p-3 absolute top-20 left-5 text-white">
        <h1 style={{ fontFamily: "'Oswald', sans-serif" }} className="text-2xl">
          {title}
        </h1>
        <p>{desc?.slice(0, 60)}...</p>
        <p className="flex font-bold mt-6 text-yellow-300">
          <small className='text-xl'>Price : {price}</small>
          <small className="ml-6 text-xl">Rating : {ratting}</small>
        </p>
      </div>
    </Link>
  );
};

export default SingleCourse;