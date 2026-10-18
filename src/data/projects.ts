import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'flipper-zero-alternative',
    title: {
      de: 'SignalMaster: Handheld RF Spectrum Waterfall & Cyber-Physical Analyzer',
      en: 'SignalMaster: Handheld RF Spectrum Waterfall & Cyber-Physical Analyzer',
    },
    headline: {
      de: 'Hardware-Sicherheitsforschung & Netzwerk-Testing auf ESP32-Basis',
      en: 'ESP32-Powered Cyber-Physical RF & Wireless Network Penetration Testing Suite',
    },
    shortDescription: {
      de: 'Ein modulares, tragbares Analyse- und Multi-Tool für Sub-GHz, Wi-Fi Paket-Injektion und RFID/NFC — entwickelt als bezahlbare Open-Source-Alternative zu proprietären Pentest-Geräten.',
      en: 'A modular, handheld signal analysis multi-tool for Sub-GHz, Wi-Fi packet injection, and RFID/NFC — engineered as an accessible open-source alternative to proprietary pentesting hardware.',
    },
    longDescription: {
      de: 'Entstanden aus praktischer Forschungsarbeit an drahtlosen Protokollen: SignalMaster nutzt einen ESP32-Dual-Core (240 MHz) gekoppelt mit einem CC1101 Sub-GHz Transceiver und SMA-Breitbandantenne. Mit Echtzeit-Wasserfall-Spektrumanalyse auf einem gestochen scharfen Monochrom-Display, integriertem PN532 NFC-Modul und Infrarot-Capture/Replay bietet das System umfassende Analyse-Möglichkeiten bei einer Hardware-BOM von unter 25 Euro.',
      en: 'Originating from deep hands-on research in wireless protocols: SignalMaster combines an ESP32 dual-core SoC with a high-gain CC1101 Sub-GHz transceiver and SMA broadband antenna. Featuring real-time waterfall RF spectrum visualizers on an ultra-crisp display, onboard PN532 NFC reader, and IR capture/replay, the system delivers comprehensive signal verification at an accessible sub-$25 BOM.',
    },
    linkedinPitch: {
      de: 'Demokratisierung von Cyber-Physical Security: Warum 200€+ für proprietäre Multi-Tools ausgeben, wenn man mit durchdachtem C++/FreeRTOS-Engineering und Standardkomponenten unter 25€ dieselbe Signal-Tiefe erreicht? Unser neuester Open-Source Build vereint Sub-GHz Wasserfall-Analyse, Wi-Fi Packet Injection und Linux-Daemon-Telemetrie in einem robusten Taschenformat.',
      en: 'Democratizing cyber-physical security research: Why rely on prohibitive proprietary devices when thoughtful C++/FreeRTOS engineering and accessible off-the-shelf components deliver comprehensive spectrum analysis under $25 BOM? Our latest open-source build bridges Sub-GHz RF waterfall scanning, Wi-Fi packet analysis, and a Linux daemon pipeline into a pocketable form factor.',
    },
    category: 'hardware',
    techStack: ['ESP32 Dual-Core', 'CC1101 Sub-GHz', 'FreeRTOS', 'C++', 'Packet Injection', 'OLED UI', 'Linux Server'],
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
      { key: { de: 'Mikrocontroller', en: 'Microcontroller' }, value: 'ESP32-WROOM-32D Dual-Core Xtensa LX6 (240MHz)' },
      { key: { de: 'HF-Transceiver', en: 'RF Transceiver' }, value: 'CC1101 SPI Transceiver (315/433/868/915 MHz) mit SMA-Antenne' },
      { key: { de: 'Display & UI', en: 'Display & UI' }, value: 'OLED Monochrom Waterfall Spectrum Visualizer & 5-Way Taster' },
      { key: { de: 'Nahfeld & Optik', en: 'NFC & Optical' }, value: 'PN532 NFC Module + TSOP38238 IR Receiver & High-Power IR LED' },
      { key: { de: 'Server-Integration', en: 'Server Daemon' }, value: 'Headless Linux Daemon via TCP/WebSocket & MQTT' },
      { key: { de: 'Energieversorgung', en: 'Power Subsystem' }, value: 'LiPo 3.7V 1200mAh mit integriertem TP4056 Ladecontroller' },
    ],
    image: '/images/esp_rf_analyzer.jpg',
    imageAlt: 'SignalMaster Handheld RF Spectrum Waterfall & Cyber-Physical Analyzer',
    gridSpan: 'md:col-span-2',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Open-Source Repository auf GitHub',
      en: 'Open-Source Repository on GitHub',
    },
    featured: true,
  },
  {
    id: 'universal-jarvis-daemon',
    title: {
      de: 'UNIVERSAL_JARVIS: Autonomous Linux Server Daemon & Multi-Agent Core',
      en: 'UNIVERSAL_JARVIS: Autonomous Linux Server Daemon & Multi-Agent Core',
    },
    headline: {
      de: 'Autonomer, lokal betriebener KI-Systemassistent auf Ubuntu Server',
      en: 'Autonomous, Locally Hosted Multi-Agent AI System Daemon on Ubuntu Server',
    },
    shortDescription: {
      de: 'Ein universeller, autarker KI-Systemassistent als nativer systemd-Dienst auf Ubuntu Server mit 10 API-Slots, persistentem Gedächtnis und sicherem Freigabemodell.',
      en: 'A universal, autonomous AI system assistant operating as a native systemd daemon on Ubuntu Server featuring 10 API slots, persistent memory, and explicit permission verification.',
    },
    longDescription: {
      de: 'Vorbild ist der legendäre Systemassistent in seiner technisch realistischen, umsetzbaren Form. UNIVERSAL_JARVIS läuft als vollwertiger Hintergrunddienst auf dem eigenen Ubuntu Server, überwacht Systemressourcen, verarbeitet Sprache in Echtzeit via Whisper/TTS, verwaltet definierte Skills und Schnittstellen und meldet sich proaktiv bei kritischen Ereignissen. Jede privilegierte Systemaktion unterliegt einem strikten, zweistufigen Freigabemodell.',
      en: 'Modeled after the iconic system assistant in its technically rigorous form. UNIVERSAL_JARVIS runs as a resilient background systemd service on a dedicated Ubuntu Linux host, monitoring system health, executing real-time voice speech synthesis, managing 10 modular API slots, and pro-actively alerting on critical thresholds under an explicit two-tier permission security model.',
    },
    linkedinPitch: {
      de: 'Von der Science-Fiction zum robusten Enterprise-Daemon: Wie wir mit UNIVERSAL_JARVIS eine Multi-Agenten-Architektur auf Ubuntu Server etabliert haben. Autonome Hintergrund-Dienste, lokale Sprachmodelle und 10 modulare API-Slots — 100% on-premise und ohne Abhängigkeit von Closed-Source-Clouds.',
      en: 'From science fiction to hardened server engineering: UNIVERSAL_JARVIS deploys a modular multi-agent system on Ubuntu Server. Autonomous background daemons, local LLM orchestration, and 10 isolated API slots — engineered for 100% on-premise operational autonomy.',
    },
    category: 'cloud',
    techStack: ['Ubuntu Linux (systemd)', 'Python', 'Multi-Agent Core', '10 API Slots', 'Whisper / TTS', 'Docker', 'REST / RPC'],
    metrics: [
      {
        label: { de: 'API Schnittstellen', en: 'API Slots' },
        value: '10 Modulare Slots',
      },
      {
        label: { de: 'Server CPU Idle', en: 'Idle CPU Load' },
        value: '< 1.2 %',
      },
      {
        label: { de: 'Datensouveränität', en: 'Data Sovereignty' },
        value: '100 % On-Premise',
      },
      {
        label: { de: 'Antwortzeit Latenz', en: 'Inference Latency' },
        value: '< 420 ms',
      },
    ],
    specs: [
      { key: { de: 'Betriebssystem', en: 'Operating System' }, value: 'Ubuntu Server 24.04 LTS (x86_64 / ARM64)' },
      { key: { de: 'Service-Architektur', en: 'Architecture' }, value: 'systemd Native Daemon mit Supervisor & Watchdog' },
      { key: { de: 'Sicherheitsmodell', en: 'Security Engine' }, value: 'Zweistufige explizite Aktionsfreigabe (Zero Trust)' },
      { key: { de: 'Gedächtnis-Layer', en: 'Persistence Layer' }, value: 'SQLite Vector Embeddings & Time-Series DB' },
      { key: { de: 'Sprachverarbeitung', en: 'Audio Pipeline' }, value: 'Lokale Whisper STT + High-Fidelity TTS Pipeline' },
    ],
    image: '/images/jarvis_server_core.jpg',
    imageAlt: 'UNIVERSAL_JARVIS Ubuntu Server Core Rackmount System',
    gridSpan: 'md:col-span-1',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Architektur & Dokumentation auf GitHub',
      en: 'Architecture & Documentation on GitHub',
    },
    featured: true,
  },
  {
    id: 'aegis-dual-mcu-alarm',
    title: {
      de: 'Aegis: Dual-Microcontroller Sensor & Terminal Security Architecture',
      en: 'Aegis: Dual-Microcontroller Sensor & Terminal Security Architecture',
    },
    headline: {
      de: 'Verteiltes Cyber-Physical Alarmsystem mit serieller Bus-Synchronisation',
      en: 'Distributed Cyber-Physical Alarm Architecture with Serial Bus Synchronization',
    },
    shortDescription: {
      de: 'Modulares 2-Mikrocontroller-System: Getrennte Sensor- und Terminal-Knoten mit Ultraschall-Abstandsmessung, Finite State Machine, LCD-Display und Web-Anbindung.',
      en: 'Modular dual-microcontroller architecture: Dedicated sensor and terminal nodes with ultrasonic ranging, finite state machine logic, I2C LCD telemetry, and web connectivity.',
    },
    longDescription: {
      de: 'Ausgezeichnete Jahresarbeit zur Systemtrennung in eingebetteten Sicherheitsumgebungen: Anstelle eines einzelnen überlasteten Controllers nutzt Aegis eine verteilte Architektur aus zwei Mikrocontrollern. Der Sensor-Node führt kontinuierliche Ultraschallmessungen (HC-SR04) und Schwellenwert-Analysen durch, während der Terminal-Node die Zustandsmaschine (AUS / ENTSCHÄRFT / SCHARF), LCD-Ausgabe und Benutzer-Interaktion steuert — verbunden über einen bidirektionalen seriellen Kommunikationsbus.',
      en: 'Engineered as an advanced dual-node security deployment: Aegis decouples measurement from user interaction across two microcontrollers. The sensor node executes continuous ultrasonic ranging (HC-SR04) and threshold analytics, while the dedicated terminal node manages state machine logic (DISARMED / ARMED / ALARM), I2C LCD telemetry, and remote web alerting over a synchronized serial bus.',
    },
    linkedinPitch: {
      de: 'Warum modulare Systemtrennung in der Embedded-Sicherheit den Unterschied macht: Mit Aegis haben wir ein verteiltes 2-Mikrocontroller-System gebaut, das Ultraschall-Präzisionsmessung, synchrone Bus-Kommunikation und Web-Alerting in einer störungsresistenten State-Machine bündelt.',
      en: 'Why architectural separation matters in cyber-physical security: Aegis demonstrates distributed dual-MCU topology, pairing continuous ultrasonic telemetry with a dedicated terminal controller over an isolated serial bus.',
    },
    category: 'embedded',
    techStack: ['Arduino / C++', 'Dual-MCU Serial Bus', 'HC-SR04 Ultrasonic', 'I2C LCD', 'Finite State Machine', 'Web UI'],
    metrics: [
      {
        label: { de: 'Messbereich', en: 'Ranging Envelope' },
        value: '0–200 cm',
      },
      {
        label: { de: 'Bus-Latenz', en: 'Serial Latency' },
        value: '< 5 ms',
      },
      {
        label: { de: 'Display Refresh', en: 'Refresh Cycle' },
        value: '500 ms',
      },
      {
        label: { de: 'System-Topologie', en: 'Topology' },
        value: '2-Node Verbund',
      },
    ],
    specs: [
      { key: { de: 'Topologie', en: 'Topology' }, value: '2 dedizierte Mikrocontroller (Sensor Node & Terminal Node)' },
      { key: { de: 'Sensorik', en: 'Sensors' }, value: 'HC-SR04 Ultraschall-Sensor mit kalibrierter Alarmentfernung' },
      { key: { de: 'Benutzer-Interface', en: 'Interface' }, value: 'I2C LCD 16x2 Display, RGB-Status-LEDs & Taster-Array' },
      { key: { de: 'Protokoll', en: 'Protocol' }, value: 'Asynchroner bidirektionaler Serieller Datenbus' },
      { key: { de: 'Logik', en: 'Logic Engine' }, value: 'Deterministische Finite State Machine (FSM)' },
    ],
    image: '/images/dual_mcu_terminal.jpg',
    imageAlt: 'Aegis Dual-Microcontroller Sensor & Terminal Hardware Prototype',
    gridSpan: 'md:col-span-1',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Repository & Dokumentation auf GitHub',
      en: 'Repository & Documentation on GitHub',
    },
    featured: true,
  },
  {
    id: 'nexus-casino-slot-engine',
    title: {
      de: 'Nexus: High-Throughput Algorithmic Simulation & Slot Engine',
      en: 'Nexus: High-Throughput Algorithmic Simulation & Slot Engine',
    },
    headline: {
      de: 'Echtzeit-Stochastik, deterministisches RNG & interaktives Event-Casino',
      en: 'Real-Time Stochastics, Cryptographic RNG & Event Game Architecture',
    },
    shortDescription: {
      de: 'Eine hochperformante, interaktive Slotmaschinen-Engine in Python mit dynamischer Wahrscheinlichkeitsberechnung, State Machine und digitaler Event-Steuerung.',
      en: 'A high-performance digital slot engine written in Python featuring dynamic mathematical probability distribution, state management, and real-time event gameplay.',
    },
    longDescription: {
      de: 'Entwickelt als zentrale Attraktion für ein großes Schul- und Eventcasino: Nexus implementiert eine mathematisch abgesicherte, faire Zufalls-Engine in Python. Das System berechnet in Mikrosekunden Walzen-Kombinationen, animiert Spielabläufe, verwaltet Credits und Multiplikatoren und bietet ein immersives Spielerlebnis mit null Latenz.',
      en: 'Engineered as the central digital centerpiece for an event casino: Nexus implements a mathematically verified random number distribution engine in Python. Calculating reel combinations, payout multipliers, and multi-threaded event state transitions in microseconds, it delivers zero-latency gameplay with authentic sound-fx timing.',
    },
    linkedinPitch: {
      de: 'Algorithmen in der Praxis: Wie eine Python-basierte Slotmaschinen-Engine mit deterministischer Wahrscheinlichkeitsverteilung und dynamischem State Management zum Publikums-Highlight eines Groß-Events wurde. Mathematik, Game-Design und 60fps-State-Flow kombiniert.',
      en: 'Algorithms in live execution: How a Python-based slot engine with mathematically modeled probability distribution and dynamic state management powered a live casino event. Clean math meets real-time interactive engineering.',
    },
    category: 'web',
    techStack: ['Python 3', 'State Engine', 'Mathematical RNG', 'Event Automation', 'Audio/Visual Pipeline'],
    metrics: [
      {
        label: { de: 'RNG Genauigkeit', en: 'RNG Fairness' },
        value: '100% Deterministisch',
      },
      {
        label: { de: 'Berechnungszeit', en: 'Spin Compute' },
        value: '< 0.8 ms',
      },
      {
        label: { de: 'Latenz', en: 'Input Latency' },
        value: '0 ms',
      },
      {
        label: { de: 'Framerate', en: 'Visual Flow' },
        value: '60 FPS',
      },
    ],
    specs: [
      { key: { de: 'Programmiersprache', en: 'Core Engine' }, value: 'Python 3 mit objektorientierter Komponentenarchitektur' },
      { key: { de: 'Zufallsmodell', en: 'Probability Model' }, value: 'Gewichtete stochastische Zufallsverteilung mit Auszahlungstabelle' },
      { key: { de: 'Zustandsverwaltung', en: 'State Flow' }, value: 'Multi-Threaded Event Loop mit Transaktions-Sicherheit' },
      { key: { de: 'Audio/Visual', en: 'Feedback Pipeline' }, value: 'Echtzeit-Synchronisation zwischen Walzenanimation und Audio' },
    ],
    image: '/images/algorithmic_casino.jpg',
    imageAlt: 'Nexus Algorithmic Simulation & Slot Engine Interface',
    gridSpan: 'md:col-span-2',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Quellcode auf GitHub einsehen',
      en: 'View Source Code on GitHub',
    },
    featured: true,
  },
  {
    id: 'apple-style-portfolio-platform',
    title: {
      de: 'Aura: High-Performance Web & Native SwiftUI Architecture',
      en: 'Aura: High-Performance Web & Native SwiftUI Architecture',
    },
    headline: {
      de: 'Kompromisslose Performance & Ästhetik nach Apple-Standards',
      en: 'Uncompromised Performance & Polish Inspired by Apple.com',
    },
    shortDescription: {
      de: 'Ein extrem performantes Web- und App-Designsystem mit maßgeschneiderten Bento-Grids, dynamischem Kontrast, Liquid Glass und 100/100 Lighthouse-Score.',
      en: 'An ultra-responsive web and native app architecture featuring custom Bento grid geometry, dynamic contrast, liquid glass blur, and 100/100 Lighthouse metrics.',
    },
    longDescription: {
      de: 'Die digitale Repräsentanz für technologische Spitzenleistungen verlangt dieselbe Präzision wie die darunterliegende Systemarchitektur. Entwickelt mit modernem React, Next.js, SwiftUI und Framer Motion, setzt diese Plattform neue Maßstäbe für Ladezeiten, Typografie-Harmonie und responsive Fluidität.',
      en: 'Digital presence for elite engineering must exhibit the same uncompromising rigor as the underlying system architecture. Built with modern React, Next.js, SwiftUI, and Framer Motion, this architecture sets a benchmark for instantaneous paint times, typographic balance, and fluid interactions.',
    },
    linkedinPitch: {
      de: 'Warum moderne Software sich wie hochwertige Hardware anfühlen muss: Durch die Reduktion von unnötigem Framework-Ballast und die konsequente Orientierung an den visuellen Prinzipien von Apple verbinden wir 60fps-Animationen mit einem makellosen Lighthouse 100 Score.',
      en: 'Why modern applications should feel as intentional as native hardware: By stripping away superfluous dependencies and adopting Apple’s aesthetic restraint, we achieve 60fps interaction smoothness alongside a perfect Lighthouse 100 benchmark.',
    },
    category: 'web',
    techStack: ['React 19', 'Next.js App Router', 'SwiftUI Universal', 'Tailwind CSS', 'Framer Motion', 'Bento Grid'],
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
        label: { de: 'Animation Framerate', en: 'Animation Budget' },
        value: '60–120 FPS',
      },
    ],
    specs: [
      { key: { de: 'Web-Stack', en: 'Web Engine' }, value: 'Next.js App Router + React 19 + TypeScript Strictly Typed' },
      { key: { de: 'Native App Stack', en: 'Native Stack' }, value: 'Pure SwiftUI Universal für iOS, iPadOS und macOS' },
      { key: { de: 'Styling Methodik', en: 'Styling Paradigm' }, value: 'Tailwind CSS + Apple Squircle Continuous Geometry' },
      { key: { de: 'Lokalisierung', en: 'Localization' }, value: 'Vollständig zweisprachig (Deutsch & Englisch)' },
    ],
    image: '/images/hero_hardware_lab.jpg',
    imageAlt: 'Aura High-Performance Web & Native SwiftUI Architecture',
    gridSpan: 'md:col-span-1',
    isOpenSource: true,
    repoUrlLabel: {
      de: 'Quellcode auf GitHub',
      en: 'Source on GitHub',
    },
    featured: true,
  },
];
