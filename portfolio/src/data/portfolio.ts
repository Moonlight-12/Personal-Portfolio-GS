import React from 'react';
import { Camera, Music, Palette, Code } from 'lucide-react';
import { Experience, Project, Hobby } from '../types/portfolio';

export const experiences: Experience[] = [
  {
    title: "Founding Engineer",
    company: "Motionmate",
    period: "Jul 2024 - Present",
    description: "Founding Engineer at MotionMate, leading front-end development using Next.js, React, and PostgreSQL. Designed 10+ Figma prototypes and built responsive, SEO-optimized pages, increasing reach to 1.6K+ views and 900+ clicks. Collaborated with founders on product strategy and led technical onboarding of 5+ early clients.",
    tech: ["Next.js", "Typescript", "React", "PostgreSQL", "Figma"]
  },
  {
    title: "Product Owner & Full Stack Developer",
    company: "University of Melbourne",
    period: "Jul 2024 - Dec 2024",
    description: "Product Owner & Developer for a mental health platform at the University of Melbourne. Led a 6-person team using React, Next.js, Django, and PostgreSQL. Implemented OAuth, RBAC, and AES-encrypted storage to support HIPAA compliance. Built mobile-first UI with Tailwind CSS, ensured SEO-friendly SSR, and deployed on AWS. Managed documentation and handover via Confluence.",
    tech: ["Next.js", "Typescript", "React", "Python", "PostgreSQL", "AWS"]
  },
  {
    title: "Machine Learning Intern",
    company: "PT Sreeya Sewu Indonesia Tbk",
    period: "Dec 2023 - Aug 2024",
    description: "Machine Learning Intern at PT Sreeya Sewu Indonesia, building an Isolation Forest-based anomaly detection system for predictive maintenance. Processed 80K+ sensor data rows daily, reducing downtime by 30% with 90%+ detection accuracy. Delivered comprehensive documentation and trained successors for model handover and support.",
    tech: ["Python", "Pandas", "Scikit-learn", "Isolation Forest", "Anomaly Detection"]
  }
];

export const projects: Project[] = [
  {
    title: "MyJournal",
    description: "MyJournal is a journaling app built with Next.js and React, featuring OAuth authentication, carousel browsing, and favorites management. Designed to encourage daily journaling through a seamless, mobile-first experience.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    github: "https://github.com/Moonlight-12/MyJournals",
    link: "https://my-journals-frontend.vercel.app/",
    image: "/icon.svg",
    status: "personal",
  },
  {
    title: "Wedding Invitation Website",
    description: "Built a wedding invitation website using React, MongoDB, and Node.js. Features include RSVP management, photo gallery, and a countdown timer. Designed to provide a personalized experience for guests.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    link: "https://theo-and-sonata.onrender.com/",
    image: "/wedding-invitation.png",
    status: "freelance",
  },
  {
    title: "Pondok Gading Resto",
    description: "Built a website for a Restaurant using Next.js and Tailwind CSS. Features include a menu, reservation system, and location map. Designed to enhance customer engagement and streamline reservations.",
    tech: ["next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    link: "https://pondokgadingresto.vercel.app/",
    image: "/pgr.png",
    status: "freelance",
  },
];