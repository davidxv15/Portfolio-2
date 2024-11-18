import * as React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section w-full h-screen bg-blue-500 flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hello, I'm David</h1>
      <p className="text-xl mt-4">A passionate software engineer</p>
      <a href="#projects" className="btn-primary mt-6 inline-block">View My Work</a>
    </section>
  );
};

export default HeroSection;
