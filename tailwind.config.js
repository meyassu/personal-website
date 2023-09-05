/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js', // Also scan .js files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    fontFamily: {
      'urbanist': ['Urbanist', 'sans-serif'],
      'cedarville-cursive': ['"Cedarville Cursive"', 'cursive']
    }
  }
}

