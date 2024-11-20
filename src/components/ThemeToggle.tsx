import * as React from 'react';
import { useState } from 'react';

interface ThemeToggleProps {
  themes: string[]; // Array of theme names
  onThemeChange: (theme: string) => void; // Callback for theme change
  defaultThemeIndex?: number; // Optional default theme
}

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
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className="relative w-20 h-8 bg-gray-800 rounded-full shadow-inner focus:outline-none"
        aria-label="Theme Toggle"
      >
        <div
          style={{ transform: `translateX(${currentThemeIndex * 20}px)` }} // Dynamic position
          className="absolute left-0 top-0 h-8 w-8 bg-gray-600 rounded-full shadow transform transition-transform duration-300 ease-in-out"
        ></div>
      </button>
      <span className="ml-4 text-sm font-medium text-gray-600">
        {themes[currentThemeIndex]}
      </span>
    </div>
  );
};

export default ThemeToggle;
