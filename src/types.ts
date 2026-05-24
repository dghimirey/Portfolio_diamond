import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image: string;
  featured: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillSet {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Interest {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    location: string;
    bio: string;
    avatar: string;
    email: string;
    vibe: string;
  };
  socials: Social[];
  projects: Project[];
  skills: SkillSet;
  education: Education[];
  experience: WorkExperience[];
  interests: Interest[];
}
