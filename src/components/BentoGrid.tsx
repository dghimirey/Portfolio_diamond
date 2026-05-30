/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Search, Code, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface BentoGridProps {
  onViewResume?: () => void;
}

export default function BentoGrid({ onViewResume }: BentoGridProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showLiveOnly, setShowLiveOnly] = useState(false);

  // Extract unique technologies from all projects
  const allTechs = ['All', ...new Set(portfolioData.projects.flatMap(p => p.tech))];

  const filteredProjects = portfolioData.projects.filter(p => {
    const matchesTech = activeFilter === 'All' || p.tech.includes(activeFilter);
    const matchesLive = showLiveOnly ? p.link !== '#' : true;
    return matchesTech && matchesLive;
  });

  const projectsToShow = filteredProjects;

  return (
    <section id="projects" className="py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      
      {/* Filter Bar with Enhanced Tag Styling */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 md:pb-0 no-scrollbar max-w-full w-full md:w-auto">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap active:scale-95 ${
                activeFilter === tech 
                  ? 'bg-cyan-500 text-black shadow-lg' 
                  : 'bg-zinc-900 text-zinc-500 border border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
          
          <div className="w-[1px] h-6 bg-white/10 mx-2 shrink-0" />
          
          <button
            onClick={() => setShowLiveOnly(!showLiveOnly)}
            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border active:scale-95 ${
              showLiveOnly 
                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                : 'bg-zinc-900 text-zinc-500 border-white/5 hover:text-white'
            }`}
          >
            {showLiveOnly ? '● Live Only' : '○ Show All'}
          </button>
        </div>
        <div className="flex items-center gap-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest bg-zinc-900/50 px-4 py-2.5 rounded-xl border border-white/5">
          <Search className="w-3 h-3" />
          <span>{filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[320px] md:auto-rows-[250px]"
      >
        <AnimatePresence mode="popLayout">
          {projectsToShow.map((project, index) => {
            const isFeatured = index === 0 && activeFilter === 'All';
            const hasLink = project.link !== '#';
            const hasGithub = project.github && project.github !== '#';
            
            // Adjust spans for grid density
            const colSpan = isFeatured ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-4";
            const rowSpan = isFeatured ? "md:row-span-2" : "md:row-span-1";

            return (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                variants={item}
                className={`${colSpan} ${rowSpan} bg-zinc-900/40 rounded-[2.5rem] border border-white/5 relative overflow-hidden group p-8 sm:p-10 flex flex-col justify-between shadow-2xl`}
              >
                {/* 1. FEATURED LAYOUT STYLE (Split Grid) */}
                {isFeatured ? (
                  <div className="absolute inset-0 flex flex-col md:flex-row h-full">
                    {/* Color Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/0 to-transparent pointer-events-none z-10" />

                    {/* Left Column: Metadata & Links */}
                    <div className="w-full md:w-[55%] p-8 flex flex-col justify-between h-full z-20 relative">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[9px] font-black tracking-widest uppercase rounded-full border border-cyan-500/20 mb-6 font-mono shadow-inner">
                          <Globe2 className="w-3.5 h-3.5 animate-spin-slow" />
                          Featured Initiative
                        </div>
                        
                        <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-semibold">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {project.tech.map(t => (
                            <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-xl text-[8px] sm:text-[9px] font-mono text-zinc-400 uppercase font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-3 mt-8">
                        {hasLink && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-cyan-400 text-black text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl group/btn"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live System
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                          </a>
                        )}
                        {hasGithub && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-2xl hover:bg-zinc-800 transition-colors border border-white/10"
                          >
                            <Github className="w-4 h-4 text-zinc-400" />
                            Repository
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Immersive Unsplash Mockup Panel */}
                    <div className="hidden md:block md:w-[45%] h-full relative p-6 z-20">
                      <div className="w-full h-full rounded-[1.8rem] overflow-hidden border border-white/10 bg-zinc-900 relative shadow-2xl group-hover:border-cyan-500/30 transition-colors duration-500">
                        {/* Gradient tint layer */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10" />
                        
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transform scale-102 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Interactive UI Badge */}
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 bg-zinc-950/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-400">Stable Host Direct</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  
                  /* 2. STANDARD CARD STYLE (Hover Overlay Image) */
                  <>
                    {/* Background Unsplash image with rich gradients */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2.5rem] z-0">
                      {/* Gradient overlay to ensure text is perfectly legible with high contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/45 group-hover:to-zinc-900/40 transition-colors duration-500 z-10" />
                      
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-15 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Top Content Block */}
                    <div className="relative z-10 flex-1">
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                          <Code className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        
                        <div className="flex flex-wrap gap-1.5 justify-end">
                          {project.tech.slice(0, 2).map(t => (
                            <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[7.5px] font-mono text-zinc-400 uppercase font-bold">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-xs leading-relaxed font-semibold line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Action Block */}
                    <div className="relative z-10 flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                      {hasLink && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-cyan-400 text-black text-[9px] font-black uppercase tracking-widest rounded-xl transition-all shadow group/btn"
                        >
                          Live
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      
                      {hasGithub && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-zinc-950 hover:bg-zinc-900 text-white text-[9px] font-bold uppercase tracking-widest rounded-xl transition-colors border border-white/10"
                        >
                          <Github className="w-3 h-3 text-zinc-400" />
                          Source
                        </a>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

