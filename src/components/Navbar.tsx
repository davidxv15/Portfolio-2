import * as React from "react";
const { useState } = React;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-blue-800 via-blue-700 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-gray-100 text-xl font-outfit flex items-center justify-between h-14">
        Greeting
          <div className="flex items-center">
            <a
              href="#"
              className="text-gray-100 hover:text-gray-300 text-2xl justify-around"
            >
              Portfolio
            </a>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-100 hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="text-gray-100 hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="text-gray-100 hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-100 hover:text-gray-300">
              Contact
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 text-xl bg-gray-900 rounded-xl shadow-inner focus:outline-none hover:border-gray-300 shadow shadow-gray-400"
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
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="text-gray-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-gray-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-gray-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-200 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 hover:text-gray-200"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
