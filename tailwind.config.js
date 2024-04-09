

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],

  theme: {
   
    extend: {
      colors: {
        button: 'rgba(var(--button))',
        text:'rgba(var(--text))',
        moon: '#69769a',
        main: 'rgba(var(--main))',
        card: 'rgba(var(--card))',
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}