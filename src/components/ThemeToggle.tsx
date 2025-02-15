import * as React from "react";
import { useState } from "react";

interface ThemeToggleProps {
  themes: string[]; // Array of theme names
  onThemeChange: (theme: string) => void; // Callback for theme change
  defaultThemeIndex?: number; // Optional default theme
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  themes,
  onThemeChange,
  defaultThemeIndex = 0, // default to the first theme
}) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(defaultThemeIndex);

  const handleToggle = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length; // Cycles through themes
    setCurrentThemeIndex(nextIndex);
    onThemeChange(themes[nextIndex]); // Notify parent of theme change
  };

  const handleThemeChange = (newTheme: string) => {
    document.documentElement.className = ""; // Reset any existing theme classes
    document.documentElement.classList.add(newTheme); // Apply the new theme class
  };
  

  return (
    <div className="flex justify-end items-center bg-transparent mb-3">
      <span className="ml-4 mr-1 font-medium text-slate-300 p-2">
        {themes[currentThemeIndex]}
      </span>
      <button
        onClick={handleToggle}
        className="relative w-18 h-6 bg-gray-200 mr-4 rounded-full shadow-inner mt-1 focus:outline-none border-blue-100 hover:border-white shadow shadow-gray-700"
        aria-label="Theme Toggle"
      >
        <div
          style={{
            transform: `translateX(${currentThemeIndex * 16}px)`,
            top: ".1rem",
          }} // Dynamic position
          className="toggle-dot absolute left-0 top-0 h-5 w-5 bg-slate-800 shadow-inner rounded-full shadow shadow-gray-300 transform transition-transform duration-900 ease-in-out"
        ></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
