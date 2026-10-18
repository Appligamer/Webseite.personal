import React from 'react';
import { useApp } from '../../context/AppContext';
import { contentData } from '../../data/content';

export const Footer: React.FC = () => {
  const { language } = useApp();

  return (
    <footer className="py-12 border-t border-white/8 dark:border-white/8 light:border-black/8 bg-black dark:bg-black light:bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5 dark:border-white/5 light:border-black/5">
          <div>
            <span className="text-base font-bold text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f]">
              {contentData.nav.brand}
            </span>
            <p className="text-xs text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] mt-1">
              {contentData.footer.tagline[language]}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
            <a href="#projects" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
              {contentData.nav.showcase[language]}
            </a>
            <a href="#philosophy" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
              {contentData.nav.philosophy[language]}
            </a>
            <a href="#team" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
              {contentData.nav.team[language]}
            </a>
            <a href="#contact" className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors">
              {contentData.nav.contact[language]}
            </a>
            <a
              href={`mailto:${contentData.contact.email}`}
              className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
            >
              E-Mail
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]/70 dark:text-[#86868b]/70 light:text-[#6e6e73]/80">
          <p>{contentData.footer.copyright}</p>
          <p className="font-mono text-[11px]">
            ESP32 · Linux Daemons · React 19 · Apple Design Standards
          </p>
        </div>
      </div>
    </footer>
  );
};
