/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
    role: "Full-Stack Developer & BSc. CSIT Student",
    location: "Rupandehi, Nepal",
    bio: "Student at Bhairahawa Multiple Campus, passionate about building meaningful digital experiences through software development and modern technologies.",
    
    // Better professional profile image
    avatar: "/logo.jpg",

    email: "contact@diamondghimire.com.np",

    portfolioUrl: "https://portfolio.diamondghimire.com.np/",

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

      description:
        "A smart school management system with student analytics, attendance tracking, academic alerts, parent engagement, and performance monitoring features.",

      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase"
      ],

      link: "https://digitalschoolsystem.vercel.app/",

      github: "https://github.com/dghimirey",

      // School / analytics related image
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",

      featured: true,

      longDescription: "edVance is a holistic school administration system. It consolidates academic data, attendance logs, performance analytics, and administrative tools into a cohesive web portal to foster effective synergy between educators, students, and parents.",

      features: [
        "Real-time analytics for automated student performance profiling",
        "Digital daily attendance tracker with micro-alerts",
        "Parent-teacher communication hub for live collaboration",
        "Integrated class schedule manager and notice broadcast panel"
      ]
    },

    {
      id: "fitbeat",

      title: "FitBeat",

      description:
        "A fitness and productivity platform where users can track routines, maintain streaks, write journals, earn rewards, and view progress analytics.",

      tech: [
        "React",
        "Framer Motion",
        "Tailwind CSS"
      ],

      link: "https://fit-beat.vercel.app/",

      github: "https://github.com/dghimirey",

      // Fitness / productivity themed image
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",

      featured: true,

      longDescription: "FitBeat utilizes interactive habit loops and strategic reward gamification to help users sustain consistent physical fitness habits and daily mental clarity practices securely.",

      features: [
        "Custom routine builder with interactive progress meters",
        "Streak protection engine to visualize activity consistency",
        "Aesthetic light / dark ambient environments",
        "Markdown-ready journaling system with reward points tracking"
      ]
    },

    {
      id: "haraiya-school",

      title: "Haraiya Secondary School Website",

      description:
        "The official, modern web platform for Haraiya Secondary School, facilitating public notices, admissions updates, calendar of events, and academic resources representation.",

      tech: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Framer Motion"
      ],

      link: "https://haraiyasecondary.vercel.app/",

      github: "https://github.com/dghimirey",

      // School / building / desk themed image
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",

      featured: false,

      longDescription: "The official web portal for Haraiya Secondary School, developed as an open administrative hub. It enables direct delivery of student notices, admission guidelines, downloadable materials, and upcoming calendar schedules.",

      features: [
        "Integrated digital notice board with instant search filters",
        "Mobile-first admission guides and downloadable PDF resource library",
        "Comprehensive faculty directory with detailed contact channels",
        "Interactive event syllabus tracker and institutional timeline highlights"
      ]
    }
  ],

  skills: {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS"
    ],

    backend: [
      "Node.js",
      "Express.js",
      "Firebase"
    ],

    tools: [
      "Git",
      "Vite",
      "VS Code",
      "Figma"
    ]
  },

  education: [
    {
      degree:
        "BSc. Computer Science & Information Technology (CSIT)",

      institution: "Bhairahawa Multiple Campus",

      location: "Rupandehi, Nepal",

      period: "2023 - Present",

      details:
        "Focused on software engineering, database management, web development, and algorithm design."
    },

    {
      degree: "Higher Secondary Education (+2 Science)",

      institution:
        "Lumbini Gyan Niketan Secondary School",

      location: "Kanchan, Rupandehi",

      period: "2020 - 2022",

      details:
        "Studied Physics, Chemistry, Biology, and Mathematics."
    }
  ],

  experience: [
    {
      role: "Computer Operator",

      company: "Haraiya Secondary School",

      period: "2022 - Present",

      description:
        "Managing digital school records, maintaining administrative systems, and improving workflow efficiency through technology."
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