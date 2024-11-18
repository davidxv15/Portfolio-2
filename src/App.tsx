import * as React from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />
    </div>
  );
};

export default App;
