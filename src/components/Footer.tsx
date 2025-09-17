import React from 'react';
import { Heart, Code, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-12 border-t border-blue-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Meet.dev
            </div>
            <p className="text-gray-200 leading-relaxed">
              Laravel Developer passionate about creating innovative web solutions and building scalable applications.
            </p>
            <div className="flex items-center space-x-2 text-gray-200">
              <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Experience', 'Education', 'Skills', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-200">
              <p className="hover:text-white transition-colors">meetkinkhabwala1303@gmail.com</p>
              <p className="hover:text-white transition-colors">+91 6351966086</p>
              <p className="hover:text-white transition-colors">Surat, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-200">
              <span>Made with</span>
              <Heart className="text-red-300 mx-2 animate-pulse" size={16} fill="currentColor" />
              <span>by Meet Kinkhabwala © {currentYear}</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-2 text-gray-200">
              <Code className="text-blue-300" size={16} />
              <span className="text-sm">Built with React + TypeScript + Tailwind CSS</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-gray-200 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="text-sm">Back to Top</span>
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/15 transition-all duration-300">
                <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;