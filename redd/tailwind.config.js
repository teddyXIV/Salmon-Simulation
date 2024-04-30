/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Krona One', 'sans-serif']
      },
      backgroundImage: {
        'background': "url('./src/assets/images/bg4.png')"
      },
      screens: {
        'break': '920px'
      }
    },
  },
  plugins: [],
}
