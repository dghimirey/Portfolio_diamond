import {
  Github,
  Linkedin,
  Mail,
  Cpu,
  Gamepad2,
  Trophy,
  Palette
} from 'lucide-react';

import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Diamond Ghimire",
    role: "Web Developer, Computer Operator & BSc. CSIT Student",
    location: "Rupandehi, Nepal",
    bio: "Student at Bhairahawa Multiple Campus, passionate about building meaningful digital experiences through software development and modern technologies.",
    
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    email: "contact@diamondghimire.com.np",
    vibe: "Chess Learner • Creative Developer • Art Enthusiast"
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/dghimirey",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/diamondghimire",
      icon: Linkedin
    },
    {
      name: "Email",
      url: "mailto:contact@diamondghimire.com.np",
      icon: Mail
    }
  ],

  projects: [
    {
      id: "edvance",
      title: "Digital School System (edVance)",
      description: "A smart school management system with student analytics, attendance tracking, academic alerts, parent engagement, and performance monitoring features.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      link: "https://digitalschoolsystem.vercel.app/",
      github: "https://github.com/dghimirey",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      id: "fitbeat",
      title: "FitBeat",
      description: "A fitness and productivity platform where users can track routines, maintain streaks, write journals, earn rewards, and view progress analytics.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      link: "https://fit-beat.vercel.app/",
      github: "https://github.com/dghimirey",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      id: "haraiya-secondary",
      title: "Haraiya Secondary School Website",
      description: "Official school website showcasing academic programs, faculty, facilities, notices, and the school's history of educational excellence since 2024 BS.",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://haraiyasecondary.vercel.app/",
      github: "https://github.com/dghimirey/haraiya-secondary",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
      featured: true
    }
  ],

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    tools: ["Git", "Vite", "VS Code", "Figma"]
  },

  education: [
    {
      degree: "BSc. Computer Science & Information Technology (CSIT)",
      institution: "Bhairahawa Multiple Campus",
      location: "Rupandehi, Nepal",
      period: "2023 - Present",
      details: "Focused on software engineering, database management, web development, and algorithm design."
    },
    {
      degree: "Higher Secondary Education (+2 Science)",
      institution: "Lumbini Gyan Niketan Secondary School",
      location: "Kanchan, Rupandehi",
      period: "2020 - 2022",
      details: "Studied Physics, Chemistry, Biology, and Mathematics."
    }
  ],

  experience: [
    {
      role: "Computer Operator",
      company: "Haraiya Secondary School",
      period: "2024 - Present",
      description: "Managing digital school records, maintaining administrative systems, and improving workflow efficiency through technology."
    }
  ],

  interests: [
    {
      name: "Chess",
      icon: Trophy,
      description: "Enjoy strategic thinking and problem-solving through chess."
    },
    {
      name: "Creative Coding",
      icon: Gamepad2,
      description: "Building visually engaging and interactive digital experiences."
    },
    {
      name: "Designing",
      icon: Palette,
      description: "Passionate about modern UI/UX and creative visual design."
    }
  ]
};
