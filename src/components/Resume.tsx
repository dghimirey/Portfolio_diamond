/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MapPin, Globe, ArrowLeft, Printer } from 'lucide-react';
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
      className="min-h-screen bg-white text-gray-900 p-4 sm:p-8 md:p-12 font-serif print:p-0 print:m-0"
    >
      <style dangerouslySetInnerHTML={{__html: `
        @page {
          size: A4;
          margin: 15mm 20mm;
        }
        @media print {
          body {
            background-color: white !important;
            color: black !important;
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
          a {
            text-decoration: none;
            color: black !important;
          }
        }
      `}} />

      <div className="max-w-4xl mx-auto print:max-w-none print:w-full">
        {/* Navigation - Hidden on print */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 print:hidden">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-xs font-medium uppercase tracking-wide">Back to Portfolio</span>
          </button>
          
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 border border-gray-300 hover:border-gray-600 px-4 py-2 rounded text-xs font-medium uppercase tracking-wide transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* Resume */}
        <div className="print:shadow-none">
          {/* Header */}
          <header className="border-b-2 border-gray-900 pb-6 mb-8 print:pb-4 print:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-1 print:text-3xl">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-base font-medium text-gray-600 uppercase tracking-wide print:text-sm">
                  {portfolioData.personal.role}
                </p>
              </div>
              <div className="text-sm text-gray-600 space-y-1 print:text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:gap-6">
            {/* Left Column */}
            <div className="md:col-span-1 space-y-6">
              {/* Summary */}
              <section className="print-no-break">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-2 mb-3">
                  Profile
                </h2>
                <p className="text-sm leading-relaxed text-gray-700 print:text-xs">
                  {portfolioData.personal.bio}
                </p>
              </section>

              {/* Skills */}
              <section className="print-no-break">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-2 mb-3">
                  Skills
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-800 mb-1.5">Frontend</h3>
                    <div className="flex flex-wrap gap-1">
                      {portfolioData.skills.frontend.map(s => (
                        <span key={s} className="text-xs text-gray-700 border border-gray-300 px-2 py-0.5 rounded print:text-[10px] print:border-gray-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-800 mb-1.5">Backend</h3>
                    <div className="flex flex-wrap gap-1">
                      {portfolioData.skills.backend.map(s => (
                        <span key={s} className="text-xs text-gray-700 border border-gray-300 px-2 py-0.5 rounded print:text-[10px] print:border-gray-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-gray-800 mb-1.5">Tools</h3>
                    <div className="flex flex-wrap gap-1">
                      {portfolioData.skills.tools.map(s => (
                        <span key={s} className="text-xs text-gray-700 border border-gray-300 px-2 py-0.5 rounded print:text-[10px] print:border-gray-400">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Experience */}
              <section className="print-no-break">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-2 mb-4">
                  Experience
                </h2>
                <div className="space-y-5">
                  {portfolioData.experience.map((exp, i) => (
                    <div key={i}>
                      <div className="flex flex-wrap justify-between items-baseline mb-1">
                        <h3 className="text-base font-semibold text-gray-900 print:text-sm">{exp.role}</h3>
                        <span className="text-xs text-gray-500 print:text-[10px]">{exp.period}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 print:text-xs">{exp.company}</p>
                      <p className="text-sm text-gray-700 leading-relaxed print:text-xs">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="print-no-break">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 pb-2 mb-4">
                  Education
                </h2>
                <div className="space-y-5">
                  {portfolioData.education.map((edu, i) => (
                    <div key={i}>
                      <div className="flex flex-wrap justify-between items-baseline mb-1">
                        <h3 className="text-base font-semibold text-gray-900 print:text-sm">{edu.degree}</h3>
                        <span className="text-xs text-gray-500 print:text-[10px]">{edu.period}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2 print:text-xs">{edu.institution}</p>
                      <p className="text-sm text-gray-700 leading-relaxed print:text-xs">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-4 border-t border-gray-200 text-center print:mt-6 print:pt-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">
              {portfolioData.personal.name} • Professional Resume
            </p>
          </footer>
        </div>
      </div>
    </motion.div>
  );
}
