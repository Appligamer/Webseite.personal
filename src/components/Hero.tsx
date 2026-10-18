'use client';

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Cpu } from 'lucide-react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Kicker (Zero-Pill: Clean unboxed metadata) */}
        <div className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide text-[#2997ff] mb-6">
          <Cpu className="w-4 h-4" />
          <span>Embedded Systems · Linux Server Infrastructure · High-End Engineering</span>
        </div>

        {/* Confident Apple Headline & Leading */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f5f5f7] leading-[1.04] mb-6">
            <span className="block bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#ffffff]/70 bg-clip-text text-transparent">
              PRÄZISION.
            </span>
            <span className="block text-[#86868b]">
              VOM SILIZIUM BIS ZUR CLOUD.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-[#86868b] max-w-3xl">
            Wir entwickeln hardwarenahe IoT-Systeme auf ESP32-Basis, verteilte Linux-Server-Infrastrukturen und meisterhafte Software-Plattformen — getrieben von kompromissloser Ingenieurskunst und quelloffener Transparenz.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16 md:mb-20">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-semibold text-white bg-[#0071e3] hover:bg-[#0077ed] rounded-2xl transition-all shadow-[0_10px_25px_rgba(0,113,227,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Ausgewählte Arbeiten entdecken</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-semibold text-[#f5f5f7] bg-white/[0.05] hover:bg-white/[0.1] rounded-2xl transition-all border border-white/[0.08] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Visual: Studio Hardware Engineering Lab */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] rounded-[32px] overflow-hidden bg-[#161617] border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.8)] mb-14">
          <img
            src="/images/hero_hardware_lab.jpg"
            alt="Hardware Engineering Lab Workspace"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Ambient Contrast Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

          {/* Clean Annotation */}
          <div className="absolute bottom-6 left-6 md:left-10 text-xs font-mono text-[#86868b] tracking-wider">
            ESP32 Microcontroller · Linux Server Daemons · C++ / FreeRTOS
          </div>
        </div>

        {/* 4-Column KPI Strip (Tabular Numerals) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 rounded-[28px] bg-[#161617]/70 backdrop-blur-xl border border-white/[0.08]">
          <div className="space-y-1">
            <span className="text-xs text-[#86868b] font-medium">Hardware-BOM Multi-Tool</span>
            <p className="text-2xl lg:text-3xl font-bold tracking-tight text-[#f5f5f7] font-mono tabular-nums">
              &lt; 25 €
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-[#86868b] font-medium">Integrierte Architektur</span>
            <p className="text-2xl lg:text-3xl font-bold tracking-tight text-[#f5f5f7] font-mono tabular-nums">
              ESP32 + Linux
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-[#86868b] font-medium">Open-Source Philosophie</span>
            <p className="text-2xl lg:text-3xl font-bold tracking-tight text-[#f5f5f7] font-mono tabular-nums">
              100 %
            </p>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-[#86868b] font-medium">Apple-Grade UI Fluidität</span>
            <p className="text-2xl lg:text-3xl font-bold tracking-tight text-[#f5f5f7] font-mono tabular-nums">
              60 FPS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
