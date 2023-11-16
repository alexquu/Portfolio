import React from "react";
import { Data } from "../Data";
import Projectcard from "./Projectcard";

const Projects = () => {
  return (
    <>
      <section
        className="pageContainer h-screen w-full flex items-center text-[#ebcfbb] max-sm:h-auto p-10"
        id="projects"
      >
        <div className="">
          <p className="font-bold text-5xl max-md:text-4xl text-center mb-10">
            My projects:
          </p>

          <div className="pageContainer flex gap-4 max-sm:flex-wrap">
            {Data.map((card) => (
              <Projectcard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
