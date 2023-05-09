import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import restImg from "../assets/project/rest-country-app.PNG";
import { BackButton } from "../components/BackButton";
import ThemeToggle from "../components/ThemeToggle";
const Rest = () => {
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
          src={restImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Country Map</h2>
          <h3>React JS / Tailwind CSS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in ReactJs and is hosted on vercel. This
            app is a challenge from Frontend Mentor. Users will be able to see
            all countries from the API on the homepage, search for a country
            using the search by name input field, filter countries by region,
            click on a country to see more detailed inform on a separate page
            make use of useContext hooks for toggle the color scheme between
            light and dark mode.
          </p>
          <a
            href="https://github.com/gamelayo/rest-countries-api"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://countries-map-gamelayo.vercel.app/"
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
                <RiRadioButtonFill className="pr-1" /> ReactJS
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCss
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Rest Countries API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rest;
