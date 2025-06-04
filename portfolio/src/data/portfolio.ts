// data/portfolio.ts
import React from 'react';
import { Camera, Music, Palette, Code } from 'lucide-react';
import { Experience, Project, Hobby } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Led development of responsive web applications using React, TypeScript, and modern frameworks. Collaborated with cross-functional teams to deliver high-quality user experiences."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Developed end-to-end web applications with Node.js and React. Implemented RESTful APIs and managed database operations with MongoDB and PostgreSQL."
  },
  {
    title: "Junior Developer",
    company: "StartUp Studios",
    period: "2019 - 2020",
    description: "Built responsive websites and mobile applications. Gained experience in modern web technologies and agile development methodologies."
  }
];

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://your-ecommerce-demo.vercel.app",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and analytics.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-task-manager.netlify.app",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Weather Analytics Dashboard",
    description: "Interactive weather dashboard with data visualization, forecasting, and location-based weather tracking.",
    tech: ["Vue.js", "D3.js", "Express", "Weather API"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://your-weather-app.vercel.app",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Social Media Analytics",
    description: "Comprehensive social media analytics platform with real-time monitoring, sentiment analysis, and reporting.",
    tech: ["React", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/yourusername/social-analytics",
    demo: "https://your-social-analytics.vercel.app",
    image: "/api/placeholder/400/250"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation tool with multiple templates, SEO optimization, and export capabilities.",
    tech: ["Next.js", "OpenAI API", "Tailwind", "Supabase"],
    github: "https://github.com/yourusername/ai-content-generator",
    demo: "https://your-ai-content.vercel.app",
    image: "/api/placeholder/400/250"
  },
  {
    title: "Fitness Tracking App",
    description: "Personal fitness tracking application with workout planning, progress tracking, and social features.",
    tech: ["React Native", "Firebase", "Redux", "Chart.js"],
    github: "https://github.com/yourusername/fitness-tracker",
    demo: "https://your-fitness-app.netlify.app",
    image: "/api/placeholder/400/250"
  }
];

// Note: Icons need to be imported as React components in the actual implementation
export const hobbiesData = [
  {
    name: "Photography",
    iconName: "Camera",
    description: "Capturing moments and exploring creative composition through digital and film photography."
  },
  {
    name: "Music Production",
    iconName: "Music",
    description: "Creating electronic music and experimenting with sound design using various DAWs."
  },
  {
    name: "Digital Art",
    iconName: "Palette",
    description: "Designing illustrations and experimenting with digital painting techniques."
  },
  {
    name: "Open Source",
    iconName: "Code",
    description: "Contributing to open source projects and sharing code with the developer community."
  }
];

// Helper function to get hobbies with icons (use this in your main component)
export const getHobbiesWithIcons = (): Hobby[] => [
  {
    name: "Photography",
    icon: React.createElement(Camera, { className: "w-6 h-6" }),
    description: "Capturing moments and exploring creative composition through digital and film photography."
  },
  {
    name: "Music Production",
    icon: React.createElement(Music, { className: "w-6 h-6" }),
    description: "Creating electronic music and experimenting with sound design using various DAWs."
  },
  {
    name: "Digital Art",
    icon: React.createElement(Palette, { className: "w-6 h-6" }),
    description: "Designing illustrations and experimenting with digital painting techniques."
  },
  {
    name: "Open Source",
    icon: React.createElement(Code, { className: "w-6 h-6" }),
    description: "Contributing to open source projects and sharing code with the developer community."
  }
];