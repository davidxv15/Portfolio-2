/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}' // Includes all necessary file types in src
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['Fira Sans Condensed', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'] 
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: adds better styling for forms
    require('@tailwindcss/typography'), // Optional: improves typography support
  ],
};
