/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { BentoShowcase } from './components/sections/BentoShowcase';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { TeamSection } from './components/sections/TeamSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/ui/ProjectModal';
import { Project } from './types';

// Minimalist, Apple-Grade Launch Screen
const LaunchScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#000000] text-[#f5f5f7] select-none pointer-events-none"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-5"
      >
        <div className="relative flex items-center justify-center w-16 h-16 rounded-[22px] bg-[#121214] border border-white/10 shadow-[0_0_40px_rgba(41,151,255,0.18)]">
          <Cpu className="w-8 h-8 text-[#2997ff]" />
          <div className="absolute inset-0 rounded-[22px] bg-[#2997ff]/10 animate-pulse pointer-events-none" />
        </div>

        <div className="text-center space-y-1.5">
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#f5f5f7]">
            Jacob Glathe & Team
          </h2>
          <p className="text-[10px] sm:text-xs font-mono tracking-widest text-[#86868b] uppercase">
            Precision from Silicon to Cloud
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const MainContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    // Elegant, zero-jank initial launch timing
    const timer = setTimeout(() => {
      setIsAppReady(true);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-[#fbfbfd] text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] flex flex-col font-sans transition-colors duration-300 selection:bg-[#2997ff]/30 selection:text-white antialiased">
      <AnimatePresence>
        {!isAppReady && <LaunchScreen />}
      </AnimatePresence>

      <Navbar />

      <main className="flex-grow pt-safe pb-safe">
        <HeroSection />
        <BentoShowcase onSelectProject={setSelectedProject} />
        <PhilosophySection />
        <TeamSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Interactive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
