/** @type {import('tailwindcss').Config} */


module.exports = {
  safelist: [
    'hidden',
    'duration-200',
    'ease-linear',
    // Add other classes used dynamically
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
};
