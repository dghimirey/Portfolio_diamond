/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Search, Code, Globe2, X, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { Project } from '../types';

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

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
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} ${rowSpan} bg-zinc-900/40 rounded-[2.5rem] border border-white/5 relative overflow-hidden group p-8 sm:p-10 flex flex-col justify-between shadow-2xl cursor-pointer hover:border-cyan-500/20 active:scale-[0.995] transition-all`}
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
                            onClick={(e) => e.stopPropagation()}
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
                            onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
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
                          onClick={(e) => e.stopPropagation()}
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

      {/* About Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
            >
              <div className="overflow-y-auto no-scrollbar flex-1">
                {/* Image Banner */}
                <div className="relative h-[200px] sm:h-[280px] w-full overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Close button inside image */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-zinc-950/80 backdrop-blur border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all active:scale-95 shadow-lg cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 z-25 flex items-center gap-1.5 bg-zinc-950/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-300">Project Profile</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-8 sm:p-10 space-y-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-3 flex-1">
                      <h2 className="text-3xl sm:text-4xl font-serif italic font-black tracking-tight text-white leading-tight">
                        {selectedProject.title}
                      </h2>
                      
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {selectedProject.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-xl text-[9px] font-mono text-zinc-300 uppercase font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Actions */}
                    <div className="flex flex-wrap items-center gap-3 shrink-0 pt-2 md:pt-0">
                      {selectedProject.link !== '#' && (
                        <a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl group/modal-btn"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Launch System
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/modal-btn:opacity-100 group-hover/modal-btn:translate-x-0 transition-all font-bold" />
                        </a>
                      )}
                      {selectedProject.github && selectedProject.github !== '#' && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3.5 bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-widest rounded-2xl hover:bg-zinc-800 transition-colors border border-white/10"
                        >
                          <Github className="w-4 h-4 text-zinc-400" />
                          Codebase
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-white/5" />

                  {/* Descriptions layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10">
                    <div className="md:col-span-7 space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400">About the Project</h3>
                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-semibold md:font-medium">
                        {selectedProject.longDescription || selectedProject.description}
                      </p>
                    </div>

                    <div className="md:col-span-5 space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-widest text-blue-400">Key Features</h3>
                      {selectedProject.features && selectedProject.features.length > 0 ? (
                        <ul className="space-y-4">
                          {selectedProject.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span className="text-zinc-400 text-xs sm:text-sm font-semibold leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                          <p className="text-xs text-zinc-500 italic">Full architecture summaries and database models are updated on GitHub periodically.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


