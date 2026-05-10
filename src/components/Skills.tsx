/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Code2, Cpu, Wrench } from 'lucide-react';
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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
           <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-zinc-500">Expertise Stack</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif italic font-black tracking-tighter">My Technical <span className="text-zinc-800">Arsenal.</span></h2>
        </div>
        <p className="text-zinc-500 text-sm max-w-xs font-medium leading-relaxed">
          Bridging the gap between creative frontend interfaces and robust backend logic.
        </p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Frontend Skills */}
        <motion.div variants={item} className="bg-zinc-900/50 rounded-[2rem] border border-white/10 p-10 group hover:border-cyan-500/30 transition-colors">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8">
            <Code2 className="w-6 h-6 text-cyan-500" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Frontend Architecture</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.frontend.map(skill => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-mono text-zinc-400 group-hover:text-white transition-colors uppercase tracking-wider font-bold">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div variants={item} className="bg-zinc-900/50 rounded-[2rem] border border-white/10 p-10 group hover:border-cyan-500/30 transition-colors">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8">
            <Cpu className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Backend Development</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.backend.map(skill => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-mono text-zinc-400 group-hover:text-white transition-colors uppercase tracking-wider font-bold">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools & Workflow */}
        <motion.div variants={item} className="bg-zinc-900/50 rounded-[2rem] border border-white/10 p-10 group hover:border-cyan-500/30 transition-colors">
          <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8">
            <Wrench className="w-6 h-6 text-zinc-400" />
          </div>
          <h3 className="text-2xl font-bold mb-6">Tools & Workflow</h3>
          <div className="flex flex-wrap gap-2">
            {portfolioData.skills.tools.map(skill => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs font-mono text-zinc-400 group-hover:text-white transition-colors uppercase tracking-wider font-bold">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Aesthetic Footer for Skills Section */}
      <div className="mt-12 flex items-center justify-between px-4">
        <div className="flex gap-4">
          <div className="w-2 h-2 bg-zinc-800 rounded-full" />
          <div className="w-2 h-2 bg-zinc-800 rounded-full" />
          <div className="w-2 h-2 bg-zinc-800 rounded-full" />
        </div>
        <span className="text-[10px] font-mono text-zinc-800 uppercase font-black">Performance First • Scalable Code • Reliable Systems</span>
      </div>
    </section>
  );
}
