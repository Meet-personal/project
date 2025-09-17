import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ChevronUp, User } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-float-delayed"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-4">
                <User className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">About Me</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-8">
                About Me
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in-up delay-200 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                  I am a dedicated and enthusiastic Laravel Developer with exceptional organizational skills 
                  and a passion for creating innovative web solutions. With extensive experience in API development, 
                  database management, and modern web technologies, I bring a comprehensive skill set to every project.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed animate-fade-in-up delay-400 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                  Throughout my career, I have worked with leading technology companies, developing scalable applications, 
                  integrating complex APIs, and creating automated solutions that improve operational efficiency. 
                  My experience spans from building WhatsApp chatbots to implementing webhook integrations and 
                  managing database architectures.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up delay-600 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
                  I am committed to continuous learning and staying updated with the latest industry trends. 
                  My goal is to contribute to team success and achieve company objectives through innovative, 
                  high-quality software solutions that make a real impact.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 z-50 animate-bounce group"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} className="group-hover:animate-pulse" />
        </button>
      )}
    </div>
  );
}

export default App;