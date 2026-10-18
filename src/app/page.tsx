import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] flex flex-col font-sans selection:bg-[#2997ff]/30 selection:text-white antialiased">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <BentoGrid />
      </main>
      <footer className="py-12 border-t border-white/[0.08] bg-[#000000]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
          <p>© {new Date().getFullYear()} Jacob Glathe & Team. Alle Rechte vorbehalten.</p>
          <p className="font-mono text-[11px]">
            ESP32 · Linux Daemons · Next.js · Apple Design Standards
          </p>
        </div>
      </footer>
    </div>
  );
}
