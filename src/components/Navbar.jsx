import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0E2954] flex font-semibold items-center shadow-lg w-full fixed">
        <nav className="pageContainer flex justify-between px-10 py-4 max-sm:px-4">
          <div className="flex items-center gap-2">
            <a
              className="text-3xl hover:text-white transition-all duration-200"
              href="#home"
            >
              AQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="max-md:hidden hover:text-white text-xl transition-all duration-200"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="max-md:hidden hover:text-white text-xl transition-all duration-200"
              href="#projects"
            >
              Projects
            </a>
            <span className="md:hidden mt-1 cursor-pointer">
              <GiHamburgerMenu
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                size={20}
              />
            </span>
          </div>
        </nav>
      </header>
      <Sidebar state={isSidebarOpen} setV={setIsSidebarOpen} />
    </>
  );
};

export default Navbar;
