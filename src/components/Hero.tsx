/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  onViewResume: () => void;
}

export default function Hero({ onViewResume }: HeroProps) {
  return (
    <section className="relative pt-40 pb-20 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
            Available for new opportunities
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-8xl lg:text-[10rem] font-serif italic font-black tracking-tighter leading-[0.8] text-white max-w-5xl"
        >
          Building Digital <span className="text-zinc-800">Intelligence.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-lg sm:text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed"
        >
          Hello, I'm <span className="text-white font-bold">{portfolioData.personal.name}</span>. 
          {portfolioData.personal.bio}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#projects"
              className="group flex items-center gap-3 bg-cyan-500 text-black px-8 py-4 rounded-2xl font-black text-xs tracking-widest uppercase transition-all hover:bg-cyan-400 shadow-xl shadow-cyan-500/10 w-full sm:w-auto justify-center"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            
            <button 
              onClick={onViewResume}
              className="group flex items-center gap-3 bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all hover:bg-zinc-800 w-full sm:w-auto justify-center"
            >
              View Resume
            </button>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="w-1 h-1 bg-zinc-800 rounded-full" />
            <span className="font-mono">{portfolioData.personal.vibe}</span>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric backgrounds */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500 opacity-[0.03] blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 opacity-[0.02] blur-[100px] rounded-full -z-10" />
    </section>
  );
}
