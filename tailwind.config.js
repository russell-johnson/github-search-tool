

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],

  theme: {
   
    extend: {
    
      colors: {
        button: 'rgba(var(--button))',
        standard:'rgba(var(--text))',
        main: 'rgba(var(--main))',
        accent: 'rgba(var(--accent))',
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