import * as React from 'react';

const HeroSection: React.FC = () => {
   return (
    <section className="flex flex-col items-center justify-evenly h-screen w-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 text-center">
      <div className="mb-6">
        <h1 className="text-4.5xl font-host font-bold text-blue-900"><span className="text-5xl">D</span>AVID <span className="text-5xl">V</span>ELASQUEZ</h1>
        <p className="text-xl font-outfit text-gray-600 mt-2">
          Full Stack Software Developer
        </p>
        <p className="text-md font-league text-gray-700 mt-4">
          Passionate about building clean, scalable applications and solving complex problems with elegant solutions.
        </p>
      </div>
      <div className="mb-8">
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-72 h-72 object-cover object-[80%_6%] shadow-lg shadow-gray-600"
        />
      </div>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition font-outfit shadow-lg shadow-gray-600">
          View My Work
        </button>
        <button className="bg-gray-200 text-blue-500 px-6 py-2 rounded-full shadow hover:bg-gray-300 transition ml-4 shadow-md shadow-gray-600">
          Contact Me
        </button>
      </div>
      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/davidxv15" target="_blank" rel="noopener noreferrer">
          <img src="GitHubLogo.png" alt="GitHub" className="w-14 h-14 rounded-full" />
        </a>
        <a href="https://www.linkedin.com/in/david-velasquez-az/" target="_blank" rel="noopener noreferrer">
          <img src="LinkedInLogo.png" alt="LinkedInLogo.png" className="w-8 h-8 rounded-full" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
