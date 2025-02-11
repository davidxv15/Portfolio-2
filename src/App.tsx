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
import MoonLauncher from "./components/MoonLauncher"

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
        <div className="mr-auto flex justify-end font-outfit bg-blue-100 animate-fade">
      <ThemeToggle
          themes={['default', 'grayscale', 'sepia', 'last']}
  onThemeChange={(theme) => handleThemeChange(theme)}
        /></div>
      <HeroSection />
      <SkillsCarousel tooltipText="Skills" />
      {/* <SoftSkillsCarousel /> */}
      <Projects />
      <AboutMe />
      <Contact theme={theme} />
      {/* 🛸 Conditionally Render the Game When 'default' Theme is Active */}
      {theme === "last" && (
        <div className="mt-12 flex justify-center scale-75 md:scale-80 lg:scale-100">
          <MoonLauncher />
        </div>
      )}

    </div>
  );
};

export default App;
