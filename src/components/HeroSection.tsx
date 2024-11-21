import * as React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen bg-blue-200 text-center">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-gray-800">
          David Velasquez
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Full Stack Software Developer
        </p>
      </div>
      <div>
        {/* Add the photo */}
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-64 h-64 object-cover object-[80%_8%] shadow-lg shadow-gray-600"
        />
      </div>
    </section>
  );
};

export default HeroSection;
