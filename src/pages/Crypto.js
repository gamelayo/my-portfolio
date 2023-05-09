import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import cryptoImg from "../assets/project/crpyto-app.PNG";
import { BackButton } from "../components/BackButton";
import ThemeToggle from "../components/ThemeToggle";
const Crypto = () => {
  return (
    <div className="w-full">
      <div className="my-4 px-4 flex justify-between">
        <BackButton url="/" />
        <ThemeToggle />
      </div>
      <div className="w-screen h-[50vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/20 z-10" />
        <img
          className="absolute w-[100%] h-[100%] z-1 object-fill"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crypto App</h2>
          <h3>React JS / Tailwind CSS/ Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this app to demonstrate knowledge working in React JS and
            accessing API endpoints. This app was built using React JS and is
            hosted on vercel. This application supports user authentication
            using firebase. Users are able to create a new account using their
            email address and can then sign in to save coins to a user specific
            list. This is made possible by creating a firestore cloud storage
            database at the time of user registration. Another feature of this
            application is dynamic routing through the &quot;React Router
            DOM&quot; package. This application was built using the Coin Gecko
            API.
          </p>
          <a
            href="https://github.com/gamelayo/crypto-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://crypto-app-gamelayo.vercel.app/"
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
                <RiRadioButtonFill className="pr-1" /> TailwindCss
              </p>

              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className=" py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Coin Gecko API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
