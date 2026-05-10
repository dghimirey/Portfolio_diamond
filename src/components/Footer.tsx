/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-6 sm:px-10 border-t border-white/5 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
             <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg shadow-cyan-500/20 shrink-0">
              D
            </div>
            <h3 className="text-xl font-bold tracking-tight uppercase">Diamond Ghimire</h3>
          </div>
          <p className="text-zinc-500 text-[10px] max-w-sm leading-relaxed mb-8 uppercase tracking-widest font-bold">
            Frontend Engineer • Hardware Specialist • Nepal
          </p>
          <div className="flex items-center gap-8 justify-center md:justify-start text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            {portfolioData.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="hover:text-white transition-all underline underline-offset-4"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
          >
            <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
          </button>
          
          <div className="text-center md:text-right">
            <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-1">
              Nepal (GMT +5:45) • {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kathmandu', hour: '2-digit', minute: '2-digit' })} NPT
            </p>
            <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
              © 2026 Diamond Ghimire
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
