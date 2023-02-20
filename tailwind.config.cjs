/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Keyboard grid
        Keyboard: 'repeat(11, minmax(0, 56px))',
        KeyboardMobile: 'repeat(7, minmax(0, 32px))',
      },
      colors: {
        'asphalt-gray': '#74787B',
        'letter-yellow': '#C9B457',
        'letter-green': '#6BAA64',
        'key-gray': '#d3d6da',
        'key-wrong': '#787c7e',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(-5px)' },
          '20%': { transform: 'translateX(5px)' },
          '30%': { transform: 'translateX(-5px)' },
          '40%': { transform: 'translateX(5px)' },
          '50%': { transform: 'translateX(-5px)' },
          '60%': { transform: 'translateX(5px)' },
          '70%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
          '90%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'row-shake': 'shake 0.7s linear',
      },
    },
  },
  plugins: [],
};
