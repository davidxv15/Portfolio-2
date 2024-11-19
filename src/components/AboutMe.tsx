import * as React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-12 px-4 sm:px-8" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-6">
          Hi, I'm David, a passionate software engineer specializing in building efficient,
          scalable, and visually stunning web applications. With expertise in React, TypeScript,
          and the MERN stack, I enjoy turning complex ideas into user-friendly experiences.
        </p>
        <p className="text-md sm:text-lg leading-relaxed">
          Outside of coding, I love music and model building. 
          I’m always eager to learn and take on new challenges.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
