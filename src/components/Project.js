import React from "react";
import ProjectItem from "./ProjectItem";
import Blog from "../assets/project/Blog-app.PNG";
import CRPYTO from "../assets/project/crpyto-app.PNG";
import REST from "../assets/project/rest-country-app.PNG";
import TOUR from "../assets/project/tour-app.PNG";

const Project = () => {
  return (
    <div id="work" className="w-full px-8 py-16">
      <div className="max-w-[1240px] mx-auto  md:pl-10 ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Blog App"
            backgroundImg={Blog}
            projectUrl="/blog"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={CRPYTO}
            projectUrl="/crypto"
            tech="React JS"
          />
          <ProjectItem
            title="Country Map"
            backgroundImg={REST}
            projectUrl="/rest"
            tech="React JS"
          />
          <ProjectItem
            title="Tour App"
            backgroundImg={TOUR}
            projectUrl="/tour"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
