"use client"
import type React from "react"
import { useState, useEffect } from "react"
import HeroSection from "../hero"
import ExperienceSection from "../experience"
import ProjectsSection from "../projects"
import HobbiesSection from "../hobbies"
import ContactSection from "../contact"
import Footer from "../footer"
import { experiences, projects } from "../../data/portfolio"

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  // Client-side only effect
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Mouse tracking for 3D effects
  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isClient])

  // Intersection Observer for animations - Modified to handle sections outside scrollable content
  useEffect(() => {
    if (!isClient) return

    // Different settings for mobile vs desktop
    const isMobile = window.innerWidth < 768

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id

          setIsVisible((prev) => ({
            ...prev,
            [sectionId]: entry.isIntersecting,
          }))

          // Update active section based on what's in view
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        })
      },
      {
        // Adjusted threshold and rootMargin for better mobile support
        threshold: isMobile ? 0.1 : 0.2,
        rootMargin: isMobile ? "-20px 0px -20px 0px" : "-100px 0px -100px 0px",
        // Use document viewport as root for all cases to handle sections outside scrollable content
        root: null,
      },
    )

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.observe(section))
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [isClient])

  // Scroll to section handler
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-900 ">
      
      {/* This div now controls the main content layout */}
      <div className="flex flex-col md:flex-row md:min-h-screen">
        {/* Left Section - Sticky on md and larger screens, not sticky on mobile */}
        <div className="w-full p-4 flex items-center justify-center md:w-2/5 md:sticky md:top-0 md:h-screen">
        <HeroSection
        isVisible={isVisible.home}
        mousePosition={isClient ? mousePosition : { x: 0, y: 0 }}
        activeSection={activeSection}
        setActiveSection={scrollToSection}
      />
        </div>

        {/* Right Section - Scrollable content */}
        <div className="w-full p-4 md:flex-1 md:overflow-y-auto scrollable-content overflow-hidden">
          {/* Experience Section */}
          <ExperienceSection experiences={experiences} isVisible={isVisible.experience} />

          {/* Projects Section */}
          <ProjectsSection projects={projects} isVisible={isVisible.projects} />

          {/* Hobbies Section
          <HobbiesSection hobbies={hobbies} /> */}
        </div>
      </div>

      {/* Contact Section - Outside the main layout */}
      <ContactSection isVisible={isVisible.contact} />

      {/* Footer - Outside the main layout */}
      <Footer />
    </div>
  )
}

export default Portfolio
