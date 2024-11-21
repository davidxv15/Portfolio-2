/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}' // Includes all necessary file types in src
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans Condensed', 'sans-serif'], // Add 'Fira Sans Condensed'
        poppins: ['Poppins', 'sans-serif'],         // Add 'Poppins'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: adds better styling for forms
    require('@tailwindcss/typography'), // Optional: improves typography support
  ],
};
