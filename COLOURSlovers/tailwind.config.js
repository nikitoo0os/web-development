/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      colors: {
        'my-blue': '#458FF6',
      },
      width:{
        'standard': '1600px',
      },
      
    },
  },
  plugins: [],
};
