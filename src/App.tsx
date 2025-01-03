import * as React from 'react';
import { useState } from 'react';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import SkillsCarousel from './components/SkillsCarousel';
import SoftSkillsCarousel from './components/SoftSkillsCarousel';
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
      <div className="sticky top-0 z-50 justify-between bg-opacity-0 animate-fade">
        <Navbar /></div>
        <div className="mr-auto flex justify-end font-outfit bg-blue-100 animate-fade">
      <ThemeToggle
          themes={[' ', 'grayscale', 'sepia', 'invert']}
          onThemeChange={handleThemeChange}
        /></div>
      <HeroSection />
      <SkillsCarousel />
      <SoftSkillsCarousel />
      <Projects />
      <AboutMe />
    </div>
  );
};

export default App;
