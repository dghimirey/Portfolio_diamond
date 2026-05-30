/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MapPin, Globe, ArrowLeft, Download, Printer } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ResumeProps {
  onBack: () => void;
}

export default function Resume({ onBack }: ResumeProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-zinc-950 text-zinc-300 p-8 sm:p-12 md:p-20 font-sans print:bg-white print:text-zinc-900 print:p-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Actions (Hidden on print) */}
        <div className="flex items-center justify-between mb-12 print:hidden">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white hover:bg-cyan-400 text-black px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="border-b-2 border-zinc-800 pb-10 mb-10 print:border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-5xl font-black tracking-tighter uppercase mb-2 text-white print:text-zinc-900">{portfolioData.personal.name}</h1>
              <p className="text-lg font-bold text-cyan-400 uppercase tracking-widest print:text-zinc-500 font-mono">{portfolioData.personal.role}</p>
            </div>
            <div className="space-y-1.5 text-xs font-bold font-mono text-zinc-400 print:text-zinc-500">
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <Mail className="w-4 h-4 text-cyan-400 print:text-zinc-500" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <MapPin className="w-4 h-4 text-blue-400 print:text-zinc-500" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end font-medium">
                <Globe className="w-4 h-4 text-indigo-400 print:text-zinc-500" />
                <a 
                  href={portfolioData.personal.portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-white transition-colors"
                >
                  {portfolioData.personal.portfolioUrl?.replace(/https?:\/\/(www\.)?/, '').replace(/\/$/, '') || 'portfolio.diamondghimire.com.np'}
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Summary & Skills */}
          <div className="md:col-span-1 space-y-10">
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-zinc-500 print:text-zinc-400">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-zinc-400 print:text-zinc-600 font-semibold md:font-medium">
                {portfolioData.personal.bio} Dedicated to optimizing system performance and crafting intuitive digital interfaces.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-zinc-500 print:text-zinc-400 font-bold">Core Expertise</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[10px] font-black uppercase text-white mb-2.5 print:text-zinc-900 tracking-wider">Development</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData.skills.frontend.map(s => (
                      <span key={s} className="px-2.5 py-1.5 bg-zinc-900 text-zinc-300 text-[9px] font-bold font-mono rounded-lg border border-white/5 print:bg-zinc-100 print:text-zinc-900 print:border-0">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-white mb-2.5 print:text-zinc-900 tracking-wider">Backend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData.skills.backend.map(s => (
                      <span key={s} className="px-2.5 py-1.5 bg-zinc-900 text-zinc-300 text-[9px] font-bold font-mono rounded-lg border border-white/5 print:bg-zinc-100 print:text-zinc-900 print:border-0">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-white mb-2.5 print:text-zinc-900 tracking-wider">Tools</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {portfolioData.skills.tools.map(s => (
                      <span key={s} className="px-2.5 py-1.5 bg-zinc-900 text-zinc-300 text-[9px] font-bold font-mono rounded-lg border border-white/5 print:bg-zinc-100 print:text-zinc-900 print:border-0">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-zinc-500 print:text-zinc-400">Work Experience</h2>
              <div className="space-y-8">
                {portfolioData.experience.map((exp, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 print:bg-transparent print:border-0 print:p-0">
                    <div className="flex justify-between items-start mb-2.5">
                      <h3 className="font-bold text-lg text-white print:text-zinc-900 truncate">{exp.role}</h3>
                      <span className="text-[9px] font-bold font-mono bg-zinc-800 text-cyan-400 px-2.5 py-1 rounded-lg border border-white/5 print:bg-zinc-100 print:text-zinc-900 print:border-0">{exp.period}</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">{exp.company}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-semibold print:text-zinc-600 md:font-medium">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-zinc-500 print:text-zinc-400">Education</h2>
              <div className="space-y-8">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 print:bg-transparent print:border-0 print:p-0">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-white print:text-zinc-900 truncate">{edu.degree}</h3>
                      <span className="text-[9px] font-bold font-mono bg-zinc-800/60 font-black text-zinc-300 px-2.5 py-1 rounded-lg print:bg-zinc-100 print:text-zinc-900">{edu.period}</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{edu.institution}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-semibold print:text-zinc-600 md:font-medium">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer info for print */}
        <footer className="mt-20 pt-10 border-t border-zinc-900 text-center hidden print:block">
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
            Generated from Diamond Ghimire's Digital Portfolio • 2026
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
