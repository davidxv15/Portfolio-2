import * as React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-evenly h-screen w-screen bg-blue-200 text-center">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-blue-900">
          David Velasquez
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Full Stack Software Developer
        </p>
      </div>
      <div>
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-72 h-72 object-cover object-[80%_6%] shadow-lg shadow-gray-600"
        />
      </div>
    </section>
  );
};

export default HeroSection;
