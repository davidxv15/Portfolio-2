import * as React from 'react';
import AboutMe from './components/AboutMe';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
    </div>
  );
};

export default App;
