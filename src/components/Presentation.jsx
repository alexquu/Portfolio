import React from "react";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

const Presentation = () => {
  return (
    <section
      className="pageContainer h-screen w-full flex items-center"
      id="home"
    >
      <div className="flex flex-col w-screen mt-20">
        <div className="flex items-center">
          <span className="p-10 max-sm:px-4">
            <img
              src="./images/fotoportfolio.jpeg"
              alt=""
              className="rounded-full w-72 max-w-2xl max-md:w-56 max-sm:w-40 border-8 border-[#EED0B9]"
            />
          </span>
          <span className="p-10 flex-1">
            <p className="text-6xl font-extrabold max-md:text-4xl max-sm:text-3xl pb-10">
              Alessandro Quarin
            </p>
            <p className="text-4xl max-md:text-xl max-sm:text-lg">
              Front end developer
            </p>{" "}
            <br />
          </span>
        </div>
        <span className="flex gap-4 flex-col p-10 max-sm:px-4">
          <a
            href="mailto:alexqu86@gmail.com"
            className="group border border-[#EED0B9] block w-fit h-20 p-6 rounded-xl hover:bg-[#0E2954] transition-all duration-25 text-xl max-md:text-base max-md:p-4 max-md:h-14"
          >
            Get in touch
            <BiMailSend
              className="relative bottom-7 left-32 opacity-0 group-hover:animate-slip"
              size={30}
            />
          </a>
          <span className="flex gap-4">
            <a
              className="hover:text-white hover:scale-110 transition-all duration-150"
              href="https://www.linkedin.com/in/alessandro-quarin-981475113/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              className="hover:text-white hover:scale-110 transition-all duration-150"
              href="https://github.com/alexquu"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillGithub size={40} />
            </a>
          </span>
        </span>
      </div>
    </section>
  );
};

export default Presentation;
