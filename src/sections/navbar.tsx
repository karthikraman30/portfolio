import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
            {/* Desktop menu */}
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
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-gray-300 hover:text-green-400 text-sm font-medium transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="/assets/karthik_raman_CV_personal_uae.pdf"
              download="Karthik_Raman_Resume.pdf"
              className="block w-full text-center px-4 py-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download size={16} className="inline-block mr-2" />
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;