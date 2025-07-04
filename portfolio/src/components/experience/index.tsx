import { Calendar } from "lucide-react";
import { ExperienceSectionProps } from "../../types/portfolio";

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  isVisible,
}) => {
  return (
    <section id="experience" className="py-12 px-4 md:px-8" data-animate>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-8 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Work Experience
        </h2>
        <div className="space-y-8 md:space-y-4 group">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 transform duration-500 hover:scale-105 hover:bg-gray-800/70 transition-all group-hover:opacity-50 hover:!opacity-100 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                </div>
                <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tech: string, techIndex: number) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
