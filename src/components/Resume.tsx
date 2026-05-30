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
      className="min-h-screen bg-zinc-950 text-zinc-300 p-8 sm:p-12 md:p-20 font-sans print:bg-white print:text-zinc-900 print:p-0 print:m-0"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @page {
          size: A4 portrait;
          margin: 10mm 12mm 10mm 12mm;
        }
        @media print {
          body {
            background-color: #ffffff !important;
            color: #18181b !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          html, body {
            height: 100%;
            overflow: hidden;
            font-size: 11px;
          }
          .print-no-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}} />

      <div className="max-w-4xl mx-auto print:max-w-none print:w-full">
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
        <header className="border-b-2 border-zinc-800 pb-10 mb-10 print:border-b print:border-zinc-200 print:pb-4 print:mb-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 print:flex-row print:justify-between print:items-end print:gap-4">
            <div>
              <h1 className="text-5xl font-black tracking-tighter uppercase mb-2 text-white print:text-zinc-900 print:text-3xl print:mb-1">{portfolioData.personal.name}</h1>
              <p className="text-lg font-bold text-cyan-400 uppercase tracking-widest print:text-zinc-500 print:text-[11px] font-mono">{portfolioData.personal.role}</p>
            </div>
            <div className="space-y-1.5 text-xs font-bold font-mono text-zinc-400 print:text-zinc-500 print:text-[10px] print:space-y-0.5 print:text-right">
              <div className="flex items-center gap-2 justify-start md:justify-end print:justify-end">
                <Mail className="w-4 h-4 text-cyan-400 print:text-zinc-400 print:w-3.5 print:h-3.5" />
                <span>{portfolioData.personal.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end print:justify-end">
                <MapPin className="w-4 h-4 text-blue-400 print:text-zinc-400 print:w-3.5 print:h-3.5" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 justify-start md:justify-end print:justify-end font-medium">
                <Globe className="w-4 h-4 text-indigo-400 print:text-zinc-400 print:w-3.5 print:h-3.5" />
                <a 
                  href={portfolioData.personal.portfolioUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-white print:text-zinc-500 transition-colors"
                >
                  {portfolioData.personal.portfolioUrl?.replace(/https?:\/\/(www\.)?/, '').replace(/\/$/, '') || 'portfolio.diamondghimire.com.np'}
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 print:grid-cols-3 print:gap-8">
          {/* Left Column: Summary & Skills */}
          <div className="md:col-span-1 space-y-10 print:space-y-5">
            <section className="print-no-break">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 print:mb-2 text-zinc-500 print:text-zinc-400 print:text-[10px]">Professional Summary</h2>
              <p className="text-sm leading-relaxed text-zinc-400 print:text-zinc-600 font-semibold md:font-medium print:text-[10.5px] print:leading-relaxed">
                {portfolioData.personal.bio} Dedicated to optimizing system performance and crafting intuitive digital interfaces.
              </p>
            </section>

            <section className="print-no-break">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-4 print:mb-2 text-zinc-500 print:text-zinc-400 print:text-[10px] font-bold">Core Expertise</h2>
              <div className="space-y-6 print:space-y-3">
                <div>
                  <h3 className="text-[10px] font-black uppercase text-white mb-2.5 print:mb-1 print:text-zinc-900 tracking-wider print:text-[9px]">Development</h3>
                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {portfolioData.skills.frontend.map(s => (
                      <span key={s} className="px-2.5 py-1.5 bg-zinc-900 text-zinc-300 text-[9px] font-bold font-mono rounded-lg border border-white/5 print:bg-zinc-100 print:text-zinc-800 print:border-zinc-200 print:border print:px-1.5 print:py-0.5 print:text-[8px]">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-white mb-2.5 print:mb-1 print:text-zinc-900 tracking-wider print:text-[9px]">Backend</h3>
                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {portfolioData.skills.backend.map(s => (
                      <span key={s} className="px-2.5 py-1.5 bg-zinc-900 text-zinc-300 text-[9px] font-bold font-mono rounded-lg border border-white/5 print:bg-zinc-100 print:text-zinc-800 print:border-zinc-200 print:border print:px-1.5 print:py-0.5 print:text-[8px]">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase text-white mb-2.5 print:mb-1 print:text-zinc-900 tracking-wider print:text-[9px]">Tools</h3>
                  <div className="flex flex-wrap gap-1.5 print:gap-1">
                    {portfolioData.skills.tools.map(s => (
                      <span key={s} className="px-2.5 py-1.5 bg-zinc-900 text-zinc-300 text-[9px] font-bold font-mono rounded-lg border border-white/5 print:bg-zinc-100 print:text-zinc-800 print:border-zinc-200 print:border print:px-1.5 print:py-0.5 print:text-[8px]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="md:col-span-2 space-y-10 print:space-y-5">
            <section className="print-no-break">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 print:mb-3 text-zinc-500 print:text-zinc-400 print:text-[10px]">Work Experience</h2>
              <div className="space-y-8 print:space-y-4">
                {portfolioData.experience.map((exp, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 print:bg-transparent print:border-0 print:p-0">
                    <div className="flex justify-between items-start mb-2.5 print:mb-1">
                      <h3 className="font-bold text-lg text-white print:text-zinc-900 print:text-[13px] truncate">{exp.role}</h3>
                      <span className="text-[9px] font-bold font-mono bg-zinc-800 text-cyan-400 px-2.5 py-1 rounded-lg border border-white/5 print:bg-transparent print:text-zinc-500 print:border-0 print:p-0 print:text-[9px]">{exp.period}</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 print:mb-1 print:text-zinc-500 print:text-[9px]">{exp.company}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-semibold print:text-zinc-600 md:font-medium print:text-[10.5px] print:leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="print-no-break">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] mb-6 print:mb-3 text-zinc-500 print:text-zinc-400 print:text-[10px]">Education</h2>
              <div className="space-y-8 print:space-y-4">
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-zinc-900/20 border border-white/5 print:bg-transparent print:border-0 print:p-0">
                    <div className="flex justify-between items-start mb-2 print:mb-1">
                      <h3 className="font-bold text-lg text-white print:text-zinc-900 print:text-[13px] truncate">{edu.degree}</h3>
                      <span className="text-[9px] font-bold font-mono bg-zinc-800/60 font-black text-zinc-300 px-2.5 py-1 rounded-lg print:bg-transparent print:text-zinc-500 print:p-0 print:text-[9px]">{edu.period}</span>
                    </div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 print:mb-1 print:text-zinc-500 print:text-[9px]">{edu.institution}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed font-semibold print:text-zinc-600 md:font-medium print:text-[10.5px] print:leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer info for print */}
        <footer className="mt-20 pt-10 border-t border-zinc-900 text-center hidden print:block print:mt-6 print:pt-3 print:border-zinc-200">
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest print:text-[8px] print:text-zinc-500">
            Generated from Diamond Ghimire's Digital Portfolio • 2026
          </p>
        </footer>
      </div>
    </motion.div>
  );
}
