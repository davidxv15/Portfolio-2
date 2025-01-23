import * as React from 'react';
import { useState } from 'react';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import SkillsCarousel from './components/SkillsCarousel';
// import SoftSkillsCarousel from './components/SoftSkillsCarousel';
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
          themes={['', 'grayscale', 'sepia', 'default']}
  onThemeChange={(theme) => handleThemeChange(theme)}
        /></div>
      <HeroSection />
      <SkillsCarousel tooltipText="Skills" />
      {/* <SoftSkillsCarousel /> */}
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default App;
