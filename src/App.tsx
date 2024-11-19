import * as React from 'react';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <div>
      <div className="sticky top-0 z-50"><Navbar /></div>
      <HeroSection />
      <AboutMe />
    </div>
  );
};

export default App;
