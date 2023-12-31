/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/index.js', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          custom: '#333333'
        }
      },
      transitionDuration: {
        1200: '1200ms'
      }
    }
  },
  plugins: []
};
