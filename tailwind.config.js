/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        poppins:["poppins"],
        poppinsB:["poppinsB"],
        poppinsSB:["poppinsSB"]
      },
      colors:{
        light:"#777a92",
        primary:"#37B4C3"
      }
    },
  },
  plugins: [],
}
