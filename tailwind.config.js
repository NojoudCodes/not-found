/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'gavency': ['Gavency Free', 'sans-serif']
      },
      fontSize: {
        '7xl': '8rem',
        '6xl': '4rem',
      },
      width: {
        'p': '39.063rem'
      },
      colors: {
        'btn-text': '#FFF7E9'
      },
      padding: {
        '3': '0.813rem',
        '8': '2.125rem'
      }
    },
  },
  plugins: [],
}