import { motion } from "motion/react";
import { Mail, MapPin, Globe, ArrowLeft, Printer } from "lucide-react";
import { portfolioData } from "../data/portfolio";

interface ResumeProps {
  onBack: () => void;
}

export default function Resume({ onBack }: ResumeProps) {
  const handlePrint = (): void => {
    window.print();
  };

  const formatUrl = (url?: string) => {
    if (!url) return "portfolio.diamondghimire.com.np";
    return url.replace(/https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-white text-black p-4 sm:p-8 md:p-12 print:p-0 print:m-0"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Print Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @page {
              size: A4;
              margin: 15mm 20mm;
            }

            @media print {
              body {
                background: white !important;
                color: black !important;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }

              .print-no-break {
                break-inside: avoid;
                page-break-inside: avoid;
              }

              .print-hide {
                display: none !important;
              }

              a {
                color: black !important;
                text-decoration: none;
              }
            }
          `,
        }}
      />

      <div className="max-w-4xl mx-auto print:max-w-none print:w-full">
        {/* Top Navigation */}
        <nav className="flex items-center justify-between mb-8 pb-4 border-b border-gray-300 print:hidden">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs uppercase tracking-wide">
              Back to Portfolio
            </span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 border border-gray-400 hover:border-black px-4 py-2 rounded text-xs uppercase tracking-wide transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </nav>

        {/* Resume Content */}
        <div>
          {/* Header */}
          <header className="border-b-2 border-black pb-6 mb-8 print:pb-4 print:mb-6">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold uppercase print:text-3xl">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-base text-gray-700 uppercase font-medium print:text-sm">
                  {portfolioData.personal.role}
                </p>
              </div>

              <div className="text-sm text-gray-700 space-y-1 print:text-xs">
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
                    {formatUrl(portfolioData.personal.portfolioUrl)}
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:gap-6">
            {/* Left Column */}
            <aside className="md:col-span-1 space-y-6">
              {/* Profile */}
              <section className="print-no-break">
                <h2 className="section-title">Profile</h2>
                <p className="text-sm text-gray-800 leading-relaxed print:text-xs">
                  {portfolioData.personal.bio}
                </p>
              </section>

              {/* Skills */}
              <section className="print-no-break">
                <h2 className="section-title">Skills</h2>

                {Object.entries(portfolioData.skills).map(([key, values]) => (
                  <div key={key} className="mb-3">
                    <h3 className="text-xs font-semibold capitalize mb-1">
                      {key}
                    </h3>

                    <div className="flex flex-wrap gap-1">
                      {values.map((skill: string) => (
                        <span
                          key={skill}
                          className="text-xs border border-gray-400 px-2 py-0.5 rounded-sm text-gray-800 print:text-[10px]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            </aside>

            {/* Right Column */}
            <main className="md:col-span-2 space-y-6">
              {/* Experience */}
              <section className="print-no-break">
                <h2 className="section-title">Experience</h2>

                <div className="space-y-5">
                  {portfolioData.experience.map((exp, index) => (
                    <article key={index}>
                      <div className="flex justify-between flex-wrap gap-2 mb-1">
                        <h3 className="font-bold text-base print:text-sm">
                          {exp.role}
                        </h3>
                        <span className="text-xs text-gray-600 print:text-[10px]">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-sm text-gray-700 mb-2 print:text-xs">
                        {exp.company}
                      </p>

                      <p className="text-sm text-gray-800 leading-relaxed print:text-xs">
                        {exp.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="print-no-break">
                <h2 className="section-title">Education</h2>

                <div className="space-y-5">
                  {portfolioData.education.map((edu, index) => (
                    <article key={index}>
                      <div className="flex justify-between flex-wrap gap-2 mb-1">
                        <h3 className="font-bold text-base print:text-sm">
                          {edu.degree}
                        </h3>
                        <span className="text-xs text-gray-600 print:text-[10px]">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-sm text-gray-700 mb-2 print:text-xs">
                        {edu.institution}
                      </p>

                      <p className="text-sm text-gray-800 leading-relaxed print:text-xs">
                        {edu.details}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </main>
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-4 border-t text-center print:mt-6 print:pt-3">
            <p className="text-[10px] text-gray-500 uppercase tracking-wide">
              {portfolioData.personal.name} • Professional Resume
            </p>
          </footer>
        </div>
      </div>

      {/* Reusable styles */}
      <style>
        {`
          .section-title {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #4b5563;
            border-bottom: 1px solid #d1d5db;
            padding-bottom: 0.5rem;
            margin-bottom: 0.75rem;
          }
        `}
      </style>
    </motion.div>
  );
}
