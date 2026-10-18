import React from 'react';
import { useApp } from '../../context/AppContext';
import { contentData } from '../../data/content';
import { CheckCircle2, Shield, Wrench, Sparkles } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const { language } = useApp();

  const icons = [Wrench, Shield, Sparkles];

  return (
    <section id="philosophy" className="py-24 md:py-32 border-t border-white/5 dark:border-white/5 light:border-black/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#2997ff] mb-3">
            {contentData.philosophy.sectionKicker[language]}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] mb-4">
            {contentData.philosophy.sectionTitle[language]}
          </h2>
          <p className="text-base md:text-lg text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] leading-relaxed">
            {contentData.philosophy.sectionSubtitle[language]}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentData.philosophy.items.map((item, idx) => {
            const IconComponent = icons[idx] || CheckCircle2;
            return (
              <div
                key={item.number}
                className="relative p-8 rounded-[28px] bg-[#121214] dark:bg-[#121214] light:bg-white border border-white/8 dark:border-white/8 light:border-black/8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-mono font-light text-[#86868b]/50 dark:text-[#86868b]/40 light:text-black/30">
                      {item.number}
                    </span>
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-white/5 dark:bg-white/5 light:bg-black/5 text-[#2997ff]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] mb-3">
                    {item.title[language]}
                  </h3>

                  <p className="text-sm md:text-base leading-relaxed text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
                    {item.description[language]}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5 text-xs text-[#86868b]">
                  <span>Prinzip {item.number} · Verifiziert in Produktion</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
