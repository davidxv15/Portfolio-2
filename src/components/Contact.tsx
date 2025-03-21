import * as React from "react";
import { useState } from "react";
import MoonLauncher from "./EscapeFromEarth";

interface ContactProps {
  theme: string; // Define the type for the theme prop
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  return (
    <section className="bg-gradient-to-b from-slate-900 from-20% via-sky-900 via-90% to-gray-700 to-100% h-screen xs:py-80">
      <div className="max-w-4xl mx-auto text-center px-4 animate-hauntingPulse">
        <h2 className="text-3xl md:text-5xl font-bold text-white scroll-mt-4 mb-6 animate-fade no-select">
          Get in Touch
        </h2>
        <p className="text-white text-lg mb-8" id="contact">
          {/* How can I multiply your productivity? */}
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 animate-fade no-select">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/david-velasquez-az/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-sky-700 px-4 py-2 rounded-full shadow-lg hover:bg-sky-500 hover:text-white transition duration-300"
          >
            <img src="linkedEdit.PNG" alt="LinkedIn" className="w-6 h-6 mr-2" />
            LinkedIn
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/davidxv15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-sky-500 hover:text-white transition duration-300"
          >
            <img
              src="GitHubLogo.png"
              alt="GitHub"
              className="w-6 h-6 mr-2 rounded-full"
            />
            GitHub
          </a>
          {/* Email */}
          <a
            href="mailto:davidvelasquezdev@gmail.com?subject=Let's Connect&body=Hello David, "
            className="flex items-center bg-white text-sky-700 px-4 py-2 rounded-full shadow-lg hover:bg-sky-500 hover:text-white transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm18 0H4v.511l8 5.333 8-5.333V5z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
