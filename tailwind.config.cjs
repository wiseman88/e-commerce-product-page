/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'orange': 'hsl(26, 100%, 55%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
      'white': '#ffffff',
      'black': '#000',
      'very-dark-blue': 'hsl(220, 13%, 13%)',
      'dark-grayish-blue': 'hsl(219, 9%, 45%)',
      'grayish-blue': 'hsl(220, 14%, 75%)',
      'light-grayish-blue': 'hsl(223, 64%, 98%)',
    },
    fontFamily: {
      'body': ['Kumbh Sans', 'sans-serif']
    }
  },
  plugins: [],
}
