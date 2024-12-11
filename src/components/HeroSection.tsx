import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="section flex flex-col items-center justify-evenly h-screen w-screen bg-gradient-to-t from-sky-600 via-blue-100 to-blue-100 text-center md:mt-5 lg:mt-4 md:-translate-y-5">
      <div className="mb-2 bg-gradient-to-b from-blue-100 via-blue-100 to-blue-100">
        <h1
          className="surname text-5xl md:text-6xl lg:text-7xl font-league font-bold text-slate-900 bg-transparent 
         w-3/4 mx-auto outline-none sm:-translate-y-12 md:-translate-y-4 lg:-translate-y-11"
        >
          <span className="text-5.5xl md:text-7xl lg:text-7xl">D</span>AVID{" "}
          <span className="text-5.5xl md:text-7xl lg:text-7xl">V</span>ELASQUEZ
        </h1>
        <h2 className="text-5xl font-poppins text-slate-900 mt-1 md:text-left lg:text-center md:mr-32 md:ml-[50%] text-center lg:mr-8 lg:-translate-y-6 lg:w-90 md:whitespace-nowrap md:text-4xl lg:whitespace-nowrap">
          Software Developer
        </h2>
        <p className="text-xl font-outfit text-slate-900 mt-2 md:text-left lg:text-left md:mr-24 md:ml-[50%] lg:ml-[52%] lg:-translate-y-0">
          Passionate about building clean, scalable applications and solving
          complex problems with elegant solutions.
        </p>
      </div>
      <div className="mb-8 md:mb-16 md:w-2/3">
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className="rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover object-[80%_6%] shadow-lg shadow-gray-600 md:absolute md:top-48 md:left-24 lg:left-28 xl:left-40 lg:top-44 lg:-translate-y-24 xl:top-48 transition-all duration-900 ease-in-out animate-fade"
        />
      </div>
      <div className="mt-4 md:ml-96 md:mb-20 lg:space-x-12">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition font-outfit shadow-inner shadow shadow-gray-200 shadow md:-translate-y-20 lg:-translate-y-32 hover:scale-125 transform transition duration-300">
          View My Work
        </button>
        <button className="bg-gray-100 text-blue-700 hover:text-white px-6 py-2 rounded-full shadow hover:bg-slate-700 hover:outline-none ml-4 shadow-md shadow-gray-600 md:-translate-y-20 lg:-translate-y-32 hover:scale-105 transform transition duration-200">
          Contact Me
        </button>
      </div>
      <div className="flex space-x-4 mt-6 md:space-x-16 lg:space-x-28 translate-x-2 md:translate-x-48 md:-translate-y-20 lg:-translate-y-24">
        <a
          href="https://github.com/davidxv15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="GitHubLogo.png"
            alt="GitHub"
            id="GitHub"
            className="w-14 h-14 lg:w-20 lg:h-20 rounded-full shadow-md shadow-gray-600 md:-translate-y-32 hover:scale-125 transform transition duration-700"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/david-velasquez-az/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="linkedEdit.PNG"
            alt="LinkedIn logo"
            className="w-14 h-14 lg:w-20 lg:h-20 rounded-full object-cover shadow-md shadow-gray-600 object-cover bg-white text-red-500 md:-translate-y-32 border-white border-2 hover:scale-125 transform transition duration-500"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
