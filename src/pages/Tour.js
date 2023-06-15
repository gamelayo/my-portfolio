import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import tourImg from "../assets/project/tour-app.PNG";
import { BackButton } from "../components/BackButton";
import ThemeToggle from "../components/ThemeToggle";

const Tour = () => {
  return (
    <div className="w-full">
      <div className="my-4 px-4 flex justify-between">
        <BackButton url="/" />
        <ThemeToggle />
      </div>
      <div className="w-screen h-[50vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/40 z-10" />
        <img
          className="absolute w-[100%] h-[100%] z-1 object-fill"
          src={tourImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Tour App</h2>
          <h3>React JS /Express JS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in ReactJs for the frontend, expressJs for
            the backend and hosted on render for the backend, on vercel for the
            frontend. This app features user authentication with expressJs as
            well as monogodb as storage database. This application display trips
            where users can visit for vacation. Another feature of this
            application is dynamic routing through the &quot;React Router
            DOM&quot; package.
          </p>
          <div className="mt-2">
            <div>Test Account</div>
            <div>
              <div>
                {" "}
                <span>Email:</span> gamel@gmail.com
              </div>
              <div>
                <span>Password:</span> 12345
              </div>
            </div>
          </div>
          <a
            href="https://github.com/gamelayo/tour-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://tour-app-gamelayo.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-md shadow-gray-500 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ReactJs
              </p>

              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ExpressJs
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Monogodb
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
