import * as React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-blue-400 text-center">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          I’m David, a Full Stack Developer.
        </p>
      </div>
      <div>
        {/* Add the photo */}
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
