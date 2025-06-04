"use client"
import React from 'react';
import { Calendar } from 'lucide-react';
import { ExperienceSectionProps } from '../../types/portfolio';

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences, isVisible }) => {
  return (
    <section 
      id="experience" 
      className="py-20 px-6"
      data-animate
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 transform transition-all duration-1000 hover:scale-105 hover:bg-gray-800/70 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;