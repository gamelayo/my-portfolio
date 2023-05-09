import React from "react";
import { FaGithub, FaCss3, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen px-8 py-12">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full md:pl-10">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center ">
              <div className="m-auto">
                <FaHtml5 size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                {/* <Image src={Html} width="64px" height="64px" alt="/" /> */}
                {/* <img src={CSS} alt="css" /> */}
                <FaCss3 size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiTailwindcss size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="whitespace-nowrap">Tailwind Css</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                {/* <Image src={Html} width="64px" height="64px" alt="/" /> */}
                {/* <img src={JAVASCRIPT} alt="javaScript" /> */}
                <SiJavascript size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaReact size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaGithub size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <FaNodeJs size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiExpress size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="whitespace-nowrap">Express Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiMongodb size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="whitespace-nowrap">Mongo DB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-secondary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SiFirebase size={35} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
