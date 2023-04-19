import React from "react";
import bg1 from '../assets/images/carosel/bg1.jpg'

const HeroSection = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.edtechreview.in/images/teach-your-kids-to-code.jpg")` }}>
    <div className="hero-overlay bg-opacity-80"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-3xl  font-bold lg:text-5xl">Best Online Courses </h1>
        <p className="mb-5 sm:text-base ">Do you want to Learn  Coding Language??</p>
        <p className="mb-5 sm:text-lg
        ">We are here for you...</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
