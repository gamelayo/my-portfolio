import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
