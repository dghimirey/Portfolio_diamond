/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Resume from './components/Resume';

export default function App() {
  const [view, setView] = useState<'portfolio' | 'resume'>('portfolio');

  const toggleView = (newView: 'portfolio' | 'resume') => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence mode="wait">
      {view === 'portfolio' ? (
        <motion.div 
          key="portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-cyan-500/30 selection:text-white font-sans overflow-x-hidden"
        >
          {/* Dynamic Background */}
          <div className="fixed inset-0 pointer-events-none -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05)_0%,transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <Navbar onViewResume={() => toggleView('resume')} />
          
          <main>
            <Hero onViewResume={() => toggleView('resume')} />
            
            <section id="projects-grid" className="relative group">
              {/* Section Divider with Label */}
              <div className="max-w-7xl mx-auto px-10 mb-12 flex items-center gap-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-700 whitespace-nowrap font-bold">
                  Selected Works & Expertise
                </span>
                <div className="h-[1px] w-full bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>
              <BentoGrid onViewResume={() => toggleView('resume')} />
            </section>

            <section id="expertise-skills" className="relative">
              <Skills />
            </section>

            <Experience onViewResume={() => toggleView('resume')} />

            <section id="contact" className="py-20 relative">
              <div className="max-w-7xl mx-auto px-10 text-center">
                 <div className="inline-flex flex-col items-center gap-4">
                   <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight">Let's build the <span className="text-white/30">future</span> together.</h2>
                   <p className="text-white/40 max-w-xl text-lg font-light leading-relaxed mt-6">
                     I'm currently looking for new collaborations and exciting projects in school management systems and intelligent frontend design.
                   </p>
                   <motion.div className="flex flex-col sm:flex-row gap-4 mt-10">
                     <motion.a 
                       href="mailto:shisir450@gmail.com"
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="px-12 py-5 bg-white text-black rounded-full font-black text-sm tracking-widest uppercase shadow-2xl shadow-white/10"
                     >
                       Contact Me
                     </motion.a>
                     <motion.button 
                       onClick={() => toggleView('resume')}
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="px-12 py-5 glass rounded-full font-black text-sm tracking-widest uppercase"
                     >
                       View Resume
                     </motion.button>
                   </motion.div>
                 </div>
              </div>
            </section>
          </main>

          <Footer />
          
          {/* Global Grainy Overlay */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)"/>
            </svg>
          </div>
        </motion.div>
      ) : (
        <Resume key="resume" onBack={() => toggleView('portfolio')} />
      )}
    </AnimatePresence>
  );
}
