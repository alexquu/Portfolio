import React from "react";
import { Data } from "../Data";
import Projectcard from "./Projectcard";

const Projects = () => {
  return (
    <>
      <section
        className="pageContainer h-screen flex flex-col justify-center max-sm:h-auto p-10 max-sm:px-4"
        id="projects"
      >
        <p className="font-bold text-5xl max-md:text-4xl text-center max-md:text-start mb-10 max-sm:mt-20">
          My projects:
        </p>
        <div className="flex gap-4 max-sm:flex-wrap">
          {Data.map((card) => (
            <Projectcard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
