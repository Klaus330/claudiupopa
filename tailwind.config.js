/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,tsx}",
    "./src/views/**/*.{js,ts,vue,tsx}",
    "./src/components/**/*.{js,ts,vue,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "greenish":{
          light: '#b5d49b',
          DEFAULT: "#A3BE8C",
          dark: '#7e916d',
        },
        "blueish":{
          dark: "#6c88a3",
          DEFAULT: "#81A2C1"
        },
        "purpleish":{
          DEFAULT: "#B48EAC"
        },
        "yellowish":{
          DEFAULT: "#EBCB8C"
        },
        "redish":{
          DEFAULT: "#BF6269"
        },
        "blackish":{
          DEFAULT: "#2E3440"
        }
      }
    },
   
  },
  plugins: [],
}