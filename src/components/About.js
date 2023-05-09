import React from "react";
import AboutImg from "../assets/about.jpg";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen px-8 flex items-center py-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 md:pl-10">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">
            Hi there, I'm Gamel Ayodele, a frontend developer with a passion for
            creating beautiful and engaging user interfaces. I have 3 years of
            experience in building responsive and intuitive web applications
            using modern front-end technologies like HTML, CSS, JavaScript, and
            React.
          </p>
          <p className="py-2 ">
            While I love designing and implementing front-end solutions that
            users enjoy interacting with, I'm also excited to dive deeper into
            the world of backend development. Over the past few months, I've
            been learning about server-side programming languages like Node.js,
            and exploring how to integrate APIs and databases into my projects.
            I'm eager to continue honing my skills in this area and expand my
            ability to build full-stack applications.
          </p>
          <p className="py-2 ">
            I'm always looking for new challenges and opportunities to learn,
            and I believe that a strong foundation in both front-end and
            back-end development is key to building robust and scalable web
            applications. If you're looking for a dedicated and creative
            developer who is eager to grow and collaborate on your next project,
            please don't hesitate to reach out. Thanks for stopping by!
          </p>
          <Link to="work" smooth={true} duration={500}>
            <p className="py-2  underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-md shadow-gray-500 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src={AboutImg} alt="about" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
