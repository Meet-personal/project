import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  description?: string;
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      institution: "Jain University",
      degree: "MCA in Computer Science",
      location: "Bangalore",
      period: "2023-2025",
      gpa: "9.18",
      description: "Advanced studies in computer applications with focus on software development and system design"
    },
    {
      institution: "Vivekanand College",
      degree: "BCA in Computer Science",
      location: "Gujarat",
      period: "2020-2023",
      gpa: "6.0",
      description: "Bachelor's degree with comprehensive study of computer applications and programming"
    },
    {
      institution: "Gyaniyot Vidhyalaya",
      degree: "12th Commerce",
      location: "Gujarat",
      period: "2019",
      gpa: "50%",
      description: "Higher secondary education with commerce stream"
    },
    {
      institution: "Gyaniyot Vidhyalaya",
      degree: "10th",
      location: "Gujarat",
      period: "2017",
      gpa: "60%",
      description: "Secondary education with strong academic foundation"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-4">
            <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm text-gray-700">Academic Background</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational achievements
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-blue-200/50 group animate-fade-in-up"
              style={{animationDelay: `${index * 150}ms`}}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white mr-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.institution}</h3>
                  <p className="text-blue-600 font-semibold">{edu.degree}</p>
                </div>
              </div>
              
              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Calendar size={18} className="mr-3 text-blue-500" />
                  <span className="font-medium">{edu.period}</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  <MapPin size={18} className="mr-3 text-indigo-500" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Award size={18} className="mr-3 text-blue-600" />
                  <span className="font-semibold">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      GPA: {edu.gpa}
                    </span>
                  </span>
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <div className="p-4 bg-blue-50/50 rounded-lg border border-blue-200/30">
                  <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                </div>
              )}

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '800ms'}}>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-200/50 hover:bg-white/80 transition-all duration-300 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              MCA
            </div>
            <div className="text-gray-600">Current Degree</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-200/50 hover:bg-white/80 transition-all duration-300 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              9.18
            </div>
            <div className="text-gray-600">Current GPA</div>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-200/50 hover:bg-white/80 transition-all duration-300 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              2025
            </div>
            <div className="text-gray-600">Graduation Year</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;