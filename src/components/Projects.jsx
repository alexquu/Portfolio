import React from "react";
import { Data } from "../Data";
import Projectcard from "./Projectcard";

const Projects = () => {
  return (
    <>
      <section
        className="pageContainer h-screen p-6 flex flex-col justify-center items-center pt-20 text-[#ebcfbb] max-sm:h-auto"
        id="projects"
      >
        <p className="font-bold text-5xl max-md:text-4xl pb-10">My projects:</p>
        <div className="pageContainer flex justify-between gap-4 max-sm:flex-wrap">
          {Data.map((card) => (
            <Projectcard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
