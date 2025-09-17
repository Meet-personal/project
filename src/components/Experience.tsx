import React from 'react';
import { Calendar, MapPin, ChevronRight, Building, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies?: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Laravel Developer",
      company: "Codemario",
      location: "Surat, Gujarat",
      period: "January 2025 - May 2025",
      responsibilities: [
        "Participated in software field testing and quality assurance processes",
        "Designed customized solutions for proposals to potential customers",
        "Built robust databases and table structures for web applications",
        "Tested and deployed scalable and highly available software products",
        "Worked successfully within tight deadlines and fast-paced environment"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Git"]
    },
    {
      title: "Laravel Developer",
      company: "Kian Technology",
      location: "Surat, Gujarat",
      period: "January 2024 - January 2025",
      responsibilities: [
        "Developed standard procedures for testing and validating software",
        "Collected and examined user feedback to improve software capacity",
        "Troubleshot and debugged software to rectify discrepancies",
        "Developed and implemented new software applications to improve operational efficiency"
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker"]
    },
    {
      title: "Laravel Developer",
      company: "Vnerds Technologies",
      location: "Ahmedabad, Gujarat",
      period: "October 2023 - October 2024",
      responsibilities: [
        "API Development: Proficient in designing, developing, and integrating APIs",
        "SQL and Database Management: Skilled in writing complex SQL queries",
        "Webhook Integration: Experienced in creating and implementing webhook APIs",
        "WhatsApp Chatbot Development: Developed and deployed AI-powered chatbots",
        "Cron Job Automation: Adept at setting up and managing automated tasks"
      ],
      technologies: ["Laravel", "API Development", "MySQL", "WhatsApp API", "Cron Jobs"]
    },
    {
      title: "Laravel Developer (Intern)",
      company: "Kian Technology",
      location: "Surat, Gujarat",
      period: "May 2023 - July 2023",
      responsibilities: [
        "Gained hands-on experience in Laravel development",
        "Learned industry best practices and development methodologies",
        "Collaborated with senior developers on various projects",
        "Participated in code reviews and team meetings"
      ],
      technologies: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm mb-4">
            <Briefcase className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm text-gray-600">Professional Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in Laravel development and web technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex items-start animate-fade-in-up group"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content Card */}
                <div className="md:ml-16 w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white group-hover:rotate-12 transition-transform duration-300">
                        <Building size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {exp.company}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:text-right mt-4 lg:mt-0">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar size={16} className="mr-2 text-blue-500" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2 text-purple-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-800 mb-4">Key Responsibilities</h5>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start group/item">
                          <ChevronRight size={16} className="text-blue-500 mr-3 mt-1 flex-shrink-0 group-hover/item:translate-x-1 transition-transform duration-300" />
                          <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-gray-700 hover:scale-105 transition-transform duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;