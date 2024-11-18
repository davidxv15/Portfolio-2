import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-blue-500 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Hello, I'm David</h1>
      <p className="text-xl mt-4">A passionate software engineer</p>
      <a href="#projects" className="btn-primary mt-6 inline-block">View My Work</a>
    </section>
  );
};

export default HeroSection;
