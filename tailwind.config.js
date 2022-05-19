module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'fade-in-right': {
          '0%': {
            opacity: 0,
            left: '-100%',
          },
          '100%': {
            opacity: 1,
            left: '0px',
          },
        },
      },
      animation: {
        fadeInRight: 'fade-in-right 0.5s ease-in-out forwards',
      },
    },
    fontFamily: {
      body: ['Heebo', 'sans-serif'],
      heading: ['Koulen', 'sans-serif'],
    },
  },
  plugins: [],
}
