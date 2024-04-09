

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],

  darkMode: 'selector',
  theme: {
   
    extend: {
   
      colors: {
        blue: '#0079FF',
        slateGrey: '#697C9A',
        dullBlue: '#4B6A9B',
        charcoal: '#2B3442',
        darkCharcoal: '#141D2F',
        darkSlate: '#1E2A47'
      },
    },
  },
  plugins: [],
}