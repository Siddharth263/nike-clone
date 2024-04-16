/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframe:{
        slide:{
          "0%":{transform: 'translateX(0)'},
          "100%":{transform: 'translate(-100%)'}
        }
      },
      animation:{
        slide:"slide 5s infinite"
      }
    },
    fontFamily: {
      sans: "Montserrat",
    },
  },
  plugins: [],
};
