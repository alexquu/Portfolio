const Sidebar = ({ state, setV }) => {
  return (
    <>
      <nav
        className={`${
          state
            ? "bg-slate-600 fixed top-16 text-center w-full p-2 fadeIn rounded-md cursor-pointer font-semibold md:invisible"
            : "bg-slate-600 fixed top-16 text-center w-full p-2 fadeOut rounded-md cursor-pointer font-semibold md:invisible"
        }`}
      >
        <a
          className="hover:text-white transition-all duration-200"
          href="#home"
          onClick={() => setV()}
        >
          Home
        </a>{" "}
        <br />
        <a
          className="hover:text-white transition-all duration-200"
          href="#skills"
          onClick={() => setV()}
        >
          Skills
        </a>{" "}
        <br />
        <a
          className="hover:text-white transition-all duration-200"
          href="#projects"
          onClick={() => setV()}
        >
          Projects
        </a>
      </nav>
    </>
  );
};

export default Sidebar;
