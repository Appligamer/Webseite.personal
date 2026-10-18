'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowUpRight, Cpu, Radio, X, Copy, Check } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  headline: string;
  shortDescription: string;
  longDescription: string;
  linkedinPitch: string;
  techStack: string[];
  metricLabel: string;
  metricValue: string;
  image: string;
  gridSpan: string;
  specs: { label: string; value: string }[];
}

const projects: ProjectItem[] = [
  {
    id: 'signalmaster-rf-analyzer',
    title: 'SignalMaster: Handheld RF Spectrum Waterfall & Cyber-Physical Suite',
    category: 'Hardware & IoT',
    headline: 'ESP32 Wireless Pentesting & Sub-GHz Analyse',
    shortDescription:
      'Ein modulares, tragbares Multi-Tool für Sub-GHz, Wi-Fi Paket-Injektion und RFID/NFC — entwickelt als bezahlbare Open-Source-Alternative zu proprietären Pentest-Geräten.',
    longDescription:
      'SignalMaster nutzt einen ESP32-Dual-Core (240 MHz) gekoppelt mit einem CC1101 Sub-GHz Transceiver und SMA-Breitbandantenne. Mit Echtzeit-Wasserfall-Spektrumanalyse auf einem gestochen scharfen Display, integriertem PN532 NFC-Modul und Infrarot-Capture/Replay bietet das System umfassende Analyse-Möglichkeiten bei einer Hardware-BOM von unter 25 Euro.',
    linkedinPitch:
      'Demokratisierung von Cyber-Physical Security: Warum 200€+ für proprietäre Multi-Tools ausgeben, wenn man mit durchdachtem C++/FreeRTOS-Engineering und Standardkomponenten unter 25€ dieselbe Signal-Tiefe erreicht? Unser neuester Open-Source Build vereint Sub-GHz Wasserfall-Analyse, Wi-Fi Packet Injection und Linux-Daemon-Telemetrie in einem robusten Taschenformat.',
    techStack: ['ESP32 Dual-Core', 'CC1101 Sub-GHz', 'FreeRTOS', 'C++', 'Packet Injection', 'OLED UI'],
    metricLabel: 'Hardware-BOM',
    metricValue: '< 25 €',
    image: '/images/esp_rf_analyzer.jpg',
    gridSpan: 'md:col-span-2',
    specs: [
      { label: 'Mikrocontroller', value: 'ESP32-WROOM-32D Dual-Core Xtensa LX6 (240MHz)' },
      { label: 'HF-Transceiver', value: 'CC1101 SPI Transceiver (315/433/868/915 MHz) mit SMA-Antenne' },
      { label: 'Display & UI', value: 'OLED Monochrom Waterfall Spectrum Visualizer & 5-Way Taster' },
      { label: 'Nahfeld & Optik', value: 'PN532 NFC Module + TSOP38238 IR Receiver & High-Power IR LED' },
      { label: 'Server-Daemon', value: 'Headless Linux Daemon via TCP/WebSocket & MQTT' },
      { label: 'Batterie-Management', value: 'LiPo 3.7V 1200mAh mit TP4056 Ladecontroller' },
    ],
  },
  {
    id: 'universal-jarvis-daemon',
    title: 'UNIVERSAL_JARVIS: Autonomous Linux Server Daemon & Multi-Agent Core',
    category: 'Linux & Cloud',
    headline: 'Autonomer KI-Systemassistent auf Ubuntu Server',
    shortDescription:
      'Ein universeller, autarker KI-Systemassistent als nativer systemd-Dienst auf Ubuntu Server mit 10 API-Slots, persistentem Gedächtnis und sicherem Freigabemodell.',
    longDescription:
      'UNIVERSAL_JARVIS läuft als vollwertiger Hintergrunddienst auf dem eigenen Ubuntu Server, überwacht Systemressourcen, verarbeitet Sprache in Echtzeit via Whisper/TTS, verwaltet 10 definierte Skills/Schnittstellen und meldet sich proaktiv bei kritischen Ereignissen. Jede privilegierte Systemaktion unterliegt einem strikten, zweistufigen Freigabemodell.',
    linkedinPitch:
      'Von der Science-Fiction zum robusten Enterprise-Daemon: Wie wir mit UNIVERSAL_JARVIS eine Multi-Agenten-Architektur auf Ubuntu Server etabliert haben. Autonome Hintergrund-Dienste, lokale Sprachmodelle und 10 modulare API-Slots — 100% on-premise und ohne Abhängigkeit von Closed-Source-Clouds.',
    techStack: ['Ubuntu Linux (systemd)', 'Python', 'Multi-Agent Core', '10 API Slots', 'Whisper / TTS', 'Docker'],
    metricLabel: 'API Schnittstellen',
    metricValue: '10 Slots',
    image: '/images/jarvis_server_core.jpg',
    gridSpan: 'md:col-span-1',
    specs: [
      { label: 'Betriebssystem', value: 'Ubuntu Server 24.04 LTS (x86_64 / ARM64)' },
      { label: 'Service-Engine', value: 'systemd Native Daemon mit Supervisor & Watchdog' },
      { label: 'Sicherheitsmodell', value: 'Zweistufige explizite Aktionsfreigabe (Zero Trust)' },
      { label: 'Gedächtnis-Layer', value: 'SQLite Vector Embeddings & Time-Series DB' },
      { label: 'Host CPU-Load', value: '< 1.2% im Leerlauf' },
    ],
  },
  {
    id: 'aegis-dual-mcu-alarm',
    title: 'Aegis: Dual-Microcontroller Sensor & Terminal Security Architecture',
    category: 'Embedded & C++',
    headline: 'Verteiltes Cyber-Physical Alarmsystem',
    shortDescription:
      'Modulares 2-Mikrocontroller-System: Getrennte Sensor- und Terminal-Knoten mit Ultraschall-Abstandsmessung, Finite State Machine, LCD-Display und Web-Anbindung.',
    longDescription:
      'Anstelle eines einzelnen Controllers nutzt Aegis eine verteilte Architektur aus zwei Mikrocontrollern. Der Sensor-Node führt kontinuierliche Ultraschallmessungen (HC-SR04) und Schwellenwert-Analysen durch, während der Terminal-Node die Zustandsmaschine (AUS / ENTSCHÄRFT / SCHARF), LCD-Ausgabe und Benutzer-Interaktion steuert — verbunden über einen bidirektionalen seriellen Kommunikationsbus.',
    linkedinPitch:
      'Warum modulare Systemtrennung in der Embedded-Sicherheit den Unterschied macht: Mit Aegis haben wir ein verteiltes 2-Mikrocontroller-System gebaut, das Ultraschall-Präzisionsmessung, synchrone Bus-Kommunikation und Web-Alerting in einer störungsresistenten State-Machine bündelt.',
    techStack: ['Arduino / C++', 'Dual-MCU Serial Bus', 'HC-SR04 Ultrasonic', 'I2C LCD', 'Finite State Machine'],
    metricLabel: 'Messbereich',
    metricValue: '0–200 cm',
    image: '/images/dual_mcu_terminal.jpg',
    gridSpan: 'md:col-span-1',
    specs: [
      { label: 'Topologie', value: '2 dedizierte Mikrocontroller (Sensor Node & Terminal Node)' },
      { label: 'Sensorik', value: 'HC-SR04 Ultraschall-Sensor mit kalibrierter Alarmentfernung' },
      { label: 'Benutzer-Interface', value: 'I2C LCD 16x2 Display, RGB-Status-LEDs & Taster-Array' },
      { label: 'Bus-Latenz', value: '< 5 ms über asynchronen seriellen Bus' },
    ],
  },
  {
    id: 'nexus-casino-slot-engine',
    title: 'Nexus: High-Throughput Algorithmic Simulation & Slot Engine',
    category: 'Web & UI',
    headline: 'Echtzeit-Stochastik & deterministisches RNG',
    shortDescription:
      'Eine hochperformante, interaktive Slotmaschinen-Engine in Python mit dynamischer Wahrscheinlichkeitsberechnung, State Machine und digitaler Event-Steuerung.',
    longDescription:
      'Nexus implementiert eine mathematisch abgesicherte, faire Zufalls-Engine in Python. Das System berechnet in Mikrosekunden Walzen-Kombinationen, animiert Spielabläufe, verwaltet Credits und Multiplikatoren und bietet ein immersives Spielerlebnis mit null Latenz.',
    linkedinPitch:
      'Algorithmen in der Praxis: Wie eine Python-basierte Slotmaschinen-Engine mit deterministischer Wahrscheinlichkeitsverteilung und dynamischem State Management zum Publikums-Highlight eines Groß-Events wurde. Mathematik, Game-Design und 60fps-State-Flow kombiniert.',
    techStack: ['Python 3', 'State Engine', 'Mathematical RNG', 'Event Automation', 'Audio/Visual Pipeline'],
    metricLabel: 'RNG Genauigkeit',
    metricValue: '100% Fair',
    image: '/images/algorithmic_casino.jpg',
    gridSpan: 'md:col-span-2',
    specs: [
      { label: 'Programmiersprache', value: 'Python 3 mit objektorientierter Komponentenarchitektur' },
      { label: 'Zufallsmodell', value: 'Gewichtete stochastische Zufallsverteilung mit Auszahlungstabelle' },
      { label: 'Zustandsverwaltung', value: 'Multi-Threaded Event Loop mit Transaktions-Sicherheit' },
      { label: 'Berechnungszeit', value: '< 0.8 ms je Dreh-Simulation' },
    ],
  },
  {
    id: 'apple-web-platform',
    title: 'Aura: High-Performance Web & Native SwiftUI Architecture',
    category: 'Web Engineering',
    headline: 'Kompromisslose Performance nach Apple-Standards',
    shortDescription:
      'Ein ultra-performantes Web- und App-Designsystem mit maßgeschneiderten Bento-Grids, dynamischem Kontrast, Liquid Glass Effekten und 100/100 Lighthouse-Score.',
    longDescription:
      'Digitale Repräsentanz für technologische Spitzenleistungen verlangt dieselbe Präzision wie die darunterliegende Systemarchitektur. Entwickelt mit React, Next.js, SwiftUI und Framer Motion für 60–120fps-Fluidität und minimale Ladezeiten.',
    linkedinPitch:
      'Warum moderne Webanwendungen sich wie native Software anfühlen sollten: Durch die Reduktion von unnötigem Framework-Ballast und die konsequente Orientierung an den visuellen Prinzipien von Apple verbinden wir 60fps-Animationen mit einem makellosen Lighthouse 100 Score.',
    techStack: ['React 19', 'Next.js App Router', 'SwiftUI Universal', 'Tailwind CSS', 'Framer Motion'],
    metricLabel: 'Lighthouse Score',
    metricValue: '100 / 100',
    image: '/images/hero_hardware_lab.jpg',
    gridSpan: 'md:col-span-1',
    specs: [
      { label: 'Web-Stack', value: 'Next.js App Router + React 19 + TypeScript Strictly Typed' },
      { label: 'Native Stack', value: 'Pure SwiftUI Universal für iOS, iPadOS und macOS' },
      { label: 'Design-Standards', value: 'Apple Squircle Continuous Geometry & Glassmorphism' },
      { label: 'Latenz-Budget', value: '< 0.4s First Contentful Paint' },
    ],
  },
];

