import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { Project } from '../../types';
import { useApp } from '../../context/AppContext';

interface BentoCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index?: number;
}

export const BentoCard: React.FC<BentoCardProps> = ({ project, onSelect, index = 0 }) => {
  const { language } = useApp();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{
        y: -4,
        scale: 1.012,
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
      }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] text-left cursor-pointer
        bg-[#121214] dark:bg-[#121214] light:bg-white
        border border-white/8 dark:border-white/8 light:border-black/8
        hover:border-white/20 dark:hover:border-white/25 light:hover:border-black/20
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)] light:hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        p-7 md:p-8 ${project.gridSpan}`}
    >
      {/* Top Header Zone: Headline kicker & Action Arrow */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
            <Cpu className="w-3.5 h-3.5 text-[#2997ff]" />
            <span className="uppercase tracking-wider text-[11px] font-semibold text-[#2997ff]">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate max-w-[220px]">
              {project.headline[language]}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/5 light:bg-black/5 text-[#86868b] group-hover:text-white dark:group-hover:text-white light:group-hover:text-black group-hover:bg-[#2997ff]/20 transition-all duration-200 shrink-0">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] mb-3 leading-snug group-hover:text-white transition-colors">
          {project.title[language]}
        </h3>

        {/* Short Description */}
        <p className="text-sm md:text-base leading-relaxed text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] mb-6">
          {project.shortDescription[language]}
        </p>
      </div>

      {/* Visual Media Showcase Slot */}
      <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-[#1c1c1e] dark:bg-[#1c1c1e] light:bg-[#f5f5f7] border border-white/5 dark:border-white/5 light:border-black/5 mb-6">
        {!imageError && project.image ? (
          <>
            <img
              src={project.image}
              alt={project.imageAlt || project.title[language]}
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Subtle scrim for optical depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/60 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          /* Graceful Fallback Container (Anti-broken-image policy) */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1c1c1e] to-[#2c2c2e]">
            <Layers className="w-8 h-8 text-[#86868b] mb-2 stroke-[1.5]" />
            <span className="text-xs font-medium text-[#86868b]">
              {project.title[language]}
            </span>
          </div>
        )}

        {/* Floating Quick Key Metric */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/70 dark:bg-black/70 light:bg-white/80 apple-glass border border-white/10 dark:border-white/10 light:border-black/10">
            <span className="text-xs font-medium text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
              {project.metrics[0].label[language]}
            </span>
            <span className="text-xs font-semibold text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] font-mono tabular-nums">
              {project.metrics[0].value}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Footer: Clean unboxed Tech-Stack (Zero-Pill Discipline) */}
      <div className="pt-2 border-t border-white/5 dark:border-white/5 light:border-black/5">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] font-medium">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <React.Fragment key={tech}>
              <span className="hover:text-[#f5f5f7] dark:hover:text-[#f5f5f7] light:hover:text-[#1d1d1f] transition-colors">
                {tech}
              </span>
              {i < Math.min(project.techStack.length, 4) - 1 && (
                <span aria-hidden="true" className="text-white/20 dark:text-white/20 light:text-black/20">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-white/40 dark:text-white/40 light:text-black/40">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
