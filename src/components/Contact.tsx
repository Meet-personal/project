import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const personalInfo = {
    dateOfBirth: "13-04-2003",
    nationality: "Indian"
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "meetkinkhabwala1303@gmail.com",
      href: "mailto:meetkinkhabwala1303@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 6351966086",
      href: "tel:6351966086",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Surat, India 395005",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/meet-kinkhabwala-451925279",
      color: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm mb-4">
            <MessageSquare className="w-4 h-4 text-blue-300 mr-2" />
            <span className="text-sm text-blue-100">Let's Connect</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Ready to discuss your next project? Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-3 text-blue-300" size={28} />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div>
                      <p className="font-medium text-white">{method.label}</p>
                      <p className="text-gray-200 group-hover:text-white transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <User className="mr-3 text-indigo-300" size={28} />
                Personal Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:bg-white/15 transition-all duration-300">
                  <div className="w-3 h-3 bg-blue-300 rounded-full mr-4 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-white">Date of Birth</p>
                    <p className="text-gray-200">{personalInfo.dateOfBirth}</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-blue-400/30 hover:bg-white/15 transition-all duration-300">
                  <div className="w-3 h-3 bg-indigo-300 rounded-full mr-4 animate-pulse"></div>
                  <div>
                    <p className="font-medium text-white">Nationality</p>
                    <p className="text-gray-200">{personalInfo.nationality}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Send className="mr-3 text-green-300" size={28} />
              Send Message
            </h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/40 rounded-xl flex items-center animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                <span className="text-green-200">Message sent successfully!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-blue-400/30 rounded-xl backdrop-blur-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 placeholder-gray-300 text-white transition-all duration-300 hover:bg-white/15"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-blue-400/30 rounded-xl backdrop-blur-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 placeholder-gray-300 text-white transition-all duration-300 hover:bg-white/15"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-400/30 rounded-xl backdrop-blur-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 placeholder-gray-300 text-white transition-all duration-300 hover:bg-white/15"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-blue-400/30 rounded-xl backdrop-blur-sm focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-300/20 placeholder-gray-300 text-white resize-none transition-all duration-300 hover:bg-white/15"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full group bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 flex items-center justify-center gap-2 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105"
              >
                <Send size={20} className="group-hover:animate-bounce" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;