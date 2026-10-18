import { TeamMember } from '../types';

export const teamData: TeamMember[] = [
  {
    id: 'jacob-glathe',
    name: 'Jacob Glathe',
    role: {
      de: 'Lead Architect & Systems Engineer',
      en: 'Lead Architect & Systems Engineer',
    },
    bio: {
      de: 'Spezialisiert auf die Synthese von hardwarenaher Programmierung (ESP32, C++, FreeRTOS), robuster Linux-Server-Infrastruktur und zukunftsweisenden Software-Architekturen.',
      en: 'Specialized in the synthesis of bare-metal embedded programming (ESP32, C++, FreeRTOS), resilient Linux server infrastructure, and forward-looking software architectures.',
    },
    focusAreas: [
      { de: 'ESP32 & Cyber-Physical Security', en: 'ESP32 & Cyber-Physical Security' },
      { de: 'Linux Server Daemons & IoT Mesh', en: 'Linux Server Daemons & IoT Mesh' },
      { de: 'Hardware-Software Co-Design', en: 'Hardware-Software Co-Design' },
      { de: 'High-Performance Web Systems', en: 'High-Performance Web Systems' },
    ],
    socials: [
      { label: 'E-Mail', url: 'mailto:jcob.glathe@gmail.com', type: 'email' },
      { label: 'Open Source Repositories', url: 'https://github.com', type: 'github' },
    ],
  },
  {
    id: 'team-embedded-systems',
    name: 'Engineering & Firmware Team',
    role: {
      de: 'Embedded Systems & Low-Level Code',
      en: 'Embedded Systems & Low-Level Code',
    },
    bio: {
      de: 'Fokussiert auf mikrocontroller-nahe Protokoll-Implementierungen, HF-Transceiver-Ansteuerung (CC1101, Sub-GHz) und stromsparende Firmware-Architekturen.',
      en: 'Focused on low-level microcontroller protocol stacks, RF transceiver control (CC1101, Sub-GHz), and ultra-low-power firmware architectures.',
    },
    focusAreas: [
      { de: 'FreeRTOS & Bare-Metal C/C++', en: 'FreeRTOS & Bare-Metal C/C++' },
      { de: 'RF Signal Processing & Sub-GHz', en: 'RF Signal Processing & Sub-GHz' },
      { de: 'BOM & Schaltungsdesign', en: 'BOM & Circuit Topology' },
    ],
    socials: [
      { label: 'Projekte ansehen', url: '#projects', type: 'github' },
    ],
  },
  {
    id: 'team-cloud-frontend',
    name: 'Cloud & UI/UX Engineering',
    role: {
      de: 'Distributed Infrastructure & Apple-Grade UI',
      en: 'Distributed Infrastructure & Apple-Grade UI',
    },
    bio: {
      de: 'Verantwortlich für die nahtlose Server-Orchestrierung auf Linux-Basis sowie pixelgenaue, kompromisslos performante Web-Interfaces nach den Standards von Apple.',
      en: 'Responsible for hardened Linux backend orchestration and pixel-accurate, ultra-responsive web interfaces built to Apple.com design standards.',
    },
    focusAreas: [
      { de: 'Linux Server & systemd Daemons', en: 'Linux Server & systemd Daemons' },
      { de: 'WebSocket Telemetrie-Streaming', en: 'WebSocket Telemetry Streaming' },
      { de: 'Apple UI/UX & Liquid Motion', en: 'Apple UI/UX & Liquid Motion' },
    ],
    socials: [
      { label: 'Kontaktieren', url: 'mailto:jcob.glathe@gmail.com', type: 'email' },
    ],
  },
];
