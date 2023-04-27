import React from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

import About from "../components/About";


const Home = () => {
  return <div>
    <HeroSection></HeroSection>
    {/* <Sidebar></Sidebar> */}
    <About></About>
    <InfoSection></InfoSection>
  </div>;
};

export default Home;
