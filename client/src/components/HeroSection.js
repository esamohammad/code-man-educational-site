import React from "react";
import bg1 from '../assets/images/carosel/bg1.jpg'
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.edtechreview.in/images/teach-your-kids-to-code.jpg")` }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 style={{ fontFamily: "'Courgette', cursive" }} className="mb-5 text-3xl  font-bold lg:text-5xl lg:text-yellow-500 ">Best Online Courses </h1>
          <p className="mb-5 text-white lg:text-2xl">Do you want to Learn  Coding Language??</p>
          <p className="mb-5 text-white text-lg lg:text-xl
        ">We are here for you...</p>
          <Link to='/courses'> <button className="btn btn-outline btn btn-outline btn-secondary">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
