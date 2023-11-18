/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      wordSpacing: {
        'normal': 'normal',
        'wide': '0.25em',
        'wider': '0.5em',
        'widest': '1em',
      },
    },
  },
  plugins: [],
}