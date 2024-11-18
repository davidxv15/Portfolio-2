const Navbar: React.FC = () => {
    return (
      <nav className="w-full h-16 bg-gray-800 text-white flex items-center px-4">
        <ul className="flex space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
  