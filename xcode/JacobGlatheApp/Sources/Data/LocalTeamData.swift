import Foundation

public enum LocalTeamData {
    public static let members: [TeamMember] = [
        TeamMember(
            id: "jacob-glathe",
            name: "Jacob Glathe",
            role: LocalizedText(
                de: "Lead Architect & Systems Engineer",
                en: "Lead Architect & Systems Engineer"
            ),
            bio: LocalizedText(
                de: "Spezialisiert auf die Synthese von hardwarenaher Programmierung (ESP32, C++, FreeRTOS), robuster Linux-Server-Infrastruktur und zukunftsweisenden Software-Architekturen.",
                en: "Specialized in the synthesis of bare-metal embedded programming (ESP32, C++, FreeRTOS), resilient Linux server infrastructure, and forward-looking software architectures."
            ),
            focusAreas: [
                LocalizedText(de: "ESP32 & Cyber-Physical Security", en: "ESP32 & Cyber-Physical Security"),
                LocalizedText(de: "Linux Server Daemons & IoT Mesh", en: "Linux Server Daemons & IoT Mesh"),
                LocalizedText(de: "Hardware-Software Co-Design", en: "Hardware-Software Co-Design"),
                LocalizedText(de: "High-Performance Systems", en: "High-Performance Systems")
            ],
            email: "jcob.glathe@gmail.com"
        ),
        TeamMember(
            id: "embedded-systems-team",
            name: "Engineering & Firmware Team",
            role: LocalizedText(
                de: "Embedded Systems & Low-Level Code",
                en: "Embedded Systems & Low-Level Code"
            ),
            bio: LocalizedText(
                de: "Fokussiert auf mikrocontroller-nahe Protokoll-Implementierungen, HF-Transceiver-Ansteuerung (CC1101, Sub-GHz) und stromsparende Firmware-Architekturen.",
                en: "Focused on low-level microcontroller protocol stacks, RF transceiver control (CC1101, Sub-GHz), and ultra-low-power firmware architectures."
            ),
            focusAreas: [
                LocalizedText(de: "FreeRTOS & Bare-Metal C/C++", en: "FreeRTOS & Bare-Metal C/C++"),
                LocalizedText(de: "RF Signal Processing & Sub-GHz", en: "RF Signal Processing & Sub-GHz"),
                LocalizedText(de: "BOM & Schaltungsdesign", en: "BOM & Circuit Topology")
            ]
        ),
        TeamMember(
            id: "cloud-frontend-team",
            name: "Cloud & Apple UI Engineering",
            role: LocalizedText(
                de: "Distributed Infrastructure & Apple-Grade UI",
                en: "Distributed Infrastructure & Apple-Grade UI"
            ),
            bio: LocalizedText(
                de: "Verantwortlich für die nahtlose Server-Orchestrierung auf Linux-Basis sowie native, kompromisslos flüssige Benutzeroberflächen nach den Standards von Apple.",
                en: "Responsible for hardened Linux backend orchestration and pixel-accurate, ultra-responsive native interfaces built to Apple design standards."
            ),
            focusAreas: [
                LocalizedText(de: "Linux Server & systemd Daemons", en: "Linux Server & systemd Daemons"),
                LocalizedText(de: "WebSocket Telemetrie-Streaming", en: "WebSocket Telemetry Streaming"),
                LocalizedText(de: "SwiftUI & Apple Human Interface", en: "SwiftUI & Apple Human Interface")
            ],
            email: "jcob.glathe@gmail.com"
        )
    ]
}
