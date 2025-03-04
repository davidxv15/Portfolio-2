/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      animation: {
        bounceIn: "bounceIn 0.6s ease-in-out",
        fade: "fadeIn 1s ease-in-out",
        hauntingPulse: "hauntingPulse 7s ease-in-out infinite",
        pulseFast: "pulse 0.5s linear infinite",
        rotateY: "rotateY 1s linear",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideInRight: "slideInRight 0.5s ease-out",
        spinFast: "spinFast 1s ease-in-out",
        spinSlow: "spin 3s linear infinite",
        spinY: "spinY 1s ease-in-out", 
        zoomOut: "zoomOut 0.4s ease-in",
      },
      borderRadius: {
        card: "8px",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
      colors: {
        customThemes: {
          default: "#f8f9fa", // Light theme
          grayscale: "#6c757d", // Neutral tone
          invert: "#212529", // Dark mode
          locked: "#f8f9fa", // Light theme
          sepia: "#704214", // Warm sepia tone
        },
      },
      dropShadow: {
        "black-outline": "4px 4px 0px rgba(0, 0, 0, 1)",
        "blue-glow": "0 0 8px rgba(59, 130, 246, 0.8)",
        "custom-shadow1": "4px 4px 10px rgba(0, 0, 0, 0.7)",
        "gold-glow": "0 0 12px rgba(255, 215, 0, 0.8)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.2)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "neon-green": "0 0 10px rgba(34, 197, 94, 0.9)",
        "purple-glow": "0 0 8px rgba(128, 90, 213, 0.7)",
        "red-outline": "2px 2px 6px rgba(220, 38, 38, 0.7)",
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fira: ["Fira Sans Condensed", "sans-serif"],
        host: ["Host Grotesk", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "3.5xl": "2rem", // Subheading size
        "4.5xl": "2.5rem", // Slightly smaller heading
        "5.5xl": "3.375rem", // Larger heading
      },
      gridTemplateColumns: {
        layout: "repeat(auto-fit, minmax(240px, 1fr))", // Flexible card layout
      },
      gridTemplateRows: {
        layout: "auto 1fr auto", // Header, content, footer layout
      },
      keyframes: {
        bounceIn: {
          "0%, 100%": { transform: "scale(0.8)", opacity: 0 },
          "50%": { transform: "scale(1.2)", opacity: 1 },
          "80%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        hauntingPulse: {
          "0%, 100%": { opacity: 0.9, transform: "scale(1)" },
          "50%": { opacity: 1.0, transform: "scale(1.02)" },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        slideInLeft: {
          from: { transform: "translateX(-100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        spinFast: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(720deg)" }, // Y-axis spinning gas station effect
        },
        zoomOut: {
          from: { transform: "scale(1)", opacity: 1 },
          to: { transform: "scale(0.5)", opacity: 0 },
        },
      },
      screens: {
        xs: "320px", // Extra small devices
        sm: "480px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px",
        "3xl": "1920px", // Ultra large screens
      },
      textShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.8)",
        slick: "1.5px 1.5px 4px rgba(0, 0, 0, 0.5)",
        strong: "2px 2px 6px rgba(0, 0, 0, 0.6)",
        subtle: "1px 1px 3px rgba(0, 0, 0, 0.3)",
      },
      width: {
        18: "4.5rem",
      },
    },
  },
  darkMode: "class", // Enable dark mode with `class` strategy
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/forms"), // Improved forms styling
    require("@tailwindcss/typography"), // Enhanced typography utilities
    // require('@tailwindcss/aspect-ratio'), // Utility for maintaining aspect ratios
    // require('tailwind-scrollbar'), // Custom scrollbar styling
  ],
};
