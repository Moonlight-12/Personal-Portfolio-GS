"use client"
import type React from "react"
import { useRef, useState, useEffect } from "react"
import { MapPin, Mail } from "lucide-react"
import type { HeroSectionProps } from "../../types/portfolio"
import FloatingCube from "../floating-cube"
import Navigation from "../navigation"
import Image from "next/image"

// Extended props to include navigation props
interface ExtendedHeroSectionProps extends HeroSectionProps {
  activeSection: string
  setActiveSection: (sectionId: string) => void
}

const HeroSection: React.FC<ExtendedHeroSectionProps> = ({
  isVisible = true,
  activeSection,
  setActiveSection,
}) => {
  const heroRef = useRef<HTMLElement>(null)
  const [isClient, setIsClient] = useState(false)

  // Ensure this only runs on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Personal information - customize these values
  const personalInfo = {
    name: "Geraldo Sadikin",
    initials: "GS",
    title: "Full Stack Developer",
    location: "Melbourne, VIC",
    email: "sadikingeraldo@gmail.com",
    github: "https://github.com/Moonlight-12",
    linkedin: "https://www.linkedin.com/in/geraldo-sadikin/",
  }


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    setActiveSection(sectionId)
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className={`min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-900 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-1000`}
      
      data-animate
    >
      {/* Navigation at the top */}
      <div className="w-full z-20 pt-4">
        <Navigation activeSection={activeSection} setActiveSection={scrollToSection} />
      </div>

      {/* Main hero content - centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center z-10 px-4">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
              {personalInfo.initials}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-md md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{personalInfo.title}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* FloatingCube */}
          <div className="">
            <FloatingCube />
          </div>

          {/* Social Media Links - Below the floating cube */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-gray-400 hover:text-white border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-gray-400 hover:text-white border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="GitHub"
            >
              <Image src={"/github-mark-white.svg"} width={24} height={24} alt="GitHub" className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-gray-400 hover:text-white border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
              aria-label="LinkedIn"
            >
              <Image src={"/social_10092249.png"} width={24} height={24} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection