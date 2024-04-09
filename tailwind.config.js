

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],

  theme: {
   
    extend: {
    
      colors: {
        button: 'rgba(var(--button))',
        text:'rgba(var(--text))',
        main: 'rgba(var(--main))',
        card: 'rgba(var(--card))',
        hover:'rgba(var(--texthover))',
      },

      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}