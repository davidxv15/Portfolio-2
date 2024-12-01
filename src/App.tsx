import * as React from 'react';
import { useState } from 'react';

import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [theme, setTheme] = useState('default');

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.className = '';
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div>
      <div className="sticky top-0 z-50 justify-between bg-opacity-0">
        <Navbar /></div>
        <div className="mr-auto flex justify-end font-outfit bg-slate-100">
      <ThemeToggle
          themes={[' ', 'grayscale', 'sepia', 'invert']}
          onThemeChange={handleThemeChange}
        /></div>
      <HeroSection />
      <AboutMe />
    </div>
  );
};

export default App;
