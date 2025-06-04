import type React from "react"
import ProjectCard from "./project-card"
import type { ProjectsSectionProps } from "../../types/portfolio"

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, isVisible }) => {
  return (
    <section id="projects" className="py-20 px-6" data-animate>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
