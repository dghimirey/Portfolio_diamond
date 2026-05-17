/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  onViewResume: () => void;
}

export default function Navbar({ onViewResume }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      <div className="bg-zinc-950/80 backdrop-blur-xl px-4 py-3 sm:px-8 rounded-2xl flex items-center justify-between border border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/20 shrink-0">
            D
          </div>
          <div className="leading-none hidden sm:block">
            <h1 className="text-sm font-bold tracking-tight uppercase">{portfolioData.personal.name}</h1>
            <p className="text-[10px] text-zinc-500 font-medium">{portfolioData.personal.role.split(' & ')[0]} • Nepal</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-8">
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
            {['Projects', 'Skills', 'Experience'].map((item) => (
              <a 
                key={item}
                href={`#${item === 'Skills' ? 'expertise-skills' : item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
            <a 
              href="mailto:diamondghimire4141@gmail.com"
              className="text-[10px] sm:text-xs bg-zinc-800 text-white px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-700 transition-all"
            >
              Contact
            </a>
            <button 
              onClick={onViewResume}
              className="text-[10px] sm:text-xs bg-cyan-500 text-black px-5 py-2.5 rounded-xl font-black uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/10"
            >
              Resume
            </button>
        </div>
      </div>
    </motion.nav>
  );
}
