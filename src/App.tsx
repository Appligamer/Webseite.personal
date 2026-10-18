/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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

const MainContent: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black dark:bg-black light:bg-[#fbfbfd] text-[#f5f5f7] dark:text-[#f5f5f7] light:text-[#1d1d1f] flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
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
