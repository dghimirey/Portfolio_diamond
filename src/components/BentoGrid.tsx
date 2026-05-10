/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Search } from 'lucide-react';
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
    <section id="projects" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar max-w-full">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeFilter === tech 
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20' 
                  : 'bg-zinc-900 text-zinc-500 border border-white/5 hover:border-white/10 hover:text-white'
              }`}
            >
              {tech}
            </button>
          ))}
          
          <div className="w-[1px] h-6 bg-white/10 mx-2 shrink-0" />
          
          <button
            onClick={() => setShowLiveOnly(!showLiveOnly)}
            className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
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
        className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]"
      >
        <AnimatePresence mode="popLayout">
          {projectsToShow.map((project, index) => {
            const isFeatured = index === 0 && activeFilter === 'All';
            const hasLink = project.link !== '#';
            const hasGithub = project.github && project.github !== '#';
            const colSpan = isFeatured ? "md:col-span-8" : "md:col-span-4";
            const rowSpan = isFeatured ? "md:row-span-2" : "md:row-span-1";

            return (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                variants={item}
                className={`${colSpan} ${rowSpan} bg-zinc-900/50 rounded-[2rem] border border-white/10 relative overflow-hidden group p-8 flex flex-col justify-between`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-500 pointer-events-none ${isFeatured ? 'from-cyan-500/10 to-transparent group-hover:from-cyan-500/20' : 'from-blue-500/5 to-transparent group-hover:from-blue-500/15'}`} />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      {isFeatured && (
                        <div className="inline-flex px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[10px] font-bold tracking-widest uppercase rounded-full border border-cyan-500/20 mb-4">
                          Featured Work
                        </div>
                      )}
                      <h3 className={`${isFeatured ? 'text-4xl sm:text-5xl' : 'text-2xl'} font-bold tracking-tight mb-2 group-hover:text-cyan-400 transition-colors`}>
                        {project.title}
                      </h3>
                      <p className={`text-zinc-400 ${isFeatured ? 'text-lg max-w-md' : 'text-sm line-clamp-2'} leading-relaxed`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[8px] font-mono text-zinc-500 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3 mt-6">
                    {hasLink && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-cyan-500 transition-colors shadow-lg shadow-white/5 group/btn"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    )}
                    {hasGithub && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-zinc-700 transition-colors border border-white/5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

