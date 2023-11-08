/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.{js,ts,jsx,tsx}",
    "./src/components/Mainpage.{js,ts,jsx,tsx}",
    "./src/components/Navbar.{js,ts,jsx,tsx}",
    "./src/components/Sidebar.{js,ts,jsx,tsx}",
    "./src/components/Presentation.{js,ts,jsx,tsx}",
    "./src/components/Skills.{js,ts,jsx,tsx}",
    "./src/components/Projects.{js,ts,jsx,tsx}",
    "./src/components/Projectcard.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"PT Sans"'],
      rubik: ['"Rubik"'],
      inconsolata: ["Inconsolata", "sans-serif"],
    },
    extend: {
      keyframes: {
        slip: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1", translate: "50px" },
          "100%": { opacity: "0", translate: "100px" },
        },
      },
      animation: {
        slip: "slip 0.6s linear 1",
      },
    },
  },
  plugins: [],
};
