import type React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const ProjectCard: React.FC<{
  project: any;
  index: number;
  isVisible: boolean;
}> = ({ project, index, isVisible }) => {
  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transform transition-all duration-700 hover:scale-105 hover:bg-gray-800/70 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 200}ms`,
        // Ensure minimum opacity for debugging
        minHeight: "300px",
      }}
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
        {/* <div className="text-6xl opacity-20 z-10 relative">💻</div> */}
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={250}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Project status (personal or freelance) */}
          <span
            className={`px-3 py-1 rounded-full text-xs text-gray-300 ${
              project.status === "personal"
                ? "bg-green-700/50"
                : "bg-yellow-700/50"
            }`}
          >
            {project.status === "personal"
              ? "Personal Project"
              : "Freelance Project"}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-blue-400">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Image
                src="/github-mark-white.svg"
                width={8}
                height={8}
                alt="GitHub"
                className="w-4 h-4"
              />
              <span className="text-sm">Code</span>
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Link</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
