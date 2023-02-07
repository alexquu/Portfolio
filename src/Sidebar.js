import React from 'react';

const Sidebar = ({state}) => {
  return (
    <>
    <div className={`${state ? 
        'bg-slate-600 fixed top-16 text-center right-[3.5%] w-24 p-2 fadeIn rounded-md cursor-pointer font-semibold md:invisible' 
        : 
        'bg-slate-600 fixed top-16 text-center right-[3.5%] p-2 w-24 fadeOut rounded-md cursor-pointer font-semibold md:invisible'}`}>
        <a className='hover:text-white transition-all duration-200' href='#home'>Home</a> <br/>
        <a className='hover:text-white transition-all duration-200' href='#skills'>Skills</a> <br/>
        <a className='hover:text-white transition-all duration-200' href='#projects'>Projects</a>
    </div>
    </> 
  );
};

export default Sidebar;