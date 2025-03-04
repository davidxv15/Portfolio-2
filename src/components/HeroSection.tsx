import * as React from "react";
import { useState } from "react";


const HeroSection: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [spin, setSpin] = useState(false);

  const handleImageClick = () => {
    if (clickCount + 1 >= 10) {
      setSpin(true); // Apply spin animation
      setTimeout(() => {
        setSpin(false); // Remove after animation completes
        setClickCount(0); // Reset count
      }, 1000); // Adjust timing based on CSS animation duration
    } else {
      setClickCount(clickCount + 1);
    }
  };
  return (
    <section className=" section flex flex-col items-center justify-evenly h-screen w-screen bg-gradient-to-t from-sky-600 via-blue-100 to-blue-100 text-center ">
      <div className="bg-gradient-to-b from-blue-100 via-blue-100 to-blue-100 -translate-y-">
        <h1
          className="surname relative top-[-6rem] md:top-[rem] lg:top-[3rem] text-5xl md:text-6xl lg:text-7xl font-league font-bold text-slate-900 bg-transparent 
         w- mx-auto outline-none sm:-translate-y-4 md:-translate-y- mt-32 sm:mt-28 scroll-mt-16"
        >
          <span className="text-5.5xl sm:-translate-y-40 md:text-7xl lg:text-7xl">
            D
          </span>
          AVID{" "}
          <span className="text-5.5xl sm:-translate-y-40 md:text-7xl lg:text-7xl">
            V
          </span>
          ELASQUEZ
        </h1>
        {/* <br /> */}
        <h2 className="text-5xl top-[1rem] md:top-[-2rem] lg:top-[-1rem] font-poppins text-slate-900 -mt-12 md:text-left lg:text-center md:mr-32 md:ml-[50%] text-center lg:mr-12 sm:-translate-y-4 lg:translate-y-28 lg:w-90 md:whitespace-nowrap md:text-4xl lg:whitespace-nowrap">
          Software Developer
        </h2>
        <p className="text-xl md:text-justify lg:text-justify font-outfit text-slate-900 mt-2 md:text-left lg:text-left md:mr-24 md:ml-[50%] lg:ml-[54%] lg:translate-y-32 animate-fade">
          Elevating team environments by leading with enthusiasm, integrity, and
          dedication. Driving success through actions that inspire
          {/* and motivate */}.
        </p>
      </div>
      <div className="mb-8 md:mb-16 md:w-2/3 lg:mr-12">
        <img
          src="/WhiteShirtPhoto.jpg"
          alt="My Portrait"
          className={`rounded-full w-72 h-72 lg:w-96 lg:h-96 object-cover shadow-lg transition-all duration-200 ease-in-out no-select ${
            spin ? "spin-animation" : ""
          }`}
          onClick={handleImageClick}
        />
      </div>
      <div className="mt-4 md:ml-64 md:mb-20 lg:space-x-12 md:translate-x-12 lg:translate-x-32 lg:-translate-y-36 xl:-translate-y-28">
        <a href="#projects">
          <button className="scroll-mt-20 bg-blue-900 text-white text-xl px-7 py-3 rounded-full hover:text-slate-900 hover:bg-blue-300 transition font-outfit shadow shadow-md shadow-gray-600 sm:-translate-x-0 md:-translate-y-20 lg:-translate-y-32 border-none transform transition duration-100 animate-fade">
            View My Work
          </button>
        </a>
        <a href="mailto:davidxvaz@gmail.com?subject=Let's Connect&body=Hi David, ">
          <button className="bg-blue-900 text-white text-xl hover:text-slate-900 px-7 py-3 rounded-full hover:bg-blue-300 border-none ml-4 shadow shadow-md shadow-gray-600 sm:translate-x-2 md:-translate-y-20 lg:-translate-y-32 transform transition duration-100 animate-fade">
            Contact Me
          </button>
        </a>
      </div>
      <div className="flex space-x-4 mt-6 mb-6 space-x-24 md:space-x-32 lg:space-x-36  md:translate-x-48 md:-translate-y-16 lg:-translate-y-52 lg:translate-x-64 xl:-translate-y-32 animate-fade z-10">
        <a
          href="https://github.com/davidxv15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="GitHubLogo.png"
            alt="GitHub"
            id="GitHub"
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-white shadow-md shadow-gray-600 md:-translate-y-32 hover:scale-125 transform transition duration-700"
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
            id="linkedin"
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full object-cover shadow-md shadow-gray-600 object-cover bg-white text-red-500 md:-translate-y-32 md:translate-x-2 lg:translate-x-7 border border-white border-2 hover:scale-125 transform transition duration-500"
          />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
