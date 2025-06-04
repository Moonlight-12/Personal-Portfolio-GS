"use client"
import type React from "react"
import { useRef, useState, useEffect } from "react"
import { MapPin, Mail } from "lucide-react"
import type { HeroSectionProps } from "../../types/portfolio"
import FloatingCube from "../floating-cube"
import Navigation from "../navigation"

// Extended props to include navigation props
interface ExtendedHeroSectionProps extends HeroSectionProps {
  activeSection: string
  setActiveSection: (sectionId: string) => void
}

const HeroSection: React.FC<ExtendedHeroSectionProps> = ({
  isVisible = true,
  mousePosition,
  activeSection,
  setActiveSection,
}) => {
  const heroRef = useRef<HTMLElement>(null)
  const [isClient, setIsClient] = useState(false)

  // Ensure this only runs on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Debug logging
  useEffect(() => {
    console.log("HeroSection - isVisible:", isVisible)
    console.log("HeroSection - isClient:", isClient)
    console.log("HeroSection - mousePosition:", mousePosition)
  }, [isVisible, isClient, mousePosition])

  // Personal information - customize these values
  const personalInfo = {
    name: "John Doe",
    initials: "JD",
    title: "Full Stack Developer & Creative Technologist",
    location: "San Francisco, CA",
    email: "john@example.com",
  }

  // Only use mousePosition after client-side hydration
  const safeMousePosition = isClient ? mousePosition : { x: 0, y: 0 }

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
      style={{
        // Only apply mouse-based transforms on the client
        transform:
          isClient && window?.innerWidth && window?.innerHeight
            ? `translate3d(${(safeMousePosition.x - window.innerWidth / 2) * 0.01}px, ${(safeMousePosition.y - window.innerHeight / 2) * 0.01}px, 0)`
            : "none",
      }}
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
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">{personalInfo.title}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} />
              <span>{personalInfo.email}</span>
            </div>
          </div>

          {/* FloatingCube moved here, below the personal info */}
          <div className="mt-16">
            <FloatingCube />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
