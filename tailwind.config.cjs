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
    },
  },
  plugins: [],
};
