/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('./src/assets/images/bg3.png')"
      },
      backgroundColor: theme => ({
        'overlay': 'rgba(0, 0, 0, 0.5)'
      })
    },
  },
  plugins: [],
}
