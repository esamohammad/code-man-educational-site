import React from "react";
import { Link } from "react-router-dom";



const Blog = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-yellow-500">Hello Dear ! </h1>
            <p className="py-6 text-xl font-black text-bold" >
              It will be available in very soon. 
            </p>
        <Link to= '/courses'>  <button className="btn btn-base">Back to Courses</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
