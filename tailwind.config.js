/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'pink-brand': '#FCC4F0',
        'blue-brand': '#58CAF2',
        'beige-brand': '#f9e9d2',
        'skyblue-brand': '#a3d9de',
      }
    },
  },
  plugins: [],
}