const easeApple = [0.16, 1, 0.3, 1] as const;

// Motion Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: easeApple,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeApple,
    },
  },
};

export default function BentoGrid() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'linkedin' | 'specs'>('overview');
  const [copied, setCopied] = useState(false);

  const handleCopyPitch = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#000000] scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Scroll-triggered Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#2997ff] mb-3">
            <Radio className="w-4 h-4" />
            <span>Ausgewählte Projekte & Prototypen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-4">
            Hardware-Innovation & Systemarchitektur
          </h2>
          <p className="text-base md:text-lg text-[#86868b] leading-relaxed">
            Jedes Projekt verkörpert die bewusste Verbindung aus effizientem Silizium, robuster Linux-Infrastruktur und elegantem Software-Design.
          </p>
        </motion.div>

        {/* Scroll-triggered Bento Grid Container with Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -4,
                scale: 1.012,
                transition: { duration: 0.25, ease: easeApple },
              }}
              whileTap={{ scale: 0.99 }}
              onClick={() => {
                setActiveProject(project);
                setActiveTab('overview');
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] text-left cursor-pointer
                bg-[#161617] border border-white/[0.08]
                hover:border-white/20
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.75)]
                p-7 md:p-8 ${project.gridSpan}`}
            >
              {/* Header: Category & Arrow */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-[#86868b]">
                    <Cpu className="w-3.5 h-3.5 text-[#2997ff]" />
                    <span className="uppercase tracking-wider text-[11px] font-semibold text-[#2997ff]">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate max-w-[200px]">{project.headline}</span>
                  </div>

                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.05] text-[#86868b] group-hover:text-white group-hover:bg-[#2997ff]/20 transition-all duration-200 shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#f5f5f7] mb-3 leading-snug group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-[#86868b] mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Media Slot with Image & Scrim */}
              <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-[#1c1c1e] border border-white/[0.05] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161617]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating Metric Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/[0.08]">
                  <span className="text-xs font-medium text-[#86868b]">{project.metricLabel}</span>
                  <span className="text-xs font-semibold text-[#f5f5f7] font-mono tabular-nums">
                    {project.metricValue}
                  </span>
                </div>
              </div>

              {/* Footer: Zero-Pill Unboxed Tech Stack */}
              <div className="pt-2 border-t border-white/[0.05]">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#86868b] font-medium">
                  {project.techStack.map((tech, index) => (
                    <React.Fragment key={tech}>
                      <span className="hover:text-[#f5f5f7] transition-colors">{tech}</span>
                      {index < project.techStack.length - 1 && (
                        <span aria-hidden="true" className="text-white/20">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Project Modal with AnimatePresence */}
      <AnimatePresence>
        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#161617] border border-white/[0.1] shadow-[0_30px_90px_rgba(0,0,0,0.9)] z-10 flex flex-col"
            >
              {/* Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 border-b border-white/[0.08] bg-[#161617]/90 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#2997ff]">
                    {activeProject.category}
                  </span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span className="text-xs text-[#86868b]">{activeProject.headline}</span>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  aria-label="Modal schließen"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.1] text-[#86868b] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#f5f5f7] mb-3">
                    {activeProject.title}
                  </h2>
                  <p className="text-base text-[#86868b] leading-relaxed">
                    {activeProject.shortDescription}
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-white/[0.05] w-fit">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${
                      activeTab === 'overview'
                        ? 'bg-white/15 text-white shadow-sm'
                        : 'text-[#86868b] hover:text-white'
                    }`}
                  >
                    Überblick & Architektur
                  </button>
                  <button
                    onClick={() => setActiveTab('linkedin')}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${
                      activeTab === 'linkedin'
                        ? 'bg-white/15 text-white shadow-sm'
                        : 'text-[#86868b] hover:text-white'
                    }`}
                  >
                    LinkedIn Insight
                  </button>
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`px-4 py-2 text-xs md:text-sm font-medium rounded-lg transition-all ${
                      activeTab === 'specs'
                        ? 'bg-white/15 text-white shadow-sm'
                        : 'text-[#86868b] hover:text-white'
                    }`}
                  >
                    Hardware & Tech Specs
                  </button>
                </div>

                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#1c1c1e] border border-white/[0.08]">
                      <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-base text-[#d1d1d6] leading-relaxed">
                      {activeProject.longDescription}
                    </p>
                  </div>
                )}

                {activeTab === 'linkedin' && (
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#2997ff]">
                        LinkedIn Executive Pitch
                      </span>
                      <button
                        onClick={() => handleCopyPitch(activeProject.linkedinPitch)}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors"
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
                      </button>
                    </div>
                    <div className="p-4 rounded-xl bg-black/50 border border-white/[0.05] text-sm md:text-base leading-relaxed text-[#f5f5f7]">
                      <p className="whitespace-pre-line">{activeProject.linkedinPitch}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'specs' && (
                  <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
                    <table className="w-full text-left text-sm">
                      <tbody className="divide-y divide-white/[0.05]">
                        {activeProject.specs.map((spec, i) => (
                          <tr key={i} className="hover:bg-white/[0.02]">
                            <td className="py-3.5 px-5 font-medium text-[#86868b] w-1/3">
                              {spec.label}
                            </td>
                            <td className="py-3.5 px-5 text-[#f5f5f7] font-mono text-xs md:text-sm">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-[#161617]/95 backdrop-blur-xl">
                <span className="text-xs text-[#86868b]">Jacob Glathe & Team · Open Source</span>
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs md:text-sm font-medium rounded-xl text-white bg-white/10 hover:bg-white/15 transition-colors"
                >
                  Schließen
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
