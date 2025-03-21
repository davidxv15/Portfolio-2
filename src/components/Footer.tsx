const Footer = () => {
    return (
      <footer className="w-full bg-gray-900 text-white py-4 text-center text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} David. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/davidxv15"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/###"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:davidvelasquezdev@gmail.com"
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
  