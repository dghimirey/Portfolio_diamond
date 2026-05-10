/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Gamepad2, 
  BookOpen,
  MapPin,
  Trophy,
  Briefcase
} from 'lucide-react';
import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Diamond Ghimire",
    role: "Full-Stack Developer & BSc. CSIT Student",
    location: "Rupandehi, Nepal",
    bio: "Student at Bhairahawa Multiple Campus. Combining software intelligence with hardware expertise to build meaningful digital experiences.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&h=256&auto=format&fit=crop", // Placeholder avatar
    email: "shisir450@gmail.com",
    vibe: "Chess Player • Vibe Coder • Hardware Enthusiast"
  },
  
  socials: [
    { name: "GitHub", url: "https://github.com/diamondghimire", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/diamondghimire", icon: Linkedin },
    { name: "Email", url: "mailto:shisir450@gmail.com", icon: Mail },
  ],

  projects: [
    {
      id: "edvance",
      title: "edVance",
      description: "An Intelligent School Management System featuring advanced analytics, automated grading, and student performance tracking.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1501503060800-5fa8f15b11bb?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      id: "ui-experiments",
      title: "Frontend UI Labs",
      description: "A collection of experimental UI components focusing on Neo-brutalism and Glassmorphism aesthetics.",
      tech: ["React", "Framer Motion", "Tailwind"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      id: "hardware-troubleshooter",
      title: "Hardware Diagnostics Kit",
      description: "A digital companion for hardware troubleshooting and system performance monitoring.",
      tech: ["Vanilla JS", "Shell Scripting", "Hardware APIs"],
      link: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=1200&auto=format&fit=crop",
      featured: false
    }
  ],

  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vanilla JS"],
    hardware: ["PC Troubleshooting", "Network Setup", "Component Repair", "BIOS Config"],
    tools: ["Git", "Vite", "Firebase", "Postman", "Linux", "Docker", "VS Code"]
  },

  education: [
    {
      degree: "BSc. Computer Science & Information Technology (CSIT)",
      institution: "Bhairahawa Multiple Campus",
      location: "Rupandehi, Nepal",
      period: "2023 - Present",
      details: "Focusing on Software Engineering, Database Management, and Algorithm Design."
    },
    {
      degree: "Higher Secondary Education (+2 Science)",
      institution: "Haraiya Secondary School",
      location: "Kanchan, Rupandehi",
      period: "2021 - 2023",
      details: "Specialized in Computer Science and Physics."
    }
  ],

  experience: [
    {
      role: "Computer Operator",
      company: "Haraiya Secondary School",
      period: "Present",
      description: "Managing school digital records, troubleshooting hardware, and optimizing administrative workflows."
    },
    {
      role: "BSc. CSIT Student",
      company: "Bhairahawa Multiple Campus",
      period: "2023 - Present",
      description: "Focusing on Computer Science and Information Technology fundamentals."
    }
  ],

  interests: [
    { name: "Chess", icon: Trophy, description: "Strategy and critical thinking." },
    { name: "Vibe Coding", icon: Gamepad2, description: "Creating immersive digital atmospheres." },
    { name: "Hardware", icon: Cpu, description: "Understanding the machine at its core." }
  ]
};
