import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Projects from './Projects';
import Skills from './Skills';

const Mainpage = () => {
  return (
    <>
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default Mainpage;
