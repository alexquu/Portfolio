import React from 'react';
import {AiOutlineLinkedin, AiFillGithub} from "react-icons/ai";
import {BiMailSend} from 'react-icons/bi';


const Presentation = () => {
  return (
    <section className='presentation pageContainer h-screen flex flex-col gap-12 justify-center p-8' id='home'>
      <p className='text-5xl font-semibold max-md:text-4xl'>Hi, i'm Alessandro Quarin</p>
      <p className='font-light text-2xl max-md:text-xl'>Passionate web developer and fast learner</p>
      <a href='mailto:alexqu86@gmail.com' className='group border border-[#EED0B9] p-4 rounded-xl hover:bg-[#1c4397] transition-all duration-25 w-fit h-14'>
        {/* <button type='button' className='border border-[#EED0B9] p-4 rounded-xl hover:bg-[#1c4397] transition-all duration-25'> */}
          Get in touch
        {/* </button> */}
        <BiMailSend className='relative bottom-7 left-32 opacity-0 group-hover:animate-slip' size={30}/>
      </a>
      <span className='flex'>
        <a className='hover:text-white hover:scale-110 transition-all duration-150' href='https://www.linkedin.com/in/alessandro-quarin-981475113/' target='_blank' rel='noreferrer noopener'><AiOutlineLinkedin size={40}/></a>
        <a className='hover:text-white hover:scale-110 transition-all duration-150' href='https://github.com/alexquu' target='_blank' rel='noreferrer noopener'><AiFillGithub size={40}/></a>
      </span>
    </section>
  )
}

export default Presentation;