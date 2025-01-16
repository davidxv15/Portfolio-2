/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}' // Includes all necessary file types in src
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
      },
      fontFamily: {
        fira: ['Fira Sans Condensed', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        host: ['Host Grotesk', 'sans-serif']
      },
      fontSize: {
        '5.5xl': '3.375rem',
        '4.5xl': '2.5rem',  
        '3.5xl': '2rem'
      },
      width: {
        '18': '4.5rem'
      },
      colors: {
        customThemes: {
          default: '',
          grayscale: ' ',
          invert: ' ',
          sepia: ' ',
        },
        animation: {
          fade: 'fadeIn 1s ease-in-out',
          'spin-slow': 'spin 3s linear infinite',
          'pulse-fast': 'pulse 0.5s linear infinite',
        },
  
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: adds better styling for forms
    require('@tailwindcss/typography'), // Optional: improves typography support
  ],
};
