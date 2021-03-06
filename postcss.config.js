//postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts', './src/**/*.jsx', './src/**/*.js']
});

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
};
