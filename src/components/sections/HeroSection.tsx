import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Cpu, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { contentData } from '../../data/content';

export const HeroSection: React.FC = () => {
  const { language } = useApp();
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Kicker (Zero-pill: clean text with typographic separator) */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#2997ff] mb-6">
          <Cpu className="w-4 h-4" />
          <span>{contentData.hero.kicker[language]}</span>
        </div>

        {/* Massive Confident Headlines */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] leading-[1.05] mb-4">
            <span className="block gradient-text-apple">
              {contentData.hero.titleLine1[language]}
            </span>
            <span className="block text-[#86868b] dark:text-[#86868b] light:text-[#424245]">
              {contentData.hero.titleLine2[language]}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] max-w-3xl">
            {contentData.hero.subtitle[language]}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16 md:mb-20">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-2xl transition-all shadow-[0_10px_25px_rgba(0,113,227,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{contentData.hero.exploreCta[language]}</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-semibold text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 rounded-2xl transition-all border border-white/10 dark:border-white/10 light:border-black/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{contentData.hero.contactCta[language]}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Visual Container: Studio Hardware Engineering Lab */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-[32px] overflow-hidden bg-[#121214] border border-white/10 dark:border-white/10 light:border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] mb-14">
          <img
            src="/images/hero_hardware_lab.jpg"
            alt="Minimalist Hardware Engineering Lab"
            referrerPolicy="no-referrer"
            onLoad={() => setHeroImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              heroImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Badge-less bottom annotation */}
          <div className="absolute bottom-6 left-6 md:left-10 text-xs font-mono text-white/70">
            <span>ESP32 Silicon · High-Frequency Synthesis · Debian Linux Core</span>
          </div>
        </div>

        {/* 4-Column KPI / Key Metrics Strip Below Hero (Tabular Numerals) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 rounded-[28px] bg-[#121214]/60 dark:bg-[#121214]/60 light:bg-white/80 apple-glass border border-white/8 dark:border-white/8 light:border-black/8">
          {contentData.hero.quickMetrics.map((metric, idx) => (
            <div key={idx} className="space-y-1.5">
              <span className="text-xs text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] font-medium">
                {metric.label[language]}
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] font-mono tabular-nums">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
