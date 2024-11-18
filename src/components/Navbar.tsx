import * as React from 'react';
const { useState } = React;


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo or Brand Name */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
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
          <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Home
          </a>
          <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            About
          </a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Projects
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
