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
      className="min-h-screen bg-white text-zinc-900 p-8 sm:p-12 md:p-20 font-sans"
    >
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Actions (Hidden on print) */}
        <div className="flex items-center justify-between mb-12 print:hidden">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-lg text-sm font-bold hover:bg-zinc-200 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print/PDF</span>
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="border-b-2 border-zinc-900 pb-10 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">{portfolioData.personal.name}</h1>
              <p className="text-xl font-medium text-zinc-500 uppercase tracking-widest">{portfolioData.personal.role}</p>
            </div>
            <div className="space-y-1 text-sm font-medium text-zinc-500">
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <Mail className="w-4 h-4" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <MapPin className="w-4 h-4" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end">
                <Globe className="w-4 h-4" />
                <span>portfolio.diamond.dev</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column: Summary & Skills */}
          <div className="md:col-span-1 space-y-10">
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-zinc-400">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                {portfolioData.personal.bio} Dedicated to optimizing system performance and crafting intuitive digital interfaces.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-zinc-400">Core Expertise</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[10px] font-black uppercase text-zinc-900 mb-2">Development</h3>
                  <div className="flex flex-wrap gap-1">
                    {portfolioData.skills.frontend.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-100 text-[10px] font-bold rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-zinc-900 mb-2">Hardware</h3>
                  <div className="flex flex-wrap gap-1">
                    {portfolioData.skills.hardware.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-100 text-[10px] font-bold rounded">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-zinc-900 mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-1">
                    {portfolioData.skills.tools.map(s => (
                      <span key={s} className="px-2 py-1 bg-zinc-100 text-[10px] font-bold rounded">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-zinc-400">Work Experience</h2>
              <div className="space-y-8">
                {portfolioData.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <span className="text-[10px] font-black bg-zinc-900 text-white px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-3">{exp.company}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 text-zinc-400">Education</h2>
              <div className="space-y-8">
                {portfolioData.education.map((edu, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <span className="text-[10px] font-black bg-zinc-100 px-2 py-0.5 rounded">{edu.period}</span>
                    </div>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">{edu.institution}</p>
                    <p className="text-sm text-zinc-600 leading-relaxed font-medium">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer info for print */}
        <footer className="mt-20 pt-10 border-t border-zinc-100 text-center hidden print:block">
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
            Generated from Diamond Ghimire's Digital Portfolio • 2026
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
