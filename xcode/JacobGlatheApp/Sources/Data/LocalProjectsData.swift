import Foundation

public enum LocalProjectsData {
    public static let projects: [Project] = [
        Project(
            id: "signalmaster-rf-analyzer",
            title: LocalizedText(
                de: "SignalMaster: Handheld RF Spectrum Waterfall & Cyber-Physical Suite",
                en: "SignalMaster: Handheld RF Spectrum Waterfall & Cyber-Physical Suite"
            ),
            headline: LocalizedText(
                de: "ESP32 Wireless Pentesting & Sub-GHz Analyse",
                en: "ESP32 Wireless Pentesting & Sub-GHz Analysis"
            ),
            shortDescription: LocalizedText(
                de: "Ein modulares, tragbares Multi-Tool für Sub-GHz, Wi-Fi Paket-Injektion und RFID/NFC — entwickelt als bezahlbare Open-Source-Alternative zu proprietären Pentest-Geräten.",
                en: "A modular, handheld signal analysis multi-tool for Sub-GHz, Wi-Fi packet injection, and RFID/NFC — engineered as an accessible open-source alternative to proprietary pentesting hardware."
            ),
            longDescription: LocalizedText(
                de: "SignalMaster nutzt einen ESP32-Dual-Core (240 MHz) gekoppelt mit einem CC1101 Sub-GHz Transceiver und SMA-Breitbandantenne. Mit Echtzeit-Wasserfall-Spektrumanalyse auf einem gestochen scharfen Display, integriertem PN532 NFC-Modul und Infrarot-Capture/Replay bietet das System umfassende Analyse-Möglichkeiten bei einer Hardware-BOM von unter 25 Euro.",
                en: "SignalMaster combines an ESP32 dual-core SoC with a high-gain CC1101 Sub-GHz transceiver and SMA broadband antenna. Featuring real-time waterfall RF spectrum visualizers on an ultra-crisp display, onboard PN532 NFC reader, and IR capture/replay, the system delivers comprehensive signal verification at an accessible sub-$25 BOM."
            ),
            linkedinPitch: LocalizedText(
                de: "Demokratisierung von Cyber-Physical Security: Warum 200€+ für proprietäre Multi-Tools ausgeben, wenn man mit durchdachtem C++/FreeRTOS-Engineering und Standardkomponenten unter 25€ dieselbe Signal-Tiefe erreicht? Unser neuester Open-Source Build vereint Sub-GHz Wasserfall-Analyse, Wi-Fi Packet Injection und Linux-Daemon-Telemetrie in einem robusten Taschenformat.",
                en: "Democratizing cyber-physical security research: Why rely on prohibitive proprietary devices when thoughtful C++/FreeRTOS engineering and accessible off-the-shelf components deliver comprehensive spectrum analysis under $25 BOM? Our latest open-source build bridges Sub-GHz RF waterfall scanning, Wi-Fi packet analysis, and a Linux daemon pipeline into a pocketable form factor."
            ),
            category: .hardware,
            techStack: ["ESP32 Dual-Core", "CC1101 Sub-GHz", "FreeRTOS", "C++", "Packet Injection", "OLED UI"],
            metrics: [
                ProjectMetric(label: LocalizedText(de: "BOM Hardwarekosten", en: "Hardware BOM Cost"), value: "< 25 €"),
                ProjectMetric(label: LocalizedText(de: "Frequenzbandbreite", en: "Operating Bands"), value: "300–928 MHz"),
                ProjectMetric(label: LocalizedText(de: "Reaktionslatenz", en: "Loop Latency"), value: "< 2.4 ms"),
                ProjectMetric(label: LocalizedText(de: "Architektur", en: "Core Architecture"), value: "Dual-Core 240MHz")
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Mikrocontroller", en: "Microcontroller"), value: "ESP32-WROOM-32D Dual-Core Xtensa LX6 (240MHz)"),
                ProjectSpec(key: LocalizedText(de: "HF-Transceiver", en: "RF Transceiver"), value: "CC1101 SPI Transceiver (315/433/868/915 MHz) mit SMA-Antenne"),
                ProjectSpec(key: LocalizedText(de: "Display & UI", en: "Display & UI"), value: "OLED Monochrom Waterfall Spectrum Visualizer & 5-Way Taster"),
                ProjectSpec(key: LocalizedText(de: "Nahfeld & Optik", en: "NFC & Optical"), value: "PN532 NFC Module + TSOP38238 IR Receiver & High-Power IR LED"),
                ProjectSpec(key: LocalizedText(de: "Server-Integration", en: "Server Daemon"), value: "Headless Linux Daemon via TCP/WebSocket & MQTT"),
                ProjectSpec(key: LocalizedText(de: "Batterie-Management", en: "Power Subsystem"), value: "LiPo 3.7V 1200mAh mit TP4056 Ladecontroller")
            ],
            imageName: "esp_rf_analyzer",
            isOpenSource: true,
            featured: true
        ),
        Project(
            id: "universal-jarvis-daemon",
            title: LocalizedText(
                de: "UNIVERSAL_JARVIS: Autonomous Linux Server Daemon & Multi-Agent Core",
                en: "UNIVERSAL_JARVIS: Autonomous Linux Server Daemon & Multi-Agent Core"
            ),
            headline: LocalizedText(
                de: "Autonomer KI-Systemassistent auf Ubuntu Server",
                en: "Autonomous Multi-Agent AI System Daemon on Ubuntu Server"
            ),
            shortDescription: LocalizedText(
                de: "Ein universeller, autarker KI-Systemassistent als nativer systemd-Dienst auf Ubuntu Server mit 10 API-Slots, persistentem Gedächtnis und sicherem Freigabemodell.",
                en: "A universal, autonomous AI system assistant operating as a native systemd daemon on Ubuntu Server featuring 10 API slots, persistent memory, and explicit permission verification."
            ),
            longDescription: LocalizedText(
                de: "UNIVERSAL_JARVIS läuft als vollwertiger Hintergrunddienst auf dem eigenen Ubuntu Server, überwacht Systemressourcen, verarbeitet Sprache in Echtzeit via Whisper/TTS, verwaltet 10 definierte Skills/Schnittstellen und meldet sich proaktiv bei kritischen Ereignissen. Jede privilegierte Systemaktion unterliegt einem strikten, zweistufigen Freigabemodell.",
                en: "UNIVERSAL_JARVIS runs as a resilient background systemd service on a dedicated Ubuntu Linux host, monitoring system health, executing real-time voice speech synthesis, managing 10 modular API slots, and pro-actively alerting on critical thresholds under an explicit two-tier permission security model."
            ),
            linkedinPitch: LocalizedText(
                de: "Von der Science-Fiction zum robusten Enterprise-Daemon: Wie wir mit UNIVERSAL_JARVIS eine Multi-Agenten-Architektur auf Ubuntu Server etabliert haben. Autonome Hintergrund-Dienste, lokale Sprachmodelle und 10 modulare API-Slots — 100% on-premise und ohne Abhängigkeit von Closed-Source-Clouds.",
                en: "From science fiction to hardened server engineering: UNIVERSAL_JARVIS deploys a modular multi-agent system on Ubuntu Server. Autonomous background daemons, local LLM orchestration, and 10 isolated API slots — engineered for 100% on-premise operational autonomy."
            ),
            category: .cloud,
            techStack: ["Ubuntu Linux (systemd)", "Python", "Multi-Agent Core", "10 API Slots", "Whisper / TTS", "Docker"],
            metrics: [
                ProjectMetric(label: LocalizedText(de: "API Schnittstellen", en: "API Slots"), value: "10 Modulare Slots"),
                ProjectMetric(label: LocalizedText(de: "Server CPU Idle", en: "Idle CPU Load"), value: "< 1.2 %"),
                ProjectMetric(label: LocalizedText(de: "Datensouveränität", en: "Data Sovereignty"), value: "100 % On-Premise"),
                ProjectMetric(label: LocalizedText(de: "Antwortzeit Latenz", en: "Inference Latency"), value: "< 420 ms")
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Betriebssystem", en: "Operating System"), value: "Ubuntu Server 24.04 LTS (x86_64 / ARM64)"),
                ProjectSpec(key: LocalizedText(de: "Service-Engine", en: "Architecture"), value: "systemd Native Daemon mit Supervisor & Watchdog"),
                ProjectSpec(key: LocalizedText(de: "Sicherheitsmodell", en: "Security Engine"), value: "Zweistufige explizite Aktionsfreigabe (Zero Trust)"),
                ProjectSpec(key: LocalizedText(de: "Gedächtnis-Layer", en: "Persistence Layer"), value: "SQLite Vector Embeddings & Time-Series DB")
            ],
            imageName: "jarvis_server_core",
            isOpenSource: true,
            featured: true
        ),
        Project(
            id: "aegis-dual-mcu-alarm",
            title: LocalizedText(
                de: "Aegis: Dual-Microcontroller Sensor & Terminal Security Architecture",
                en: "Aegis: Dual-Microcontroller Sensor & Terminal Security Architecture"
            ),
            headline: LocalizedText(
                de: "Verteiltes Cyber-Physical Alarmsystem",
                en: "Distributed Cyber-Physical Alarm Architecture"
            ),
            shortDescription: LocalizedText(
                de: "Modulares 2-Mikrocontroller-System: Getrennte Sensor- und Terminal-Knoten mit Ultraschall-Abstandsmessung, Finite State Machine, LCD-Display und Web-Anbindung.",
                en: "Modular dual-microcontroller architecture: Dedicated sensor and terminal nodes with ultrasonic ranging, finite state machine logic, I2C LCD telemetry, and web connectivity."
            ),
            longDescription: LocalizedText(
                de: "Anstelle eines einzelnen Controllers nutzt Aegis eine verteilte Architektur aus zwei Mikrocontrollern. Der Sensor-Node führt kontinuierliche Ultraschallmessungen (HC-SR04) und Schwellenwert-Analysen durch, während der Terminal-Node die Zustandsmaschine (AUS / ENTSCHÄRFT / SCHARF), LCD-Ausgabe und Benutzer-Interaktion steuert — verbunden über einen bidirektionalen seriellen Kommunikationsbus.",
                en: "Aegis decouples measurement from user interaction across two microcontrollers. The sensor node executes continuous ultrasonic ranging (HC-SR04) and threshold analytics, while the dedicated terminal node manages state machine logic (DISARMED / ARMED / ALARM), I2C LCD telemetry, and remote web alerting over a synchronized serial bus."
            ),
            linkedinPitch: LocalizedText(
                de: "Warum modulare Systemtrennung in der Embedded-Sicherheit den Unterschied macht: Mit Aegis haben wir ein verteiltes 2-Mikrocontroller-System gebaut, das Ultraschall-Präzisionsmessung, synchrone Bus-Kommunikation und Web-Alerting in einer störungsresistenten State-Machine bündelt.",
                en: "Why architectural separation matters in cyber-physical security: Aegis demonstrates distributed dual-MCU topology, pairing continuous ultrasonic telemetry with a dedicated terminal controller over an isolated serial bus."
            ),
            category: .embedded,
            techStack: ["Arduino / C++", "Dual-MCU Serial Bus", "HC-SR04 Ultrasonic", "I2C LCD", "Finite State Machine"],
            metrics: [
                ProjectMetric(label: LocalizedText(de: "Messbereich", en: "Ranging Envelope"), value: "0–200 cm"),
                ProjectMetric(label: LocalizedText(de: "Bus-Latenz", en: "Serial Latency"), value: "< 5 ms"),
                ProjectMetric(label: LocalizedText(de: "Display Refresh", en: "Refresh Cycle"), value: "500 ms"),
                ProjectMetric(label: LocalizedText(de: "System-Topologie", en: "Topology"), value: "2-Node Verbund")
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Topologie", en: "Topology"), value: "2 dedizierte Mikrocontroller (Sensor Node & Terminal Node)"),
                ProjectSpec(key: LocalizedText(de: "Sensorik", en: "Sensors"), value: "HC-SR04 Ultraschall-Sensor mit kalibrierter Alarmentfernung"),
                ProjectSpec(key: LocalizedText(de: "Benutzer-Interface", en: "Interface"), value: "I2C LCD 16x2 Display, RGB-Status-LEDs & Taster-Array")
            ],
            imageName: "dual_mcu_terminal",
            isOpenSource: true,
            featured: true
        ),
        Project(
            id: "nexus-casino-slot-engine",
            title: LocalizedText(
                de: "Nexus: High-Throughput Algorithmic Simulation & Slot Engine",
                en: "Nexus: High-Throughput Algorithmic Simulation & Slot Engine"
            ),
            headline: LocalizedText(
                de: "Echtzeit-Stochastik & deterministisches RNG",
                en: "Real-Time Stochastics & Deterministic RNG"
            ),
            shortDescription: LocalizedText(
                de: "Eine hochperformante, interaktive Slotmaschinen-Engine in Python mit dynamischer Wahrscheinlichkeitsberechnung, State Machine und digitaler Event-Steuerung.",
                en: "A high-performance digital slot engine written in Python featuring dynamic mathematical probability distribution, state management, and real-time event gameplay."
            ),
            longDescription: LocalizedText(
                de: "Nexus implementiert eine mathematisch abgesicherte, faire Zufalls-Engine in Python. Das System berechnet in Mikrosekunden Walzen-Kombinationen, animiert Spielabläufe, verwaltet Credits und Multiplikatoren und bietet ein immersives Spielerlebnis mit null Latenz.",
                en: "Nexus implements a mathematically verified random number distribution engine in Python. Calculating reel combinations, payout multipliers, and multi-threaded event state transitions in microseconds, it delivers zero-latency gameplay with authentic sound-fx timing."
            ),
            linkedinPitch: LocalizedText(
                de: "Algorithmen in der Praxis: Wie eine Python-basierte Slotmaschinen-Engine mit deterministischer Wahrscheinlichkeitsverteilung und dynamischem State Management zum Publikums-Highlight eines Groß-Events wurde. Mathematik, Game-Design und 60fps-State-Flow kombiniert.",
                en: "Algorithms in live execution: How a Python-based slot engine with mathematically modeled probability distribution and dynamic state management powered a live casino event. Clean math meets real-time interactive engineering."
            ),
            category: .web,
            techStack: ["Python 3", "State Engine", "Mathematical RNG", "Event Automation", "Audio/Visual Pipeline"],
            metrics: [
                ProjectMetric(label: LocalizedText(de: "RNG Genauigkeit", en: "RNG Fairness"), value: "100% Fair"),
                ProjectMetric(label: LocalizedText(de: "Berechnungszeit", en: "Spin Compute"), value: "< 0.8 ms"),
                ProjectMetric(label: LocalizedText(de: "Latenz", en: "Input Latency"), value: "0 ms"),
                ProjectMetric(label: LocalizedText(de: "Framerate", en: "Visual Flow"), value: "60 FPS")
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Programmiersprache", en: "Core Engine"), value: "Python 3 mit objektorientierter Komponentenarchitektur"),
                ProjectSpec(key: LocalizedText(de: "Zufallsmodell", en: "Probability Model"), value: "Gewichtete stochastische Zufallsverteilung mit Auszahlungstabelle")
            ],
            imageName: "algorithmic_casino",
            isOpenSource: true,
            featured: true
        ),
        Project(
            id: "apple-portfolio-platform",
            title: LocalizedText(
                de: "Aura: High-Performance Web & Native SwiftUI Architecture",
                en: "Aura: High-Performance Web & Native SwiftUI Architecture"
            ),
            headline: LocalizedText(
                de: "Kompromisslose Performance & Ästhetik nach Apple-Standards",
                en: "Uncompromised Performance & Polish Inspired by Apple.com"
            ),
            shortDescription: LocalizedText(
                de: "Ein maßgeschneidertes Bento-Grid-System mit nativer Continuous-Squircle-Geometrie, Liquid Glass und 60–120 FPS Rendering.",
                en: "A bespoke Bento grid system with continuous squircle geometry, liquid glass blur, and 60–120 FPS rendering across Apple devices."
            ),
            longDescription: LocalizedText(
                de: "Die Repräsentanz für technologische Spitzenleistungen verlangt dieselbe Präzision wie die darunterliegende Systemarchitektur. Diese Universal-Applikation setzt höchste Maßstäbe für Ladezeiten, Typografie-Harmonie und responsive Fluidität.",
                en: "The platform for elite engineering demands the same precision as the underlying silicon architecture. This universal application sets benchmarks for instantaneous rendering and responsive fluid motion."
            ),
            linkedinPitch: LocalizedText(
                de: "Warum moderne Software sich nativ und direkt anfühlen muss: Durch die Reduktion von Framework-Ballast und die konsequente Ausrichtung an den Prinzipien von Apple verbinden wir 120fps ProMotion mit makelloser System-Integration.",
                en: "Why modern software must feel as tactile and intentional as physical hardware: Through architectural restraint, we achieve 120fps ProMotion fluidity alongside flawless Apple ecosystem integration."
            ),
            category: .web,
            techStack: ["React 19 / Next.js", "SwiftUI Universal", "Tailwind CSS", "Framer Motion"],
            metrics: [
                ProjectMetric(label: LocalizedText(de: "Render-Framerate", en: "Frame Budget"), value: "120 FPS"),
                ProjectMetric(label: LocalizedText(de: "App Kaltstart", en: "Cold Launch"), value: "< 0.2 s"),
                ProjectMetric(label: LocalizedText(de: "Lighthouse Score", en: "Lighthouse Performance"), value: "100 / 100")
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Framework", en: "Framework"), value: "Pure Native SwiftUI (Universal iOS / macOS)"),
                ProjectSpec(key: LocalizedText(de: "Typografie", en: "Typography"), value: "SF Pro Display & SF Mono Tabular")
            ],
            imageName: "hero_hardware_lab",
            isOpenSource: true,
            featured: true
        )
    ]
}
