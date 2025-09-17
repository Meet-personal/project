import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Zap, 
  Users, 
  Clock, 
  Target, 
  Lightbulb,
  MessageSquare,
  Cog,
  Server,
  Monitor,
  Layers
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "Laravel Framework", icon: <Code size={24} />, category: "technical", level: 95 },
    { name: "API Development", icon: <Server size={24} />, category: "technical", level: 90 },
    { name: "Database Management", icon: <Database size={24} />, category: "technical", level: 88 },
    { name: "Webhook Integration", icon: <Zap size={24} />, category: "technical", level: 85 },
    { name: "WhatsApp Chatbot", icon: <MessageSquare size={24} />, category: "technical", level: 82 },
    { name: "Cron Job Automation", icon: <Cog size={24} />, category: "technical", level: 80 },
    { name: "WordPress Development", icon: <Monitor size={24} />, category: "technical", level: 75 },
    { name: "Shopify Development", icon: <Globe size={24} />, category: "technical", level: 70 },
    
    { name: "Project Management", icon: <Target size={24} />, category: "management", level: 85 },
    { name: "Team Leadership", icon: <Users size={24} />, category: "management", level: 80 },
    { name: "Strategic Planning", icon: <Layers size={24} />, category: "management", level: 75 },
    
    { name: "Communication", icon: <MessageSquare size={24} />, category: "soft", level: 90 },
    { name: "Problem Solving", icon: <Lightbulb size={24} />, category: "soft", level: 92 },
    { name: "Time Management", icon: <Clock size={24} />, category: "soft", level: 88 },
    { name: "Team Collaboration", icon: <Users size={24} />, category: "soft", level: 85 },
    { name: "Adaptability", icon: <Zap size={24} />, category: "soft", level: 87 }
  ];

  const categories = [
    { 
      name: "Technical Skills", 
      value: "technical", 
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/20"
    },
    { 
      name: "Management Skills", 
      value: "management", 
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/20"
    },
    { 
      name: "Soft Skills", 
      value: "soft", 
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mb-4">
            <Layers className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-600">Technical Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-purple-800 to-pink-800 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through hands-on experience
          </p>
        </div>

        {/* Skills Categories */}
        {categories.map((category, categoryIndex) => (
          <div key={category.value} className="mb-16">
            {/* Category Header */}
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.name}
              </h3>
              <div className={`w-20 h-1 bg-gradient-to-r ${category.color} mx-auto rounded-full`}></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skills
                .filter((skill) => skill.category === category.value)
                .map((skill, index) => (
                  <div
                    key={index}
                    className={`group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border ${category.borderColor} animate-fade-in-up`}
                    style={{animationDelay: `${(categoryIndex * 300) + (index * 100)}ms`}}
                  >
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.bgColor} border ${category.borderColor} mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <div className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {skill.icon}
                      </div>
                    </div>
                    
                    {/* Skill Name */}
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 group-hover:scale-105 transition-transform duration-300">
                      {skill.name}
                    </h4>
                    
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Proficiency</span>
                        <span className={`text-sm font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 300) + (index * 100) + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in-up" style={{animationDelay: '1200ms'}}>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-500/20 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
              8+
            </div>
            <div className="text-gray-600">Technical Skills</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-500/20 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <div className="text-gray-600">Management Skills</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-green-500/20 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-gray-600">Soft Skills</div>
          </div>
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-pink-500/20 hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;