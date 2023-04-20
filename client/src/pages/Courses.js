import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SingleCourse from "../components/SingleCourse";
import "./../style/sidebar.css";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      {/* courses page ---1. grid md:grid-4 part kora*/}
      <div className="md:grid grid-cols-4 mb-5">
       
       
        {/* sidebar---2. */}
        <aside class="  relative md:top-0 md:sticky md:h-screen">
          {/* // Fixed Sidebar */}
          <div className="bg-yellow-500 rounded-2xl h-full  md:ml-4 mx-4  p-4 shadow-layer ">
            {courses.map((course) => (
              <Sidebar course={course} key={course._id}></Sidebar>
            ))}
          </div>
        </aside>


        {/* course window */}
        <div className="col-span-3 px-8 md:px-12 md:mb-2.25 ">
          {
            <div className="md:grid grid-cols-3 gap-10 ">
              {courses.map((course) => (
                <SingleCourse course={course} key={course._id}></SingleCourse>
              ))}
            </div>
          }
        </div>
        
      </div>
    </div>
  );
};

export default Courses;





/*

A simple Tailwind layout to create a sticky sidebar and scrollable content next to it.

<div class="flex">
    <aside class="h-screen sticky top-0">
        // Fixed Sidebar
    </aside>

    <main>
        // Content
    </main>
</div>
*/