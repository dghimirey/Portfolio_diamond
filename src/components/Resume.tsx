/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MapPin, Globe, ArrowLeft, Printer, Download, Phone, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ResumeProps {
  onBack: () => void;
}

export default function Resume({ onBack }: ResumeProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
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
          size: A4;
          margin: 12mm 15mm;
        }
        @media print {
          body {
            background-color: #ffffff !important;
            color: #18181b !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-no-break {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          .print-hide {
            display: none !important;
          }
        }
        @media print and (max-width: 768px) {
          .resume-grid {
            display: block !important;
          }
        }
      `}} />

      <div className="max-w-5xl mx-auto print:max-w-none print:w-full">
        {/* Navigation / Actions (Hidden on print) */}
        <div className="flex items-center justify-between mb-12 print:hidden">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </button>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 bg-white hover:bg-zinc-100 text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white text-zinc-800 rounded-2xl overflow-hidden shadow-2xl print:shadow-none print:rounded-none">
          {/* Header Section */}
          <header className="bg-zinc-900 text-white px-8 pt-12 pb-10 print:bg-zinc-800 print:text-white print:px-6 print:pt-8 print:pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-2 print:text-4xl">{portfolioData.personal.name}</h1>
                <p className="text-xl text-cyan-400 font-medium tracking-wide print:text-cyan-300">{portfolioData.personal.role}</p>
              </div>
              <div className="text-right space-y-1.5 text-sm print:text-xs">
                <div className="flex items-center gap-2 justify-end">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${portfolioData.personal.email}`} className="hover:underline">
                    {portfolioData.personal.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 justify-end">
                                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2 justify-end">
                                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a 
                    href={portfolioData.personal.portfolioUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {portfolioData.personal.portfolioUrl?.replace(/https?:\/\/(www\.)?/, '').replace(/\/$/, '') || 'portfolio.diamondghimire.com.np'}
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="p-8 print:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:gap-6 resume-grid">
              {/* Left Column: Summary & Skills */}
              <div className="md:col-span-1 space-y-6 print:space-y-4">
                {/* Professional Summary */}
                <section className="print-no-break">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 border-b-2 border-zinc-200 pb-2 mb-4 print:text-xs">
                    Professional Summary
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-700 print:text-xs">
                    {portfolioData.personal.bio}
                  </p>
                </section>

                {/* Core Competencies */}
                <section className="print-no-break">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 border-b-2 border-zinc-200 pb-2 mb-4 print:text-xs">
                    Core Competencies
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-800 mb-2 print:text-[11px]">Frontend Development</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {portfolioData.skills.frontend.map(s => (
                          <span key={s} className="px-2 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-md print:bg-zinc-50 print:text-zinc-800 print:border print:border-zinc-200 print:text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-800 mb-2 print:text-[11px]">Backend & Database</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {portfolioData.skills.backend.map(s => (
                          <span key={s} className="px-2 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-md print:bg-zinc-50 print:text-zinc-800 print:border print:border-zinc-200 print:text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-zinc-800 mb-2 print:text-[11px]">Tools & Technologies</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {portfolioData.skills.tools.map(s => (
                          <span key={s} className="px-2 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-md print:bg-zinc-50 print:text-zinc-800 print:border print:border-zinc-200 print:text-[10px]">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column: Experience & Education */}
              <div className="md:col-span-2 space-y-6 print:space-y-4">
                {/* Work Experience */}
                <section className="print-no-break">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 border-b-2 border-zinc-200 pb-2 mb-5 print:text-xs">
                    Work Experience
                  </h2>
                  <div className="space-y-6">
                    {portfolioData.experience.map((exp, i) => (
                      <div key={i}>
                        <div className="flex flex-wrap justify-between items-baseline mb-2">
                          <h3 className="text-base font-bold text-zinc-800 print:text-sm">{exp.role}</h3>
                          <span className="text-xs text-zinc-500 font-medium print:text-[10px]">{exp.period}</span>
                        </div>
                        <p className="text-sm font-medium text-cyan-600 mb-2 print:text-xs">{exp.company}</p>
                        <p className="text-sm text-zinc-600 leading-relaxed print:text-xs">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education */}
                <section className="print-no-break">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 border-b-2 border-zinc-200 pb-2 mb-5 print:text-xs">
                    Education
                  </h2>
                  <div className="space-y-6">
                    {portfolioData.education.map((edu, i) => (
                      <div key={i}>
                        <div className="flex flex-wrap justify-between items-baseline mb-2">
                          <h3 className="text-base font-bold text-zinc-800 print:text-sm">{edu.degree}</h3>
                          <span className="text-xs text-zinc-500 font-medium print:text-[10px]">{edu.period}</span>
                        </div>
                        <p className="text-sm font-medium text-cyan-600 mb-2 print:text-xs">{edu.institution}</p>
                        <p className="text-sm text-zinc-600 leading-relaxed print:text-xs">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Additional Information */}
                <section className="print-no-break">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 border-b-2 border-zinc-200 pb-2 mb-4 print:text-xs">
                    Professional Highlights
                  </h2>
                  <ul className="space-y-2 text-sm text-zinc-600 leading-relaxed list-disc list-inside print:text-xs">
                    <li>Full-stack development expertise with modern JavaScript frameworks</li>
                    <li>Strong focus on performance optimization and responsive design</li>
                    <li>Experience with Agile methodologies and cross-functional collaboration</li>
                    <li>Commitment to clean code practices and continuous learning</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-zinc-50 px-8 py-4 text-center text-xs text-zinc-500 border-t border-zinc-200 print:bg-white print:border-t print:mt-4">
            <p>Professional Resume • {portfolioData.personal.name} • Updated 2026</p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}
