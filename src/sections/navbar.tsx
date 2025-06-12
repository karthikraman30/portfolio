import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-2xl font-black hover:text-green-400 transition-all duration-300 cursor-pointer transform hover:scale-105">
              Karthik Raman
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-green-400 px-4 py-2 text-sm font-medium transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="/assets/resume.pdf"
              download="Karthik_Raman_Resume.pdf"
              className="bg-gradient-to-r from-green-500 to-blue-600 px-4 py-2 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;