/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      custom: ['Kameron','serif'],
    },
    colors:{
       lightBG : {
        200 : '#F7F6F6'
       },
       DlightBG : {
        400 : '#EBEBEB'
       },
       darkBG : {
        400 : '#000000'
       },
       
       yellowText : {
        200 : '#C00703'
       }
    }
  },
  plugins: [],
}

