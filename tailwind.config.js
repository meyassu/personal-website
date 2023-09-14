/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js', // Also scan .js files
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '500px'}
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'],
        'cedarville-cursive': ['"Cedarville Cursive"', 'cursive']
      }
    },
  },
  plugins: [],
};
