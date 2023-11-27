import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Github from "../assets/github.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import NodeImg from "../assets/node.png";
import MongoImg from "../assets/mongo.png";
import JestImg from "../assets/Jest.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-primary text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-base ">
            Skills
          </p>
          <p className="py-4">These technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} className="w-20 mx-auto" alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} className="w-20 mx-auto" alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={JavaScript}
              className="w-20 mx-auto"
              alt="javascript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={ReactImg} className="w-20 mx-auto" alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={NodeImg} className="w-20 mx-auto" alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={MongoImg} className="w-20 mx-auto" alt="Github icon" />
            <p className="my-4">Mongo</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Github} className="w-20 mx-auto" alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Tailwind} className="w-20 mx-auto" alt="Tailwind icon" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JestImg} className="w-20 mx-auto" alt="Jest icon" />
            <p className="my-4">JEST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
