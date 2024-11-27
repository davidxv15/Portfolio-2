import * as React from "react";
import { useState } from "react";

interface ThemeToggleProps {
  themes: string[]; // Array of theme class names
  onThemeChange: (theme: string) => void; // Callback for theme change
  defaultThemeIndex?: number; // Optional default theme
}

// Map of class names to display names
const themeDisplayNames: Record<string, string> = {
  'default': 'Default',
  'grayscale': 'Grayscale',
  'sepia': 'Sepia',
  'invert': 'Invert',
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  themes,
  onThemeChange,
  defaultThemeIndex = 0, // Default to the first theme
}) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(defaultThemeIndex);

  const handleToggle = () => {
    const nextIndex = (currentThemeIndex + 1) % themes.length; // Cycles through themes
    setCurrentThemeIndex(nextIndex);
    onThemeChange(themes[nextIndex]); // Notify parent of theme change
    document.documentElement.className = `theme-${themes[nextIndex]}`;
  };

  return (
    <div className="flex justify-end items-center bg-transparent mb-1">
      {/* Display customized name */}
      <span className="ml-4 mr-1 text-sm font-medium text-gray-300">
        {themeDisplayNames[themes[currentThemeIndex]] || themes[currentThemeIndex]}
      </span>

      {/* Toggle Button */}
      <button
        onClick={handleToggle}
        className="relative w-18 h-6 bg-gray-800 mr-4 rounded-full shadow-inner focus:outline-none hover:border-gray shadow shadow-gray-400"
        aria-label="Theme Toggle"
      >
        <div
          style={{
            transform: `translateX(${currentThemeIndex * 16}px)`,
            top: '.05rem',
          }}
          className="toggle-dot absolute left-0 top-0 h-5 w-5 bg-blue-600 shadow-inner rounded-full shadow shadow-gray-300 transform transition-transform duration-900 ease-in-out"
        ></div>
      </button>
    </div>
  );
};

export default ThemeToggle;
