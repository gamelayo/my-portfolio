import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-scroll";
import fileUrl from "../assets/gamelayo.pdf";
const Main = () => {
  const fileName = "gamel ayodele resume.pdf";

  return (
    <div id="main" className="w-full h-screen text-center px-8 py-4">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4">
            Hi, I&#39;m <span className="text-[#5651e5]"> Gamel</span>
          </h1>
          <h1 className="py-2 ">A Front-End Web Developer</h1>
          <p className="py-4  sm:max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/gamel-ayodele-55182b19b"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300  bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/gamelayo"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <FaGithub />
              </div>
            </a>
            <Link to="contact" smooth={true} duration={500}>
              <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <AiOutlineMail />
              </div>
            </Link>
            <a href={fileUrl} download={fileName} rel="noreferrer">
              <div className="rounded-full shadow-md shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
