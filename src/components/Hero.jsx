import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-primary">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-base">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sangam Gurung
        </h1>
        <h2 className="text-4xl sm:text-7xl fon-bolf text-[#8892b0]">
          I am a Front End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I have a passion for crafting outstanding digital experiences, with a
          primary focus on creating responsive webpages.
        </p>
        <div>
          <button className="text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-base hover:border-base">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
