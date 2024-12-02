import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-evenly h-screen w-screen bg-gradient-to-t from-blue-800 via-blue-200 to-blue-200 text-center md:mt-10 lg:mt-0">
      <div className="mb-2 bg-gradient-to-b from-blue-100 via-blue-100 to-blue-200">
        <h1 className="surname text-5xl font-league font-bold text-slate-900 bg-blue-100 
         w-3/4 mx-auto outline outline-none">
          <span className="text-5.5xl">D</span>AVID{" "}
          <span className="text-5.5xl">V</span>ELASQUEZ
        </h1>
        <p className="text-xl font-outfit text-slate-900 mt-2">
          Full Stack Software Developer
        </p>
        <p className="text-md font-poppins text-slate-900 mt-4">
          Passionate about building clean, scalable applications and solving
          complex problems with elegant solutions.
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
        <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition font-outfit shadow-inner rounded-full shadow shadow-gray-200 shadow">
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
            src="inLinked.png"
            alt="LinkedIn logo"
            className="w-14 h-14 rounded-full object-cover shadow-md shadow-gray-600 object-[30%_5%]"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
