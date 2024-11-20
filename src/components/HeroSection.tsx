import * as React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-blue-400 text-center">
      <div className="mb-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Display Brand value immediately
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Succinct, bold(?) introduction.
        </p>
      </div>
      <div>
        {/* Add the photo */}
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-64 h-64 object-cover object-[80%_8%] shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
