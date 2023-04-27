import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import Ratings from "../components/Ratings";


const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const { _id, title, img, desc, price, ratting } = courseDetails;

  return (
    <div id="downloadPage">
      <div className="hero min-h-screen bg-blue-200 pb-20 mb:pb-0 ">
        <div className="hero-content flex-col lg:flex-row cursor-pointer">
          <img
            style={{ width: "520px" }}
            src={img}
            className="mask mask-squircle shadow-2xl cursor-pointer "
            alt=""

          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-justify">{desc}</p>
            <div className="flex mb-10 ">
              <Ratings ratting={ratting}></Ratings>
              <p className="font-bold md:ml-20 ml-4">Price : {price}</p>
            </div>
            <div className="md:flex items-center block text-center">
              <Link to={`/premium/${_id}`}>
                <button className="btn btn-warning font-bold md:mr-5 hover:bg-yellow-500 mb-5 md:mb-0">
                  Get Premium Access
                </button>
              </Link>
              {/* <DownloadPage
              roofElementId="downloadPage"
              downloadFileName={`${title}.pdf`}
              img={img}
            ></DownloadPage> */}
              <Link className="block mt-5 md:flex md:mt-0 " to="/courses">
                <button className="btn  font-bold">Not now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;