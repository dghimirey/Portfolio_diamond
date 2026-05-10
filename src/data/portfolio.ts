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
    vibe: "Chess Learner • Vibe Coder • Art Enthusiast"
  },
  
  socials: [
    { name: "GitHub", url: "https://github.com/dghimirey", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/diamondghimire", icon: Linkedin },
    { name: "Email", url: "mailto:diamondghimire4141@gmail.com", icon: Mail },
  ],

  projects: [
    {
      id: "edvance",
      title: "edVance",
      description: "An Intelligent School Management System featuring advanced analytics, automated grading, and student performance tracking.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      link: "https://digitalschoolsystem.vercel.app/",
      github: "https://github.com:dghimirey/",
      image: "https://images.unsplash.com/photo-1501503060800-5fa8f15b11bb?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      id: "FitBeat",
      title: "FitBeat",
      description: "A website to track daily routines and getting rewards.",
      tech: ["React", "Framer Motion", "Tailwind"],
      link: "https://fit-beat.vercel.app/",
      github: "https://github.com/dghimirey",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      featured: true
    },
    {
      id: "Physics",
      title: "Physics Simulator",
      description: "A website to simulate physics related things.",
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
      institution: "Lumbini Gyan Niketan Secondary School",
      location: "Kanchan, Rupandehi",
      period: "2020 - 2022",
      details: "Physics Chemistry Biology and Maths."
    }
  ],

  experience: [
    {
      role: "Computer Operator",
      company: "Haraiya Secondary School",
      period: "2022 - Present",
      description: "Managing school digital records, troubleshooting hardware, and optimizing administrative workflows."
    },
  ],

  interests: [
    { name: "Chess", icon: Trophy, description: "Strategy and critical thinking." },
    { name: "Vibe Coding", icon: Gamepad2, description: "Creating immersive digital atmospheres." },
    { name: "Drawing", icon: Cpu, description: "Passionate about realistic drawing." }
  ]
};
