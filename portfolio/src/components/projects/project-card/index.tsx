import type React from "react"
import { Github, ExternalLink } from "lucide-react"

const ProjectCard: React.FC<{
  project: any
  index: number
  isVisible: boolean
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
      <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
        <div className="text-6xl opacity-20">💻</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string, techIndex: number) => (
            <span key={techIndex} className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
