/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  onViewResume: () => void;
}

export default function Hero({ onViewResume }: HeroProps) {
  const [nepalTime, setNepalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const nepalOffset = 5.75 * 3600000; // Nepal is UTC + 5:45
      const nepalDate = new Date(utc + nepalOffset);
      
      const timeStr = nepalDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setNepalTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-36 pb-24 px-6 sm:px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Dynamic Avatar & Hiring Bubble */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 px-4 py-2.5 rounded-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 mb-10 shadow-2xl"
        >
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <img 
                src={portfolioData.personal.avatar}
                alt={portfolioData.personal.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-cyan-500/30"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-zinc-950 rounded-full animate-pulse" />
            </div>
            
            <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
                BSc. CSIT Scholar
              </span>
            </div>
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-white/10" />

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold">
              Available for Collaborations
            </span>
          </div>
        </motion.div>

        {/* Playfair Typography with Gradient Accents */}
        <div className="relative mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-[7.5rem] font-serif italic font-black tracking-tighter leading-[0.9] text-white max-w-5xl"
          >
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500">Intelligence.</span>
          </motion.h1>
        </div>

        {/* Enhanced Subtitle with High-contrast colors */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl font-medium leading-relaxed mt-4"
        >
          Hello, I'm <span className="text-white font-bold underline decoration-cyan-500/40 decoration-2 underline-offset-4">{portfolioData.personal.name}</span>. 
          {portfolioData.personal.bio} I bridge elegant engineering with modern user experiences.
        </motion.p>

        {/* Action Widgets and Micro-Details */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 w-full flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a 
              href="#projects-grid"
              className="group flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-10 py-4 rounded-2xl font-black text-xs tracking-widest uppercase transition-all hover:brightness-110 active:scale-98 shadow-xl shadow-cyan-500/10 w-full sm:w-auto justify-center"
            >
              Explore Selected Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>
            
            <button 
              onClick={onViewResume}
              className="group flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white px-10 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all hover:border-white/20 active:scale-98 w-full sm:w-auto justify-center"
            >
              Curriculum Vitae
            </button>
          </div>
          
          {/* Metadata Grid (Nepal Time Zone Live Pulse Widget) */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-3.5 rounded-2xl bg-zinc-950/45 border border-white/5 text-zinc-400 text-[10px] font-bold uppercase tracking-widest shadow-inner">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{portfolioData.personal.location}</span>
            </div>
            
            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />
            
            <div className="flex items-center gap-2 font-mono">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-zinc-500">Nepal Time:</span>
              <span className="text-white font-semibold bg-white/5 px-2.5 py-0.5 rounded border border-white/5 tabular-nums min-w-[80px] text-center">
                {nepalTime || '00:00:00 AM'}
              </span>
            </div>

            <div className="w-1.5 h-1.5 bg-zinc-800 rounded-full" />

            <div className="font-mono text-zinc-400">
              {portfolioData.personal.vibe}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Soft Light Flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/5 blur-[160px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
}
