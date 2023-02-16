/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Keyboard grid
        Keyboard: 'repeat(10, minmax(0, 56px))',
      },
    },
  },
  plugins: [],
};
