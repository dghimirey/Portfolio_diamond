/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

interface NavbarProps {
  onViewResume: () => void;
}

export default function Navbar({ onViewResume }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = ['Projects', 'Skills', 'Experience'];

  const getHash = (item: string) => {
    return item === 'Skills' ? '#expertise-skills' : `#${item.toLowerCase()}`;
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
      >
        <div className="bg-zinc-950/80 backdrop-blur-xl px-4 py-3 sm:px-8 rounded-2xl flex items-center justify-between border border-white/5">
          <div className="flex items-center gap-4">
            {/* D Logo - Now clickable on mobile */}
            <button 
              onClick={toggleMenu}
              className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/20 shrink-0 hover:scale-105 transition-transform md:cursor-default"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              D
            </button>
            <div className="leading-none hidden sm:block">
              <h1 className="text-sm font-bold tracking-tight uppercase">{portfolioData.personal.name}</h1>
              <p className="text-[10px] text-zinc-500 font-medium">{portfolioData.personal.role.split(' & ')[0]} • Nepal</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-zinc-400">
              {navItems.map((item) => (
                <a 
                  key={item}
                  href={getHash(item)}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* Desktop Buttons */}
            <div className="hidden sm:flex items-center gap-3">
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

            {/* Mobile Action Buttons (Contact & Resume only) */}
            <div className="flex sm:hidden items-center gap-2">
              <a 
                href="mailto:diamondghimire4141@gmail.com"
                className="text-[10px] bg-zinc-800 text-white px-3 py-2 rounded-xl font-bold uppercase tracking-widest"
              >
                Contact
              </a>
              <button 
                onClick={onViewResume}
                className="text-[10px] bg-cyan-500 text-black px-3 py-2 rounded-xl font-black uppercase tracking-widest"
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-24 left-6 right-6 bg-zinc-900/95 backdrop-blur-xl rounded-2xl border border-white/10 z-40 md:hidden overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={getHash(item)}
                        onClick={closeMenu}
                        className="block py-3 px-4 text-base font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {item}
                      </a>
                    </motion.div>
                  ))}
                </div>
                
                {/* Divider */}
                <div className="h-px bg-white/10 my-2" />
                
                {/* Mobile Info Section */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="pt-2 px-4"
                >
                  <p className="text-sm font-semibold text-white">{portfolioData.personal.name}</p>
                  <p className="text-xs text-zinc-400 mt-1">{portfolioData.personal.role.split(' & ')[0]} • Nepal</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
