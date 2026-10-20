import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Check, Copy, Share2 } from 'lucide-react';
import { Project } from '../../types';
import { useApp } from '../../context/AppContext';
import { contentData } from '../../data/content';
import { copyToClipboard } from '../../utils/clipboard';
import { triggerHaptic, hapticSpring } from '../../utils/haptics';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language } = useApp();
  const [activeTab, setActiveTab] = useState<'overview' | 'linkedin' | 'specs'>('overview');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e && e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleClose = () => {
    triggerHaptic('light');
    onClose();
  };

  const handleTabChange = (tab: 'overview' | 'linkedin' | 'specs') => {
    triggerHaptic('selection');
    setActiveTab(tab);
  };

  const handleCopyPitch = async () => {
    triggerHaptic('light');
    await copyToClipboard(project.linkedinPitch[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Surface */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#121214] dark:bg-[#121214] light:bg-[#ffffff] border border-white/10 dark:border-white/10 light:border-black/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] z-10 flex flex-col">
        {/* Sticky Header with Title & Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-white/8 dark:border-white/8 light:border-black/8 bg-[#121214]/90 dark:bg-[#121214]/90 light:bg-white/90 apple-glass">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#2997ff]">
              {project.category}
            </span>
            <span aria-hidden="true" className="text-white/20 dark:text-white/20 light:text-black/20">·</span>
            <span className="text-xs text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
              {project.headline[language]}
            </span>
          </div>

          <motion.button
            whileTap={hapticSpring.iconButton}
            onClick={handleClose}
            aria-label={contentData.modal.close[language]}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 text-[#86868b] hover:text-white dark:hover:text-white light:hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Main Title & Subtitle */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl md:text-3xl font-bold tracking-tight text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] mb-3 leading-snug"
            >
              {project.title[language]}
            </h2>
            <p className="text-base md:text-lg text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] leading-relaxed">
              {project.shortDescription[language]}
            </p>
          </div>

          {/* Key Metrics Strip (Tabular) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-black/[0.03] border border-white/5 dark:border-white/5 light:border-black/5">
            {project.metrics.map((m, i) => (
              <div key={i} className="space-y-1">
                <span className="text-xs text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
                  {m.label[language]}
                </span>
                <p className="text-lg md:text-xl font-bold text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] font-mono tabular-nums">
                  {m.value}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Tabs with Haptics */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 w-fit">
            <motion.button
              whileTap={hapticSpring.pill}
              onClick={() => handleTabChange('overview')}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-white/15 dark:bg-white/15 light:bg-white text-white dark:text-white light:text-black shadow-sm'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              {contentData.modal.overviewTab[language]}
            </motion.button>
            <motion.button
              whileTap={hapticSpring.pill}
              onClick={() => handleTabChange('linkedin')}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'linkedin'
                  ? 'bg-white/15 dark:bg-white/15 light:bg-white text-white dark:text-white light:text-black shadow-sm'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              {contentData.modal.linkedinTab[language]}
            </motion.button>
            <motion.button
              whileTap={hapticSpring.pill}
              onClick={() => handleTabChange('specs')}
              className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeTab === 'specs'
                  ? 'bg-white/15 dark:bg-white/15 light:bg-white text-white dark:text-white light:text-black shadow-sm'
                  : 'text-[#86868b] hover:text-white'
              }`}
            >
              {contentData.modal.specsTab[language]}
            </motion.button>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#1c1c1e] border border-white/10">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-base text-[#d1d1d6] dark:text-[#d1d1d6] light:text-[#3a3a3c] leading-relaxed">
                  {project.longDescription[language]}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-3 pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
                  {language === 'de' ? 'Technologie & Architektur' : 'Technology & Architecture'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 dark:bg-white/5 light:bg-black/5 text-[#d1d1d6] dark:text-[#d1d1d6] light:text-[#3a3a3c] border border-white/5 dark:border-white/5 light:border-black/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: LinkedIn Formulation */}
          {activeTab === 'linkedin' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-black/[0.02] border border-white/10 dark:border-white/10 light:border-black/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2997ff]">
                    <Share2 className="w-4 h-4" />
                    <span>LinkedIn Executive Pitch</span>
                  </div>
                  <motion.button
                    whileTap={hapticSpring.button}
                    onClick={handleCopyPitch}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Kopiert</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopieren</span>
                      </>
                    )}
                  </motion.button>
                </div>

                <div className="p-4 rounded-xl bg-black/40 dark:bg-black/40 light:bg-black/5 font-sans text-sm md:text-base leading-relaxed text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] border border-white/5">
                  <p className="whitespace-pre-line">{project.linkedinPitch[language]}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Tech & Hardware Specs */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 dark:border-white/10 light:border-black/10">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-white/5 dark:divide-y dark:divide-white/5 light:divide-y light:divide-black/5">
                    {project.specs && project.specs.length > 0 ? (
                      project.specs.map((spec, i) => (
                        <tr
                          key={i}
                          className="hover:bg-white/[0.02] dark:hover:bg-white/[0.02] light:hover:bg-black/[0.02]"
                        >
                          <td className="py-3.5 px-5 font-medium text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73] w-1/3">
                            {spec.key[language]}
                          </td>
                          <td className="py-3.5 px-5 text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] font-mono text-xs md:text-sm">
                            {spec.value}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="py-4 px-5 text-sm text-[#86868b]">
                          {language === 'de' ? 'Keine Spezifikationen verfügbar' : 'No specifications available'}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Haptic Controls */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 border-t border-white/8 dark:border-white/8 light:border-black/8 bg-[#121214]/95 dark:bg-[#121214]/95 light:bg-white/95 apple-glass">
          <div className="text-xs text-[#86868b] dark:text-[#86868b] light:text-[#6e6e73]">
            {project.isOpenSource ? 'Open Source Architecture' : 'Commercial R&D'}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={hapticSpring.button}
              onClick={handleClose}
              className="px-4 py-2 text-xs md:text-sm font-medium rounded-xl text-[#86868b] hover:text-white dark:hover:text-white light:hover:text-black transition-colors cursor-pointer"
            >
              {contentData.modal.close[language]}
            </motion.button>

            {project.isOpenSource && (
              <motion.a
                href="#contact"
                whileTap={hapticSpring.button}
                onClick={() => {
                  triggerHaptic('medium');
                  onClose();
                }}
                className="flex items-center gap-2 px-5 py-2 text-xs md:text-sm font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-xl transition-colors shadow-sm"
              >
                <span>{project.repoUrlLabel[language]}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
