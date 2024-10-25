/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        smooth_green:"#9DFF50",
        dark_gray:"#1E1E1E",
        custom_black:"#0A0A0A",
        custom_white:"#FEFEFE"
      },
      fontFamily:{
        sans:['Montserrat','Poppins'],
        titles:['Poppins','sans_serif']
      }
    },
  },
  plugins: [],
}