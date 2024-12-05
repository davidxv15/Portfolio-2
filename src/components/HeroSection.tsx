import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="section flex flex-col items-center justify-evenly h-screen w-screen bg-gradient-to-t from-sky-500 via-blue-100 to-blue-100 text-center md:mt-5 lg:mt-4 md:-translate-y-5">
      <div className="mb-2 bg-gradient-to-b from-blue-100 via-blue-100 to-blue-100">
        <h1
          className="surname text-5xl lg:text-6xl font-league font-bold text-slate-900 bg-transparent 
         w-3/4 mx-auto outline outline-none"
        >
          <span className="text-5.5xl lg:text-7xl">D</span>AVID{" "}
          <span className="text-5.5xl lg:text-7xl">V</span>ELASQUEZ
        </h1>
        <p className="text-xl font-outfit text-slate-900 mt-2 md:text-right lg:text-right md:mr-32 md:ml-[50%] lg:mr-32">
          Full Stack Software Developer
        </p>
        <p className="text-lg font-outfit text-slate-900 mt-2 md:text-right lg:text-left md:mr-24 md:ml-[50%] lg:mr-12 lg:ml-[50%]">
          Passionate about building clean, scalable applications and solving
          complex problems with elegant solutions.
        </p>
      </div>
      <div className="mb-8 md:mb-16 md:w-2/3">
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover object-[80%_6%] shadow-lg shadow-gray-600 md:absolute md:bottom-52 md:left-28 lg:left-40 lg:-translate-y-24 transition-all duration-700 ease-in-out"
        />
      </div>
      <div className="mt-4">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition font-outfit shadow-inner rounded-full shadow shadow-gray-200 shadow md:">
          View My Work
        </button>
        <button className="bg-gray-100 text-blue-900 px-6 py-2 rounded-full shadow hover:bg-gray-300 transition ml-4 shadow-md shadow-gray-600">
          Contact Me
        </button>
      </div>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/davidxv15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="GitHubLogo.png"
            alt="GitHub"
            className="w-14 h-14 rounded-full shadow-md shadow-gray-600"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/david-velasquez-az/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="LinkedInLogo.png"
            alt="LinkedIn logo"
            className="w-14 h-14 rounded-full object-cover shadow-md shadow-gray-600 object-cover bg-blue-400"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
