import { ReactNode } from 'react';

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
}

export interface Hobby {
  name: string;
  icon: ReactNode;
  description: string;
}

export interface FloatingShapeProps {
  delay: number;
  size: string;
  position: string;
}

export interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export interface HeroSectionProps {
  isVisible?: boolean;
  mousePosition: { x: number; y: number };
}

export interface ExperienceSectionProps {
  experiences: Experience[];
  isVisible: boolean;
}

export interface ProjectsSectionProps {
  projects: Project[];
  isVisible: boolean;
}

export interface HobbiesSectionProps {
  hobbies: Hobby[];
}

export interface ContactSectionProps {
  isVisible: boolean;
}