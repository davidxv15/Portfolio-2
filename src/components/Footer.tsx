const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-white py-4 text-center text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-zinc-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  