/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      color:{
        'common':'#B68C5A'
      }
    },
  },
  plugins: [require("daisyui")],
}

