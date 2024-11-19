import * as React from "react";
import { useState } from "react";

interface ThemeToggleProps {
  themes: string[]; // Array of theme names
  onThemeChange: (theme: string) => void; // Callback for theme change
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ themes, onThemeChange }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const handleToggle = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length; // Cycles through themes
    setCurrentThemeIndex(nextIndex);
    onThemeChange(themes[nextIndex]); // Notify parent of theme change
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className="relative w-20 h-8 bg-gray-300 rounded-full shadow-inner focus:outline-none"
        aria-label="Theme Toggle"
      >
        <div
          className={`absolute left-0 top-0 h-8 w-8 bg-gray-800 rounded-full shadow transform transition-transform duration-300 ease-in-out ${
            themes.length > 1 ? `translate-x-${currentThemeIndex * 5}` : ""
          }`}
        ></div>
      </button>
      <span className="ml-4 text-sm font-medium text-gray-600">
        {themes[currentThemeIndex]}
      </span>
    </div>
  );
};

export default ThemeToggle;
