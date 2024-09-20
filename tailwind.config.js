/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'pry':'#54baac',
        'sec': '#e5aa2d',
        'accent-white': '#f1f1f2',
        'accent-black' : '#282828'
      },
      container :{
        center:true
      }
    },
  },
  plugins: [],
}