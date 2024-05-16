/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkElements: 'hsl(209, 23%, 22%)'
      }
    },
  },
  plugins: [],
}
