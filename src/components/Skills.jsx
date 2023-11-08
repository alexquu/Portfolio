import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import { SiMaterialui, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section
      className="pageContainer h-screen p-8 flex flex-col justify-center"
      id="skills"
    >
      <p className="font-bold flex-wrap text-5xl max-md:text-4xl pt-20 pb-6">
        Skills and technologies
      </p>
      <p className="font-light flex-wrap text-2xl max-md:text-xl">
        All the languages and frameworks i used in my projects
      </p>
      <hr className="w-3/4 mt-10 border-[#EED0B9]" />
      <div className="iconContainer flex flex-wrap gap-10 justify-start py-12">
        <p className="font-bold flex flex-col items-center">
          <AiFillHtml5
            size={50}
            className="hover:scale-110 hover:text-[#b83d1e] cursor-pointer transition-all duration-200"
          />
          Html5
        </p>
        <p className="font-bold flex flex-col items-center">
          <DiCss3
            size={50}
            className="hover:scale-110 hover:text-[#146EB0] cursor-pointer transition-all duration-200"
          />
          Css3
        </p>
        <p className="font-bold flex flex-col items-center">
          <DiJavascript1
            className="hover:scale-110 hover:text-[#EFD81D] cursor-pointer transition-all duration-200"
            size={50}
          />
          Javascript
        </p>
        <p className="font-bold flex flex-col items-center">
          <DiReact
            size={50}
            className="hover:scale-110 hover:text-[#06ADC9] cursor-pointer transition-all duration-200"
          />
          React
        </p>
        <p className="font-bold flex flex-col items-center">
          <DiBootstrap
            size={50}
            className="hover:scale-110 hover:text-[#7410EB] cursor-pointer transition-all duration-200"
          />
          Bootstrap
        </p>
        <p className="font-bold flex flex-col items-center">
          <SiMaterialui
            size={50}
            className="hover:scale-110 hover:text-[#0079F2] cursor-pointer transition-all duration-200"
          />
          MUI
        </p>
        <p className="font-bold flex flex-col items-center">
          <SiTailwindcss
            size={50}
            className="hover:scale-110 hover:text-[#06ADC9] cursor-pointer transition-all duration-200"
          />
          TailwindCSS
        </p>
        <p className="font-bold flex flex-col items-center">
          <DiGit
            size={50}
            className="hover:scale-110 hover:text-[#ee7964] cursor-pointer transition-all duration-200"
          />
          Github
        </p>
      </div>
    </section>
  );
};

export default Skills;
