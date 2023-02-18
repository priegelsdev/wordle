/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Keyboard grid
        Keyboard: 'repeat(10, minmax(0, 56px))',
      },
      colors: {
        'asphalt-gray': '#74787B',
        'letter-yellow': '#C9B457',
        'letter-green': '#6BAA64',
      },
    },
  },
  plugins: [],
};
