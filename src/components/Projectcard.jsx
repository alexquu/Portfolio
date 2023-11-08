import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Projectcard = ({ id, img, title, quote, gitLink, siteLink }) => {
  return (
    <>
      <div className="flex flex-col justify-between gap-10 border border-[#ebcfbb] rounded-xl p-6 max-sm:w-full">
        <span className="flex flex-col gap-4">
          <img
            key={id}
            src={img}
            alt={title}
            className="rounded-xl max-sm:w-32"
          />
          <h1 className="font-bold">{title}</h1>
          <h2>{quote}</h2>
        </span>
        <div className="flex">
          <a href={gitLink} target="_blank" rel="noreferrer noopener">
            <span className="self-end cursor-pointer hover:text-white transition-all duration-200">
              <AiFillGithub size={25} />
            </span>
          </a>
          <a href={siteLink} target="_blank" rel="noreferrer noopener">
            <span className="self-end cursor-pointer hover:text-white transition-all duration-200">
              <AiOutlineLink size={25} />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Projectcard;
