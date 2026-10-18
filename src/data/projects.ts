import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'flipper-zero-alternative',
    title: {
      de: 'SignalMaster: Open-Source Multi-Tool & Cyber-Physical Analyzer',
      en: 'SignalMaster: Open-Source Multi-Tool & Cyber-Physical Analyzer',
    },
    headline: {
      de: 'Zugängliche Hardware-Sicherheitsforschung auf ESP32-Basis',
      en: 'Accessible Hardware Security Research on ESP32 Architecture',
    },
    shortDescription: {
      de: 'Ein modulares, kosteneffizientes Multi-Tool als Open-Source Alternative zu kommerziellen Analysegeräten. Entwickelt aus frei verfügbaren Standardkomponenten mit nativer Linux-Server-Anbindung.',
      en: 'A modular, cost-efficient multi-tool engineered as an open-source alternative to commercial analysis hardware. Built using off-the-shelf standard components with native Linux server integration.',
    },
    longDescription: {
      de: 'Moderne Sicherheitsanalyse und Signalerkennung im Sub-GHz-, RFID- und Infrarotbereich erfordern oft teure proprietäre Hardware. Dieses Projekt beweist, dass durch intelligentes Hardware-Software-Co-Design auf Basis des ESP32 Dual-Core-Mikrocontrollers ein vollwertiges, offenes Analysewerkzeug realisiert werden kann. Das System verbindet Echtzeit-Signalverarbeitung auf dem Chip mit einer sicheren Linux-Server-Pipeline für Spektralanalysen und Firmware-Orchestrierung.',
      en: 'Modern security research and signal verification across sub-GHz, RFID, and infrared protocols historically relied on expensive proprietary devices. This project demonstrates that deliberate hardware-software co-design leveraging the ESP32 dual-core microcontroller delivers an uncompromised, open-source multi-tool. The architecture pairs real-time on-chip signal processing with a hardened Linux server backend for telemetry streaming and automated analysis.',
    },
    linkedinPitch: {
      de: 'Demokratisierung von Hardware-Security & Embedded Engineering: Warum 200€+ für proprietäre Multi-Tools ausgeben, wenn man mit gezieltem C++/FreeRTOS-Engineering und Standardkomponenten unter 25€ Materialkosten dieselbe Analyse-Tiefe erreicht? Unser neuester Open-Source-Build vereint Sub-GHz-Transceiver, NFC/RFID, Infrarot-Capture und eine Linux-Daemon-Telemetrie in einem robusten, handlichen Formfaktor.',
      en: 'Democratizing cyber-physical security research: Why rely on prohibitive proprietary devices when thoughtful C++/FreeRTOS engineering and accessible off-the-shelf components can deliver comprehensive signal analysis under $25 BOM? Our latest open-source build bridges ESP32 dual-core performance, sub-GHz transceiver modules, NFC/RFID, and a Linux daemon pipeline into a compact, pocketable form factor.',
    },
    category: 'hardware',
    techStack: ['ESP32', 'FreeRTOS', 'C++', 'Sub-GHz (CC1101)', 'Linux Server', 'OLED UI', 'Open Source'],
    metrics: [
      {
        label: { de: 'BOM Hardwarekosten', en: 'Hardware BOM Cost' },
        value: '< 25 €',
      },
      {
        label: { de: 'Frequenzbandbreite', en: 'Operating Bands' },
        value: '300–928 MHz',
      },
      {
        label: { de: 'Reaktionslatenz', en: 'Loop Latency' },
        value: '< 2.4 ms',
      },
      {
        label: { de: 'Architektur', en: 'Core Architecture' },
        value: 'Dual-Core 240MHz',
      },
    ],
    specs: [
      { key: { de: 'Mikrocontroller', en: 'Microcontroller' }, value: 'ESP32-WROOM-32D Dual-Core Xtensa LX6' },
      { key: { de: 'HF-Transceiver', en: 'RF Transceiver' }, value: 'CC1101 SPI Transceiver (315/433/868/915 MHz)' },
      { key: { de: 'Display & Input', en: 'Display & Input' }, value: '1.3" I2C OLED (128x64) + 5-Way Tactical Navigation' },
      { key: { de: 'Nahfeld & Optik', en: 'NFC & Optical' }, value: 'PN532 NFC Module + TSOP38238 IR Receiver & High-Power IR LED' },
      { key: { de: 'Server-Integration', en: 'Server Daemon' }, value: 'Headless Linux Daemon via TCP/WebSocket & MQTT' },
      { key: { de: 'Energieversorgung', en: 'Power Subsystem' }, value: 'LiPo 3.7V 1200mAh mit integriertem TP4056 Ladecontroller' },
    ],
    image: '/images/project_flipper_alt.jpg',
    imageAlt: 'Open Source Multi-Tool Hardware Prototype',
    gridSpan: 'md:col-span-2',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Open-Source Repository auf GitHub',
      en: 'Open-Source Repository on GitHub',
    },
    featured: true,
  },
  {
    id: 'esp32-linux-edge-daemon',
    title: {
      de: 'EdgeMesh: ESP32 Distributed Fleet & Linux Daemon Hub',
      en: 'EdgeMesh: ESP32 Distributed Fleet & Linux Daemon Hub',
    },
    headline: {
      de: 'Orchestrierung verteilter Edge-Knoten auf Debian & Ubuntu',
      en: 'Distributed Edge Microcontroller Fleet Orchestration on Linux',
    },
    shortDescription: {
      de: 'Ein leichtgewichtiger Linux-Server-Dienst zur simultanen Verwaltung, Fernwartung und kontinuierlichen Telemetrieerfassung verteilter ESP32-Sensorknoten.',
      en: 'A lightweight Linux server service for simultaneous management, remote OTA updates, and real-time telemetry streaming of distributed ESP32 microcontrollers.',
    },
    longDescription: {
      de: 'IoT-Installationen scheitern häufig an instabilen Synchronisationsmechanismen zwischen Feldgeräten und Rechenzentren. EdgeMesh löst dieses Problem durch einen in modernem C++ und Python implementierten Linux-Daemon, der verschlüsselte WebSocket-Verbindungen zu ESP32-Controllern aufrechterhält, Heartbeats überwacht und differenzielle Over-The-Air (OTA) Updates automatisiert ausrollt.',
      en: 'IoT deployments often struggle with reliable bidirectional synchronization between edge hardware and backend hosts. EdgeMesh solves this through a resilient Linux system daemon that maintains persistent encrypted WebSocket sockets to ESP32 nodes, monitors health metrics, and orchestrates differential over-the-air (OTA) firmware deployments.',
    },
    linkedinPitch: {
      de: 'Microcontroller treffen Enterprise-Linux: Mit EdgeMesh haben wir eine robuste Middleware geschaffen, die bare-metal ESP32-Flotten nahtlos in Linux-Serverinfrastrukturen einbettet. Schnelle Bereitstellung, zero-downtime OTA und millisekundengenaue Telemetrie — gebaut für Skalierbarkeit ohne teure Cloud-Vendor-Locks.',
      en: 'Bare-metal microcontrollers meet enterprise Linux: EdgeMesh bridges distributed ESP32 hardware directly into hardened Linux server infrastructure. Fast provisioning, zero-downtime OTA rollouts, and sub-millisecond telemetry capture — engineered for autonomy without cloud vendor lock-in.',
    },
    category: 'embedded',
    techStack: ['Linux (systemd)', 'C++', 'Python', 'ESP32', 'WebSockets', 'SQLite / Redis', 'REST API'],
    metrics: [
      {
        label: { de: 'Gleichzeitige Nodes', en: 'Concurrent Nodes' },
        value: '250+ je Daemon',
      },
      {
        label: { de: 'Server CPU-Load', en: 'Host CPU Overhead' },
        value: '< 1.8%',
      },
      {
        label: { de: 'OTA Updatezeit', en: 'OTA Transfer Time' },
        value: '14.2 s',
      },
      {
        label: { de: 'Verbindungsstabilität', en: 'Link Reliability' },
        value: '99.98%',
      },
    ],
    specs: [
      { key: { de: 'Host-Plattform', en: 'Host System' }, value: 'Linux (Debian / Ubuntu / Alpine x86_64 & ARM64)' },
      { key: { de: 'Protokoll-Stack', en: 'Protocol Suite' }, value: 'WSS (TLS 1.3), Binary Protobuf & JSON-RPC' },
      { key: { de: 'Service Management', en: 'Service Engine' }, value: 'Native systemd Service mit automatischem Watchdog' },
      { key: { de: 'Speicherverwaltung', en: 'Persistence Layer' }, value: 'Embedded SQLite Time-Series Buffer' },
    ],
    image: '/images/project_linux_edge_node.jpg',
    imageAlt: 'Linux Server Edge Node Hardware',
    gridSpan: 'md:col-span-1',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Repository einsehen',
      en: 'View Repository',
    },
    featured: true,
  },
  {
    id: 'apple-style-portfolio-platform',
    title: {
      de: 'Aura: High-Performance Web & Design System',
      en: 'Aura: High-Performance Web & Design System',
    },
    headline: {
      de: 'Kompromisslose Performance & Ästhetik nach Apple-Standards',
      en: 'Uncompromised Performance & Polish Inspired by Apple.com',
    },
    shortDescription: {
      de: 'Ein extrem performantes Web-Designsystem mit maßgeschneiderten Bento-Grids, dynamischem Licht/Dunkel-Kontrast, Liquid Glass Effekten und 100/100 Lighthouse-Scores.',
      en: 'An ultra-responsive web application and design system featuring custom Bento grid architecture, dynamic light/dark contrast, liquid glass blur, and 100/100 Lighthouse metrics.',
    },
    longDescription: {
      de: 'Die digitale Repräsentanz für technologische Spitzenleistungen verlangt dieselbe Präzision wie die darunterliegende Systemarchitektur. Entwickelt mit modernem React, Tailwind CSS und Framer Motion, setzt diese Plattform neue Maßstäbe für Ladezeiten, Typografie-Harmonie und responsive Fluidität.',
      en: 'Digital presence for elite engineering must exhibit the same uncompromising rigor as the underlying system architecture. Built with modern React, Tailwind CSS, and Framer Motion, this architecture sets a benchmark for instantaneous paint times, typographic balance, and fluid interactions.',
    },
    linkedinPitch: {
      de: 'Warum moderne Webanwendungen sich wie native Software anfühlen sollten: Durch die Reduktion von unnötigem Framework-Ballast und die konsequente Orientierung an den visuellen Prinzipien von Apple verbinden wir 60fps-Animationen mit einem makellosen Lighthouse 100 Score.',
      en: 'Why modern web applications should feel as intentional as native hardware: By stripping away superfluous dependencies and adopting Apple’s aesthetic restraint, we achieve 60fps interaction smoothness alongside a perfect Lighthouse 100 benchmark.',
    },
    category: 'web',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Bento Grid'],
    metrics: [
      {
        label: { de: 'Lighthouse Score', en: 'Lighthouse Performance' },
        value: '100 / 100',
      },
      {
        label: { de: 'First Contentful Paint', en: 'First Contentful Paint' },
        value: '0.4 s',
      },
      {
        label: { de: 'Render-Framerate', en: 'Animation Budget' },
        value: '60 FPS',
      },
    ],
    specs: [
      { key: { de: 'Frontend Stack', en: 'Frontend Engine' }, value: 'React 19 + TypeScript Strictly Typed' },
      { key: { de: 'Styling Methodik', en: 'Styling Paradigm' }, value: 'Tailwind CSS v4 + Liquid Glass Filter' },
      { key: { de: 'Internationalisierung', en: 'Localization' }, value: 'Native Type-Safe DE/EN Engine' },
    ],
    image: '/images/hero_hardware_lab.jpg',
    imageAlt: 'High-Performance Web Design System',
    gridSpan: 'md:col-span-1',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Quellcode auf GitHub',
      en: 'Source on GitHub',
    },
    featured: true,
  },
  {
    id: 'autonomous-ci-cd-orchestrator',
    title: {
      de: 'Synapse: Automated Embedded CI/CD & Build Pipeline',
      en: 'Synapse: Automated Embedded CI/CD & Build Pipeline',
    },
    headline: {
      de: 'Automatisierte Tests & Flash-Pipelines für Mikrocontroller-Hardware',
      en: 'Automated Hardware-in-the-Loop Build & Firmware Verification',
    },
    shortDescription: {
      de: 'Kontinuierliche Kompilierung, statische Code-Analyse und Hardware-in-the-Loop (HIL) Tests für ESP32 und ARM Cortex-M Architekturen.',
      en: 'Continuous firmware compilation, static code analysis, and automated hardware-in-the-loop (HIL) testing for ESP32 and ARM Cortex-M platforms.',
    },
    longDescription: {
      de: 'Fehler in eingebetteter Software vor Ort zu beheben ist zeit- und kostenintensiv. Synapse schließt die Lücke zwischen modernem DevOps und physischer Hardware durch containerisierte ESP-IDF Build-Umgebungen und automatisierte Testläufe auf realen Testständen.',
      en: 'Remediating embedded firmware bugs in the field is costly and slow. Synapse closes the divide between modern DevOps and physical target boards through containerized ESP-IDF toolchains and automated testing runs across physical test benches.',
    },
    linkedinPitch: {
      de: 'DevOps trifft Bare-Metal: Wie wir den Entwicklungszyklus für Embedded Systeme um 70% beschleunigen, indem wir Software-Praktiken wie Continuous Integration und HIL-Testing auf physische ESP32-Flotten übertragen.',
      en: 'DevOps meets bare-metal engineering: Accelerating embedded release cycles by 70% through automated hardware-in-the-loop verification and containerized cross-compilation pipelines.',
    },
    category: 'cloud',
    techStack: ['Linux', 'Docker', 'ESP-IDF', 'Bash / Python', 'GitHub Actions', 'CMake'],
    metrics: [
      {
        label: { de: 'Build-Zeit Einsparung', en: 'Build Time Reduction' },
        value: '- 68%',
      },
      {
        label: { de: 'Automatische Tests', en: 'Test Coverage' },
        value: '94.2%',
      },
    ],
    specs: [
      { key: { de: 'Toolchains', en: 'Compilers' }, value: 'ESP-IDF v5.2, Xtensa GCC, Clang Static Analyzer' },
      { key: { de: 'Test-Architektur', en: 'Verification' }, value: 'Automated Unity Test Framework on Real Silicon' },
    ],
    image: '/images/project_linux_edge_node.jpg',
    imageAlt: 'Automated CI/CD Pipeline for Embedded Hardware',
    gridSpan: 'md:col-span-2',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Repository einsehen',
      en: 'View Repository',
    },
    featured: false,
  },
];
