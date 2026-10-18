import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { contentData } from '../../data/content';

export const ContactSection: React.FC = () => {
  const { language } = useApp();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contentData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/5 dark:border-white/5 light:border-black/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-[36px] bg-gradient-to-b from-[#121214] to-[#0a0a0c] dark:from-[#121214] dark:to-[#0a0a0c] light:from-white light:to-[#f5f5f7] border border-white/8 dark:border-white/8 light:border-black/8 p-8 sm:p-12 md:p-16 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2997ff]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#2997ff] mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>{contentData.contact.sectionKicker[language]}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] mb-6 leading-tight">
              {contentData.contact.sectionTitle[language]}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] leading-relaxed mb-10">
              {contentData.contact.sectionSubtitle[language]}
            </p>

            {/* Email Contact Box */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-3 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 max-w-xl mb-6">
              <div className="flex items-center gap-3 px-3 py-2 flex-grow overflow-hidden">
                <Mail className="w-5 h-5 text-[#2997ff] shrink-0" />
                <span className="font-mono text-sm sm:text-base font-semibold text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] truncate">
                  {contentData.contact.email}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 dark:bg-white/10 light:bg-black/10 hover:bg-white/15 dark:hover:bg-white/15 light:hover:bg-black/15 text-white dark:text-white light:text-black transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Kopiert</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{contentData.contact.copyEmail[language]}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${contentData.contact.email}?subject=Projektanfrage%20Jacob%20Glathe%20%26%20Team`}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all shadow-sm"
                >
                  <span>{contentData.contact.sendEmail[language]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="text-xs text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2997ff]" />
              <span>{contentData.contact.availability[language]}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
