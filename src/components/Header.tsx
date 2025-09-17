import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection('home')}
          >
            Meet.dev
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="mailto:meetkinkhabwala1303@gmail.com" 
              className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail size={18} />
            </a>
            <a 
              href="tel:6351966086" 
              className="p-2 text-gray-400 hover:text-green-400 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Phone size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/meet-kinkhabwala-451925279" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-gray-400 hover:text-blue-500 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-300 hover:text-white transition-colors duration-300 py-2 px-4 hover:bg-white/10 rounded-lg"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-white/10">
              <a href="mailto:meetkinkhabwala1303@gmail.com" className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:6351966086" className="p-2 text-gray-400 hover:text-green-400 transition-colors">
                <Phone size={18} />
              </a>
              <a href="https://www.linkedin.com/in/meet-kinkhabwala-451925279" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;