import * as React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-blue-400 text-center">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          I’m David, a Full Stack Develeoper.
        </p>
      </div>
      <div>
        {/* Add the photo */}
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-48 h-48 object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
