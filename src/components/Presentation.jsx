import React from "react";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";

const Presentation = () => {
  return (
    <section
      className="pageContainer h-screen w-full flex items-center"
      id="home"
    >
      <div className="p-10 flex flex-col w-screen gap-16 max-sm:p-4 max-md:gap-0">
        <div className="flex gap-x-16 items-center max-md:flex-col max-md:items-start max-md:py-0">
          <span>
            <img
              src="./images/fotoportfolio.jpeg"
              alt=""
              className="rounded-full w-64 max-w-2xl max-md:w-56 max-sm:w-48 border-8 border-[#EED0B9]"
            />
          </span>
          <span className="flex-1 max-md:px-0 max-md:py-4">
            <p className="text-6xl font-extrabold max-md:text-4xl max-sm:text-4xl pb-10">
              Alessandro Quarin
            </p>
            <p className="text-4xl max-md:text-xl max-sm:text-xl">
              Front end developer
            </p>{" "}
            <br />
          </span>
        </div>
        <span className="flex gap-4 flex-col max-md:mt-0">
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
          <span className="flex gap-2">
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
