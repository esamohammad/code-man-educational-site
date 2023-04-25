import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SingleCourse from "../components/SingleCourse";
import "../style/courses.css";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      {/* courses page ---1. grid md:grid-4 part kora*/}
      <div className="mb-5 grid-cols-4 md:grid">
        {/* sidebar---2. */}
        <aside className="  relative md:sticky md:top-0 md:h-screen">
          {/* // Fixed Sidebar */}
          <div className=" mx-4 h-full  rounded-2xl bg-yellow-500  p-4 md:ml-4 ">
            {courses.map((course) => (
              <Sidebar course={course} key={course._id}></Sidebar>
            ))}
          </div>
        </aside>

        {/* course window */}
        <div className="md:mb-2.25 col-span-3 px-8 md:px-12 ">
          {
            <div className="grid-cols-3 gap-10 md:grid ">
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
