/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js",
            "./src/Mainpage.js",
            "./src/Navbar.js",
            "./src/Sidebar.js",
            "./src/Presentation.js",
            "./src/Skills.js",
            "./src/Projects.js",
            "./src/Projectcard.js"],
  theme: {
    fontFamily: {
      'sans': ['"PT Sans"'],
      'rubik': ['"Rubik"'],
      'inconsolata': ['Inconsolata', 'sans-serif'],
    },
    extend: {
      keyframes: {
        'slip': {
          '0%' : {opacity: '0'},
          '50%' : {opacity: '1', translate: '50px'},
          '100%' : {opacity: '0', translate: '100px'}
        }
      },
      animation: {
        slip: 'slip 0.6s linear 1'
      },
    },
  },
  plugins: [],
}
