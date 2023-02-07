import React, { useState } from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import Sidebar from './Sidebar';

const Navbar = () => {

const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
  <>
  <header className='bg-[#0d1c22] flex font-semibold items-center shadow-lg w-full fixed'>
    <nav className='pageContainer flex justify-between px-8 py-3'>
      <div className='flex items-center gap-2'>
      <img src='fotoportfolio.jpeg' alt='' className='rounded-full w-10'></img>
        <a className='mr-4 font-sans font-bold text-3xl hover:text-white transition-all duration-200' href='#home'>AQ</a>
      </div>
      <div className='flex items-center gap-3'>
        <a className='max-md:hidden hover:text-white text-lg transition-all duration-200' href='#skills'>Skills</a>
        <a className='max-md:hidden hover:text-white text-lg transition-all duration-200' href='#projects'>Projects</a>
        <span className='md:hidden mt-1 cursor-pointer'><GiHamburgerMenu onClick={() => setIsSidebarOpen(!isSidebarOpen)} size={20}/></span>     
      </div>
    </nav>
  </header>
  <Sidebar state={isSidebarOpen}/>
  </>
  )
}



export default Navbar;
