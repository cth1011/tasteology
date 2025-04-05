/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'red': {
            500: '#FF424E', // Custom red color for "THE PERFECT EGG" text
          }
        },
      },
    },
    plugins: [],
  }