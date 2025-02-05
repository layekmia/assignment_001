/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      screens:{
        'xs': '400px'
      },
      fontFamily:{
        "body-font": ['Sora', 'serif'],
        "poppins": ["Poppins", 'serif']
      },
      colors:{
        "primary-clr": "#FFDC26",
        "secondary-clr": "#111111",
        "primary-bg": "#F9DF8A",
      }
    },
  },
  plugins: [],
}

