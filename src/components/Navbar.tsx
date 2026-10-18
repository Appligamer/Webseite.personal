'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Shield, Terminal, Cpu } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/75 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-base md:text-lg font-bold tracking-tight text-[#f5f5f7] hover:text-white transition-colors whitespace-nowrap shrink-0"
        >
          Jacob Glathe & Team
        </a>

        {/* Zone 2: 4 Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#86868b]">
          <a
            href="#projects"
            className="hover:text-[#f5f5f7] transition-colors whitespace-nowrap shrink-0"
          >
            Showcase
          </a>
          <a
            href="#architecture"
            className="hover:text-[#f5f5f7] transition-colors whitespace-nowrap shrink-0"
          >
            Hardware & IoT
          </a>
          <a
            href="#philosophy"
            className="hover:text-[#f5f5f7] transition-colors whitespace-nowrap shrink-0"
          >
            Philosophie
          </a>
          <a
            href="#contact"
            className="hover:text-[#f5f5f7] transition-colors whitespace-nowrap shrink-0"
          >
            Kontakt
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="mailto:jcob.glathe@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-xl transition-all shadow-[0_2px_10px_rgba(0,113,227,0.3)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Navigation umschalten"
            className="p-2 text-[#86868b] hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 animate-fade-in">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#86868b]">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f5f5f7] py-1"
            >
              Showcase
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f5f5f7] py-1"
            >
              Hardware & IoT
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f5f5f7] py-1"
            >
              Philosophie
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#f5f5f7] py-1"
            >
              Kontakt
            </a>
            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href="mailto:jcob.glathe@gmail.com"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#0071e3] rounded-xl shadow-sm"
              >
                <span>Projekt anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
