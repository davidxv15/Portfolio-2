import * as React from 'react';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <div><Navbar /></div>
      <HeroSection />
      <AboutMe />
    </div>
  );
};

export default App;
