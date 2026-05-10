/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

interface ExperienceProps {
  onViewResume?: () => void;
}

export default function Experience({ onViewResume }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Sticky Header Column */}
        <div className="md:w-1/3 md:sticky md:top-32 h-fit">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">Professional Journey</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif italic font-black tracking-tighter mb-8 italic">
            Path & <span className="text-zinc-800">History.</span>
          </h2>
          <p className="text-zinc-500 text-sm max-w-xs font-medium leading-relaxed mb-8">
            My career at the intersection of administrative stability and creative engineering.
          </p>
          <button 
            onClick={onViewResume}
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors border-b border-white/10 pb-1"
          >
            Digital Curriculum Vitae
          </button>
        </div>

        {/* Timeline Column */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="md:w-2/3 space-y-20"
        >
          {/* Work Experience */}
          <div className="space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-700 mb-8">Professional Experience</h3>
            {portfolioData.experience.map((exp, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className="relative pl-8 border-l border-white/5 group"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-zinc-800 border-2 border-[#0A0A0A] rounded-full group-hover:bg-cyan-500 transition-colors" />
                
                <div className="bg-zinc-900/30 p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 uppercase tracking-widest">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                  </div>
                  
                  <p className="text-xs text-cyan-500 font-black uppercase tracking-widest mb-4 opacity-80">{exp.company}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-12">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-700 mb-8">Academic Foundation</h3>
            {portfolioData.education.map((edu, i) => (
              <motion.div 
                key={i} 
                variants={item}
                className="relative pl-8 border-l border-white/5 group"
              >
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-zinc-800 border-2 border-[#0A0A0A] rounded-full group-hover:bg-blue-500 transition-colors" />
                
                <div className="bg-zinc-900/30 p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 uppercase tracking-widest">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                  </div>
                  
                  <p className="text-xs text-blue-500 font-black uppercase tracking-widest mb-4 opacity-80">{edu.institution}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    {edu.details} (Located in {edu.location})
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
