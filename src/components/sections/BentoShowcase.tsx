import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, ProjectCategory } from '../../types';
import { projectsData } from '../../data/projects';
import { contentData } from '../../data/content';
import { useApp } from '../../context/AppContext';
import { BentoCard } from '../ui/BentoCard';
import { Cpu } from 'lucide-react';
import { triggerHaptic, hapticSpring } from '../../utils/haptics';

interface BentoShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const BentoShowcase: React.FC<BentoShowcaseProps> = ({ onSelectProject }) => {
  const { language } = useApp();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const handleCategoryChange = (cat: ProjectCategory) => {
    triggerHaptic('selection');
    setActiveCategory(cat);
  };

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: contentData.bento.filterAll[language] },
    { key: 'hardware', label: contentData.bento.filterHardware[language] },
    { key: 'embedded', label: contentData.bento.filterEmbedded[language] },
    { key: 'cloud', label: contentData.bento.filterCloud[language] },
    { key: 'web', label: contentData.bento.filterWeb[language] },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#2997ff] mb-3">
              <Cpu className="w-4 h-4" />
              <span>{contentData.bento.sectionKicker[language]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] mb-4">
              {contentData.bento.sectionTitle[language]}
            </h2>
            <p className="text-base md:text-lg text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] leading-relaxed">
              {contentData.bento.sectionSubtitle[language]}
            </p>
          </div>

          {/* Functional Category Filter (Tactile Haptic Button Group) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#121214] dark:bg-[#121214] light:bg-[#f5f5f7] border border-white/8 dark:border-white/8 light:border-black/8 self-start md:self-end">
            {categories.map((cat) => (
              <motion.button
                key={cat.key}
                whileTap={hapticSpring.pill}
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-white/15 dark:bg-white/15 light:bg-white text-white dark:text-white light:text-black shadow-sm'
                    : 'text-[#86868b] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <BentoCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
