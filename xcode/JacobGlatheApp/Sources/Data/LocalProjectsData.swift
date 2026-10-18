import Foundation

public enum LocalProjectsData {
    public static let projects: [Project] = [
        Project(
            id: "signalmaster-flipper-alt",
            title: LocalizedText(
                de: "SignalMaster: Open-Source Multi-Tool & Cyber-Physical Analyzer",
                en: "SignalMaster: Open-Source Multi-Tool & Cyber-Physical Analyzer"
            ),
            headline: LocalizedText(
                de: "Zugängliche Hardware-Sicherheitsforschung auf ESP32-Basis",
                en: "Accessible Hardware Security Research on ESP32 Architecture"
            ),
            shortDescription: LocalizedText(
                de: "Ein modulares, kosteneffizientes Multi-Tool als Open-Source Alternative zu kommerziellen Analysegeräten. Entwickelt aus frei verfügbaren Standardkomponenten mit nativer Linux-Server-Anbindung.",
                en: "A modular, cost-efficient multi-tool engineered as an open-source alternative to commercial analysis hardware. Built using off-the-shelf standard components with native Linux server integration."
            ),
            longDescription: LocalizedText(
                de: "Moderne Sicherheitsanalyse und Signalerkennung im Sub-GHz-, RFID- und Infrarotbereich erfordern oft teure proprietäre Hardware. Dieses Projekt beweist, dass durch intelligentes Hardware-Software-Co-Design auf Basis des ESP32 Dual-Core-Mikrocontrollers ein vollwertiges, offenes Analysewerkzeug realisiert werden kann. Das System verbindet Echtzeit-Signalverarbeitung auf dem Chip mit einer sicheren Linux-Server-Pipeline für Spektralanalysen und Firmware-Orchestrierung.",
                en: "Modern security research and signal verification across sub-GHz, RFID, and infrared protocols historically relied on expensive proprietary devices. This project demonstrates that deliberate hardware-software co-design leveraging the ESP32 dual-core microcontroller delivers an uncompromised, open-source multi-tool. The architecture pairs real-time on-chip signal processing with a hardened Linux server backend for telemetry streaming and automated analysis."
            ),
            linkedinPitch: LocalizedText(
                de: "Demokratisierung von Hardware-Security & Embedded Engineering: Warum 200€+ für proprietäre Multi-Tools ausgeben, wenn man mit gezieltem C++/FreeRTOS-Engineering und Standardkomponenten unter 25€ Materialkosten dieselbe Analyse-Tiefe erreicht? Unser neuester Open-Source-Build vereint Sub-GHz-Transceiver, NFC/RFID, Infrarot-Capture und eine Linux-Daemon-Telemetrie in einem robusten, handlichen Formfaktor.",
                en: "Democratizing cyber-physical security research: Why rely on prohibitive proprietary devices when thoughtful C++/FreeRTOS engineering and accessible off-the-shelf components can deliver comprehensive signal analysis under $25 BOM? Our latest open-source build bridges ESP32 dual-core performance, sub-GHz transceiver modules, NFC/RFID, and a Linux daemon pipeline into a compact, pocketable form factor."
            ),
            category: .hardware,
            techStack: ["ESP32 Dual-Core", "FreeRTOS", "C++", "Sub-GHz (CC1101)", "Linux Server", "OLED UI"],
            metrics: [
                ProjectMetric(
                    label: LocalizedText(de: "BOM Hardwarekosten", en: "Hardware BOM Cost"),
                    value: "< 25 €"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "Frequenzbandbreite", en: "Operating Bands"),
                    value: "300–928 MHz"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "Loop-Latenz", en: "Loop Latency"),
                    value: "< 2.4 ms"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "Architektur", en: "Core Architecture"),
                    value: "Dual-Core 240MHz"
                )
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Mikrocontroller", en: "Microcontroller"), value: "ESP32-WROOM-32D Dual-Core Xtensa LX6"),
                ProjectSpec(key: LocalizedText(de: "HF-Transceiver", en: "RF Transceiver"), value: "CC1101 SPI Transceiver (315/433/868/915 MHz)"),
                ProjectSpec(key: LocalizedText(de: "Display & Input", en: "Display & Input"), value: "1.3\" I2C OLED (128x64) + 5-Way Tactical Navigation"),
                ProjectSpec(key: LocalizedText(de: "Nahfeld & Optik", en: "NFC & Optical"), value: "PN532 NFC Module + TSOP38238 IR Receiver & High-Power IR LED"),
                ProjectSpec(key: LocalizedText(de: "Server-Integration", en: "Server Daemon"), value: "Headless Linux Daemon via TCP/WebSocket & MQTT"),
                ProjectSpec(key: LocalizedText(de: "Energieversorgung", en: "Power Subsystem"), value: "LiPo 3.7V 1200mAh mit integriertem TP4056 Ladecontroller")
            ],
            imageName: "project_flipper_alt",
            isOpenSource: true,
            featured: true
        ),
        Project(
            id: "edgemesh-linux-daemon",
            title: LocalizedText(
                de: "EdgeMesh: ESP32 Distributed Fleet & Linux Daemon Hub",
                en: "EdgeMesh: ESP32 Distributed Fleet & Linux Daemon Hub"
            ),
            headline: LocalizedText(
                de: "Orchestrierung verteilter Edge-Knoten auf Debian & Ubuntu",
                en: "Distributed Edge Microcontroller Fleet Orchestration on Linux"
            ),
            shortDescription: LocalizedText(
                de: "Ein leichtgewichtiger Linux-Server-Dienst zur simultanen Verwaltung, Fernwartung und kontinuierlichen Telemetrieerfassung verteilter ESP32-Sensorknoten.",
                en: "A lightweight Linux server service for simultaneous management, remote OTA updates, and real-time telemetry streaming of distributed ESP32 microcontrollers."
            ),
            longDescription: LocalizedText(
                de: "IoT-Installationen scheitern häufig an instabilen Synchronisationsmechanismen zwischen Feldgeräten und Rechenzentren. EdgeMesh löst dieses Problem durch einen in modernem C++ und Python implementierten Linux-Daemon, der verschlüsselte WebSocket-Verbindungen zu ESP32-Controllern aufrechterhält, Heartbeats überwacht und differenzielle Over-The-Air (OTA) Updates automatisiert ausrollt.",
                en: "IoT deployments often struggle with reliable bidirectional synchronization between edge hardware and backend hosts. EdgeMesh solves this through a resilient Linux system daemon that maintains persistent encrypted WebSocket sockets to ESP32 nodes, monitors health metrics, and orchestrates differential over-the-air (OTA) firmware deployments."
            ),
            linkedinPitch: LocalizedText(
                de: "Microcontroller treffen Enterprise-Linux: Mit EdgeMesh haben wir eine robuste Middleware geschaffen, die bare-metal ESP32-Flotten nahtlos in Linux-Serverinfrastrukturen einbettet. Schnelle Bereitstellung, zero-downtime OTA und millisekundengenaue Telemetrie — gebaut für Skalierbarkeit ohne teure Cloud-Vendor-Locks.",
                en: "Bare-metal microcontrollers meet enterprise Linux: EdgeMesh bridges distributed ESP32 hardware directly into hardened Linux server infrastructure. Fast provisioning, zero-downtime OTA rollouts, and sub-millisecond telemetry capture — engineered for autonomy without cloud vendor lock-in."
            ),
            category: .embedded,
            techStack: ["Linux (systemd)", "C++", "Python", "ESP32", "WebSockets", "SQLite"],
            metrics: [
                ProjectMetric(
                    label: LocalizedText(de: "Gleichzeitige Nodes", en: "Concurrent Nodes"),
                    value: "250+ je Daemon"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "Server CPU-Load", en: "Host CPU Overhead"),
                    value: "< 1.8%"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "OTA Updatezeit", en: "OTA Transfer Time"),
                    value: "14.2 s"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "Verbindungsstabilität", en: "Link Reliability"),
                    value: "99.98%"
                )
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Host-Plattform", en: "Host System"), value: "Linux (Debian / Ubuntu / Alpine x86_64 & ARM64)"),
                ProjectSpec(key: LocalizedText(de: "Protokoll-Stack", en: "Protocol Suite"), value: "WSS (TLS 1.3), Binary Protobuf & JSON-RPC"),
                ProjectSpec(key: LocalizedText(de: "Service Management", en: "Service Engine"), value: "Native systemd Service mit automatischem Watchdog"),
                ProjectSpec(key: LocalizedText(de: "Speicherverwaltung", en: "Persistence Layer"), value: "Embedded SQLite Time-Series Buffer")
            ],
            imageName: "project_linux_edge_node",
            isOpenSource: true,
            featured: true
        ),
        Project(
            id: "apple-portfolio-platform",
            title: LocalizedText(
                de: "Aura: High-Performance Web & SwiftUI Design System",
                en: "Aura: High-Performance Web & SwiftUI Design System"
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
            techStack: ["SwiftUI", "Swift 5.9", "SF Pro Display", "Liquid Glass"],
            metrics: [
                ProjectMetric(
                    label: LocalizedText(de: "Render-Framerate", en: "Frame Budget"),
                    value: "120 FPS"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "App Kaltstart", en: "Cold Launch"),
                    value: "< 0.2 s"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "Offline-Abdeckung", en: "Offline Cover"),
                    value: "100 %"
                )
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Framework", en: "Framework"), value: "Pure Native SwiftUI (Universal iOS / macOS)"),
                ProjectSpec(key: LocalizedText(de: "Typografie", en: "Typography"), value: "SF Pro Display & SF Mono Tabular"),
                ProjectSpec(key: LocalizedText(de: "Plattformen", en: "Targets"), value: "iPhone, iPad, Mac (Apple Silicon & Intel)")
            ],
            imageName: "hero_hardware_lab",
            isOpenSource: true,
            featured: true
        ),
        Project(
            id: "synapse-ci-cd-pipeline",
            title: LocalizedText(
                de: "Synapse: Automated Embedded CI/CD & Build Pipeline",
                en: "Synapse: Automated Embedded CI/CD & Build Pipeline"
            ),
            headline: LocalizedText(
                de: "Automatisierte Tests & Flash-Pipelines für Mikrocontroller",
                en: "Automated Hardware-in-the-Loop Build & Firmware Verification"
            ),
            shortDescription: LocalizedText(
                de: "Kontinuierliche Kompilierung, statische Code-Analyse und Hardware-in-the-Loop (HIL) Tests für ESP32 und ARM Cortex-M Architekturen.",
                en: "Continuous firmware compilation, static code analysis, and automated hardware-in-the-loop (HIL) testing for ESP32 and ARM Cortex-M platforms."
            ),
            longDescription: LocalizedText(
                de: "Fehler in eingebetteter Software vor Ort zu beheben ist zeit- und kostenintensiv. Synapse schließt die Lücke zwischen modernem DevOps und physischer Hardware durch containerisierte ESP-IDF Build-Umgebungen und automatisierte Testläufe auf realen Testständen.",
                en: "Remediating embedded firmware bugs in the field is costly and slow. Synapse closes the divide between modern DevOps and physical target boards through containerized ESP-IDF toolchains and automated testing runs across physical test benches."
            ),
            linkedinPitch: LocalizedText(
                de: "DevOps trifft Bare-Metal: Wie wir den Entwicklungszyklus für Embedded Systeme um 70% beschleunigen, indem wir Software-Praktiken wie Continuous Integration und HIL-Testing auf physische ESP32-Flotten übertragen.",
                en: "DevOps meets bare-metal engineering: Accelerating embedded release cycles by 70% through automated hardware-in-the-loop verification and containerized cross-compilation pipelines."
            ),
            category: .cloud,
            techStack: ["Linux", "Docker", "ESP-IDF", "Bash / Python", "GitHub Actions", "CMake"],
            metrics: [
                ProjectMetric(
                    label: LocalizedText(de: "Build-Zeit Einsparung", en: "Build Time Reduction"),
                    value: "- 68%"
                ),
                ProjectMetric(
                    label: LocalizedText(de: "Automatische Tests", en: "Test Coverage"),
                    value: "94.2%"
                )
            ],
            specs: [
                ProjectSpec(key: LocalizedText(de: "Toolchains", en: "Compilers"), value: "ESP-IDF v5.2, Xtensa GCC, Clang Static Analyzer"),
                ProjectSpec(key: LocalizedText(de: "Test-Architektur", en: "Verification"), value: "Automated Unity Test Framework on Real Silicon")
            ],
            imageName: "project_linux_edge_node",
            isOpenSource: true,
            featured: false
        )
    ]
}
