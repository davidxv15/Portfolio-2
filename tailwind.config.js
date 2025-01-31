/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Includes all necessary file types in src
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small devices
        sm: "480px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px",
        "3xl": "1920px", // Ultra large screens
      },
      fontFamily: {
        fira: ["Fira Sans Condensed", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        host: ["Host Grotesk", "sans-serif"],
      },
      fontSize: {
        "5.5xl": "3.375rem", // Larger heading
        "4.5xl": "2.5rem", // Slightly smaller heading
        "3.5xl": "2rem", // Subheading size
      },
      width: {
        18: "4.5rem",
      },
      colors: {
        customThemes: {
          default: "#f8f9fa", // Light theme
          grayscale: "#6c757d", // Neutral tone
          invert: "#212529", // Dark mode
          sepia: "#704214", // Warm sepia tone
        },
      },
      textShadow: {
        subtle: "1px 1px 3px rgba(0, 0, 0, 0.3)",
        slick: "1.5px 1.5px 4px rgba(0, 0, 0, 0.5)",
        strong: "2px 2px 6px rgba(0, 0, 0, 0.6)",
        glow: "0 0 10px rgba(255, 255, 255, 0.8)",
      },
      dropShadow: {
        "custom-shadow1": "4px 4px 10px rgba(0, 0, 0, 0.7)",
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.2)",
        "blue-glow": "0 0 8px rgba(59, 130, 246, 0.8)",
        "gold-glow": "0 0 12px rgba(255, 215, 0, 0.8)",
        "purple-glow": "0 0 8px rgba(128, 90, 213, 0.7)",
        "neon-green": "0 0 10px rgba(34, 197, 94, 0.9)",
        "black-outline": "4px 4px 0px rgba(0, 0, 0, 1)",
        "red-outline": "2px 2px 6px rgba(220, 38, 38, 0.7)",
      },
      animation: {
        fade: "fadeIn 1s ease-in-out",
        spinSlow: "spin 3s linear infinite",
        pulseFast: "pulse 0.5s linear infinite",
        slideInLeft: "slideInLeft 0.5s ease-out",
        slideInRight: "slideInRight 0.5s ease-out",
        bounceIn: "bounceIn 0.6s ease-in-out",
        zoomOut: "zoomOut 0.4s ease-in",
        rotateY: "rotateY 1s linear",
        hauntingPulse: "hauntingPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideInLeft: {
          from: { transform: "translateX(-100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        bounceIn: {
          "0%, 100%": { transform: "scale(0.8)", opacity: 0 },
          "50%": { transform: "scale(1.2)", opacity: 1 },
          "80%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          from: { transform: "scale(1)", opacity: 1 },
          to: { transform: "scale(0.5)", opacity: 0 },
        },
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        hauntingPulse: {
          "0%, 100%": { opacity: 0.9, transform: "scale(1)" },
          "50%": { opacity: 1.0, transform: "scale(1.02)" },
        },
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        card: "8px",
      },
      gridTemplateColumns: {
        layout: "repeat(auto-fit, minmax(240px, 1fr))", // Flexible card layout
      },
      gridTemplateRows: {
        layout: "auto 1fr auto", // Header, content, footer layout
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
