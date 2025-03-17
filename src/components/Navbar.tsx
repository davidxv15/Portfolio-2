import * as React from "react";
const { useState } = React;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 text-white z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gray-100 text-xl font-outfit flex items-center justify-between h-14">
          <div className="flex items-center">
            <a href="#" className="text-black hover:text-gray-300 text-2xl">
              David Velasquez
            </a>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-5 tracking-tight text-2xl">
            <a href="#" className="text-gray-200 hover:text-gray-400 no-select">
              Home
            </a>
            <a href="#skills" className="text-gray-200 hover:text-gray-400 no-select">
              Skills
            </a>
            <a href="#projects" className="text-gray-200 hover:text-gray-400 no-select">
              Projects
            </a>
            <a href="#about" className="text-gray-200 hover:text-gray-400 no-select">
              About
            </a>
            <a href="#contact" className="text-gray-200 hover:text-gray-400 no-select">
              Contact
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="sticky md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 text-xl bg-gray-900 rounded-xl shadow-inner focus:outline-none hover:border-gray-300 shadow shadow-gray-400 animate-fade"
            >
              <svg
                className="h-4 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="sticky md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-t from-slate-700 via-slate-800 to-slate-800">
          <a
            href="#"
            className="text-gray-200 block px-3 py-2 rounded-md text-xl font-bold hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-200 block px-3 py-2 rounded-md text-xl font-bold hover:bg-gray-400 hover:text-gray-900"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-200 block px-3 py-2 rounded-md text-xl font-bold hover:bg-gray-100 hover:text-gray-900"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-200 block px-3 py-2 rounded-md text-xl font-bold hover:bg-gray-100 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-200 block px-3 py-2 rounded-md text-xl font-bold hover:bg-gray-100 hover:text-gray-900"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
