// postcss.config.js
module.exports = {
    plugins: [
      require('tailwindcss'),  // Generates utility classes based on tailwind.config.js
      require('autoprefixer'), // Adds vendor prefixes
    ]
  }