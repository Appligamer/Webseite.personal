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
    id: 'flipper-alternative',
    title: 'SignalMaster: Open-Source Multi-Tool & Cyber-Physical Analyzer',
    category: 'Hardware & IoT',
    headline: 'Zugängliche Sicherheitsforschung auf ESP32-Basis',
    shortDescription:
      'Ein modulares, kosteneffizientes Multi-Tool als Open-Source Alternative zu proprietären Analysegeräten. Entwickelt aus frei verfügbaren Standardkomponenten mit nativer Linux-Server-Anbindung.',
    longDescription:
      'Moderne Sicherheitsanalyse und Signalerkennung im Sub-GHz-, RFID- und Infrarotbereich erfordern oft teure proprietäre Hardware. SignalMaster beweist, dass durch intelligentes Hardware-Software-Co-Design auf Basis des ESP32 Dual-Core-Mikrocontrollers ein vollwertiges, offenes Analysewerkzeug realisiert werden kann. Das System verbindet Echtzeit-Signalverarbeitung auf dem Chip mit einer sicheren Linux-Server-Pipeline für Spektralanalysen.',
    linkedinPitch:
      'Demokratisierung von Hardware-Security & Embedded Engineering: Warum 200€+ für proprietäre Multi-Tools ausgeben, wenn man mit gezieltem C++/FreeRTOS-Engineering und Standardkomponenten unter 25€ Materialkosten dieselbe Analyse-Tiefe erreicht? Unser neuester Open-Source-Build vereint Sub-GHz-Transceiver, NFC/RFID, Infrarot-Capture und eine Linux-Daemon-Telemetrie in einem robusten, handlichen Formfaktor.',
    techStack: ['ESP32 Dual-Core', 'FreeRTOS', 'C++', 'Sub-GHz (CC1101)', 'Linux Server', 'OLED UI'],
    metricLabel: 'Hardware-BOM',
    metricValue: '< 25 €',
    image: '/images/project_flipper_alt.jpg',
    gridSpan: 'md:col-span-2',
    specs: [
      { label: 'Mikrocontroller', value: 'ESP32-WROOM-32D Dual-Core Xtensa LX6 (240MHz)' },
      { label: 'HF-Transceiver', value: 'CC1101 SPI Transceiver (315/433/868/915 MHz)' },
      { label: 'Nahfeld & Optik', value: 'PN532 NFC Module + TSOP38238 IR Receiver & IR LED' },
      { label: 'Server-Daemon', value: 'Headless Linux Service via TCP/WebSocket' },
      { label: 'Batterie-Management', value: 'LiPo 3.7V 1200mAh mit TP4056 Ladeelektronik' },
    ],
  },
  {
    id: 'linux-edge-daemon',
    title: 'EdgeMesh: ESP32 Distributed Fleet & Linux Daemon Hub',
    category: 'Linux & Embedded',
    headline: 'Orchestrierung verteilter Edge-Knoten auf Debian & Ubuntu',
    shortDescription:
      'Ein leichtgewichtiger Linux-Server-Dienst zur simultanen Verwaltung, Fernwartung und kontinuierlichen Telemetrieerfassung verteilter ESP32-Sensorknoten.',
    longDescription:
      'EdgeMesh löst Herausforderungen verteilter IoT-Infrastrukturen durch einen nativen Linux-Daemon in C++ und Python. Persistente, TLS-verschlüsselte WebSockets garantieren ausfallsichere Messdatenströme und automatisierte Over-The-Air (OTA) Firmware-Aktualisierungen ohne Cloud-Vendor-Lock-in.',
    linkedinPitch:
      'Microcontroller treffen Enterprise-Linux: Mit EdgeMesh haben wir eine robuste Middleware geschaffen, die bare-metal ESP32-Flotten nahtlos in Linux-Serverinfrastrukturen einbettet. Schnelle Bereitstellung, zero-downtime OTA und millisekundengenaue Telemetrie — gebaut für Skalierbarkeit.',
    techStack: ['Linux (systemd)', 'C++', 'Python', 'ESP32', 'WebSockets', 'SQLite'],
    metricLabel: 'Nodes je Daemon',
    metricValue: '250+ aktiv',
    image: '/images/project_linux_edge_node.jpg',
    gridSpan: 'md:col-span-1',
    specs: [
      { label: 'Host-Plattform', value: 'Linux (Debian / Ubuntu / Alpine x86_64 & ARM64)' },
      { label: 'Protokoll-Suite', value: 'WSS (TLS 1.3), Binary Protobuf & JSON-RPC' },
      { label: 'Service-Engine', value: 'Nativer systemd Service mit Watchdog' },
      { label: 'Host CPU-Load', value: '< 1.8% im Dauerbetrieb' },
    ],
  },
  {
    id: 'apple-web-platform',
    title: 'Aura: High-Performance Web Architecture & Design System',
    category: 'Web Engineering',
    headline: 'Kompromisslose Performance nach Apple-Standards',
    shortDescription:
      'Ein ultra-performantes Web-Designsystem mit maßgeschneiderten Bento-Grids, dynamischem Kontrast, Liquid Glass Effekten und 100/100 Lighthouse-Score.',
    longDescription:
      'Digitale Repräsentanz für technologische Spitzenleistungen verlangt dieselbe Präzision wie die darunterliegende Systemarchitektur. Entwickelt mit React, Tailwind CSS und Framer Motion für 60fps-Fluidität und minimale Ladezeiten.',
    linkedinPitch:
      'Warum moderne Webanwendungen sich wie native Software anfühlen sollten: Durch die Reduktion von unnötigem Framework-Ballast und die konsequente Orientierung an den visuellen Prinzipien von Apple verbinden wir 60fps-Animationen mit einem makellosen Lighthouse 100 Score.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Bento Grid'],
    metricLabel: 'Lighthouse Score',
    metricValue: '100 / 100',
    image: '/images/hero_hardware_lab.jpg',
    gridSpan: 'md:col-span-1',
    specs: [
      { label: 'Frontend-Engine', value: 'React + TypeScript Strictly Typed' },
      { label: 'Design-Standards', value: 'Apple Squircle Radius & Glassmorphism' },
      { label: 'Latenz-Budget', value: '< 0.4s First Contentful Paint' },
    ],
  },
  {
    id: 'synapse-ci-cd',
    title: 'Synapse: Automated Hardware-in-the-Loop Build Pipeline',
    category: 'DevOps & Tooling',
    headline: 'Automatisierte Tests & Flash-Pipelines für Mikrocontroller',
    shortDescription:
      'Kontinuierliche Kompilierung, statische Code-Analyse und Hardware-in-the-Loop (HIL) Tests für ESP32 und ARM Cortex-M Architekturen.',
    longDescription:
      'Synapse schließt die Lücke zwischen modernem DevOps und physischer Embedded-Hardware durch containerisierte ESP-IDF Build-Umgebungen und automatisierte Testläufe auf physischen Testständen.',
    linkedinPitch:
      'DevOps trifft Bare-Metal: Wie wir den Entwicklungszyklus für Embedded Systeme um 70% beschleunigen, indem wir Software-Praktiken wie Continuous Integration und HIL-Testing auf physische ESP32-Flotten übertragen.',
    techStack: ['Linux', 'Docker', 'ESP-IDF', 'Bash / Python', 'GitHub Actions', 'CMake'],
    metricLabel: 'Build-Zeitersparnis',
    metricValue: '- 68 %',
    image: '/images/project_linux_edge_node.jpg',
    gridSpan: 'md:col-span-2',
    specs: [
      { label: 'Toolchain', value: 'ESP-IDF v5.2, Xtensa GCC, Clang Static Analyzer' },
      { label: 'Test-Framework', value: 'Unity Test Suite auf physischem Silizium' },
      { label: 'Automatisierung', value: 'Multi-Runner Docker Orchestration' },
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
