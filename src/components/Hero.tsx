import React, { useEffect, useState } from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Github, ChevronDown, Code, Database, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Laravel Developer', 'Backend Engineer', 'API Specialist', 'Database Expert'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-32 animate-bounce-slow">
          <Code className="w-8 h-8 text-blue-300/40" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce-slow delay-1000">
          <Database className="w-8 h-8 text-indigo-300/40" />
        </div>
        <div className="absolute top-1/2 right-20 animate-bounce-slow delay-2000">
          <Globe className="w-8 h-8 text-blue-400/40" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 border border-blue-400/30 rounded-full backdrop-blur-sm shadow-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-sm font-medium text-white">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="text-white">
                  Meet
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Kinkhabwala
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-gray-300 h-12">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                  {text}
                </span>
                <span className="animate-blink">|</span>
              </div>
            </div>

            <p className="text-lg text-gray-200 leading-relaxed max-w-2xl">
              Passionate Laravel developer with expertise in building scalable web applications, 
              API development, and database management. Transforming ideas into powerful digital solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">2+</div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-gray-200">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">4</div>
                <div className="text-sm text-gray-200">Companies</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:meetkinkhabwala1303@gmail.com"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                Get In Touch
              </a>
              <a
                href="/CV.pdf"
                download
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-blue-400/30 rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="mailto:meetkinkhabwala1303@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-blue-400/30 hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                <Mail size={20} className="text-gray-200 group-hover:text-blue-400" />
              </a>
              <a href="tel:6351966086" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-blue-400/30 hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                <Phone size={20} className="text-gray-200 group-hover:text-green-400" />
              </a>
              <a href="https://www.linkedin.com/in/meet-kinkhabwala-451925279" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-blue-400/30 hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                <Linkedin size={20} className="text-gray-200 group-hover:text-blue-500" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-indigo-400/40 animate-spin-reverse"></div>
              <div className="absolute inset-8 rounded-full border-2 border-blue-300/40 animate-spin-slow"></div>
              
              {/* Profile Circle */}
              <div className="absolute inset-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                MK
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center animate-bounce-slow">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center animate-bounce-slow delay-1000">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <div className="flex flex-col items-center text-gray-200 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;