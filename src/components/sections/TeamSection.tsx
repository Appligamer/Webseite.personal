import React from 'react';
import { useApp } from '../../context/AppContext';
import { teamData } from '../../data/team';
import { contentData } from '../../data/content';
import { Mail, ArrowUpRight, ShieldCheck, Terminal, Users } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const { language } = useApp();

  return (
    <section id="team" className="py-24 md:py-32 border-t border-white/5 dark:border-white/5 light:border-black/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#2997ff] mb-3">
            <Users className="w-4 h-4" />
            <span>{contentData.team.sectionKicker[language]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] mb-4">
            {contentData.team.sectionTitle[language]}
          </h2>
          <p className="text-base md:text-lg text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] leading-relaxed">
            {contentData.team.sectionSubtitle[language]}
          </p>
        </div>

        {/* 3-in-a-Row Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="p-8 rounded-[28px] bg-[#121214] dark:bg-[#121214] light:bg-white border border-white/8 dark:border-white/8 light:border-black/8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar and Role */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e] border border-white/10 text-white font-bold text-lg font-mono">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#2997ff] font-medium tracking-wide">
                      {member.role[language]}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] mb-6">
                  {member.bio[language]}
                </p>

                {/* Focus Areas (Zero-Pill: Unboxed text with separators) */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#86868b] mb-2">
                    {contentData.team.focusTitle[language]}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#d1d1d6] dark:text-[#d1d1d6] light:text-[#3a3a3c]">
                    {member.focusAreas.map((area, idx) => (
                      <React.Fragment key={idx}>
                        <span>{area[language]}</span>
                        {idx < member.focusAreas.length - 1 && (
                          <span aria-hidden="true" className="text-white/20 dark:text-white/20 light:text-black/20">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5 flex items-center gap-3">
                {member.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#86868b] hover:text-white dark:hover:text-white light:hover:text-black transition-colors"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
