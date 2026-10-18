import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { contentData } from '../../data/content';

export const Navbar: React.FC = () => {
  const { language, theme, toggleLanguage, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 dark:bg-black/80 light:bg-white/85 apple-glass border-b border-white/8 dark:border-white/8 light:border-black/8 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base md:text-lg font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          {contentData.nav.brand}
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
          <a
            href="#projects"
            className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            {contentData.nav.showcase[language]}
          </a>
          <a
            href="#philosophy"
            className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            {contentData.nav.philosophy[language]}
          </a>
          <a
            href="#team"
            className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            {contentData.nav.team[language]}
          </a>
          <a
            href="#contact"
            className="hover:text-white dark:hover:text-white light:hover:text-black transition-colors whitespace-nowrap shrink-0"
          >
            {contentData.nav.contact[language]}
          </a>
        </nav>

        {/* Zone 3: Interactive Controls (Language, Theme, Primary Action) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label="Sprache umschalten / Switch language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#86868b] hover:text-white dark:hover:text-white light:hover:text-black bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 transition-colors whitespace-nowrap shrink-0"
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Theme wechseln / Toggle theme"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-[#86868b] hover:text-white dark:hover:text-white light:hover:text-black bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 transition-colors shrink-0"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* 1 Primary Action CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-xl transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>{contentData.hero.contactCta[language]}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
