# Jacob Glathe & Team — Native SwiftUI Apple App (Xcode Universal)

Transformation der Web-Plattform in eine reine, native **SwiftUI-Applikation in Swift** für **Xcode**, lauffähig als Universal-App auf **iOS, iPadOS und macOS** mit 100% lokaler Offline-Datenhaltung.

> [!IMPORTANT]
> **Bestätigte Spezifikationen aus der Nutzer-Rücksprache:**
> - **Architektur:** Reine, native SwiftUI-Applikation in modernem Swift (kein Web-Wrapper), voll nutzbar in Xcode.
> - **Zielplattformen:** Universal App für iOS (iPhone), iPadOS (iPad) und macOS (Mac Desktop).
> - **Daten- & Asset-Bereitstellung:** 100% lokaler Offline-Build in Swift-Strukturen und Xcode-Assets eingebettet, ohne externe Netzwerk-Abhängigkeit.
> - **Datenschutz-Garantie:** Kein GitHub-Nutzername oder Alias im gesamten Code oder UI; ausschließlich "Jacob Glathe & Team".

---

## 1. Overview & Core Concept

- **Was geliefert wird:** Ein vollständiges, einsatzbereites Xcode-Projektverzeichnis (`xcode/JacobGlatheApp/`), das direkt mit einem Doppelklick in Apple Xcode geöffnet, im iOS-Simulator ausgeführt oder als native Mac-App gestartet werden kann.
- **Native SwiftUI-Vorteile:**
  - 120Hz ProMotion-Fluidität auf iPhone und iPad, native macOS Window-Menüleiste.
  - Echte Apple Squircles via `.clipShape(RoundedRectangle(cornerRadius: 28, style: .continuous))`.
  - System-integrierter Dark Mode mit `Color.black`, `Color(red: 0.086, green: 0.086, blue: 0.09)`.
  - Haptisches Feedback (`UIImpactFeedbackGenerator` / `NSHapticFeedbackManager`) und native Zwischenablage.
  - Vollständige Offline-Verfügbarkeit aller Spezifikationen, Metriken und LinkedIn-Pitches.

---

## 2. User Experience & Visual Design in SwiftUI

### Key User Flows & Native Komponenten
1. **Adaptive Navigation & Window:**
   - **iOS / iPadOS:** Transparente, native Toolbar mit Liquid-Glass-Hintergrund, Sprachwechsler (`DE` / `EN`) und schnellem Kontakt-Trigger.
   - **macOS:** Elegantes Desktop-Fenster mit nativer Toolbar und anpassbarer Fenstergröße.
2. **Hero Section (`HeroSectionView`):**
   - Monumentale SF Pro Display Typografie mit nativem `LinearGradient`-Text (`.foregroundStyle(...)`).
   - Integrierter 4-Spalten KPI-Strip mit monospaced Ziffern (`.monospacedDigit()`).
3. **Bento Grid Showcase (`BentoGridView`):**
   - Adaptives Grid mit `LazyVGrid(columns: columns, spacing: 24)`.
   - Native Squircle Bento-Cards mit geschmeidiger `.scaleEffect`- und `.shadow`-Animation bei Hover (macOS) und Long-Press/Tap (iOS).
   - Unboxed Metadaten mit typografischen Trennern (`·`).
4. **Detail Inspection (`ProjectDetailSheet`):**
   - Öffnet über native `.sheet(item: ...)` Präsentation mit iOS Detents (`.presentationDetents([.large])`).
   - Native segmented `Picker` für Tabs: *Überblick*, *LinkedIn Insight*, *Hardware Specs*.
   - Direkter "In Zwischenablage kopieren"-Button mit nativem Feedback.
5. **Philosophie, Team & Kontakt:**
   - 3 Säulen als native Karten, Team-Profile und direkte Mail-Interaktion via `openURL(mailto:...)`.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  [X] [-] [+]  Jacob Glathe & Team — Native Apple App           DE | EN  [✉]  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                         PRÄZISION.                                           │
│                         VOM SILIZIUM BIS ZUR CLOUD.                          │
│                                                                              │
│    Wir entwickeln hardwarenahe IoT-Systeme auf ESP32-Basis, verteilte        │
│    Linux-Server-Infrastrukturen und meisterhafte Software-Plattformen.       │
│                                                                              │
│             [ Arbeiten entdecken ↓ ]          [ Kontakt anfragen ↗ ]         │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  BENTO GRID SHOWCASE (Continuous Squircle 28pt)                              │
│  ┌──────────────────────────────────────────────┬───────────────────────────┐│
│  │ 01. SignalMaster: ESP32 Flipper Alternative  │ 02. EdgeMesh Linux Hub    ││
│  │ Sub-GHz · RFID/NFC · C++/FreeRTOS · < 25 €   │ 250+ Nodes · systemd C++  ││
│  └──────────────────────────────────────────────┴───────────────────────────┘│
│  ┌──────────────────────────────┬───────────────────────────────────────────┐│
│  │ 03. High-Performance Web     │ 04. Synapse Embedded CI/CD                ││
│  │ Apple-Grade Polish · 60 FPS  │ Hardware-in-the-Loop · Docker Testing     ││
│  └──────────────────────────────┴───────────────────────────────────────────┘│
├──────────────────────────────────────────────────────────────────────────────┤
│  NATIVE FOOTER · © 2026 Jacob Glathe & Team · Universal macOS / iOS App     │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Technische Xcode-Projektarchitektur

```
xcode/
└── JacobGlatheApp/
    ├── Package.swift                     # Swift Package Manager Manifest (Xcode & CLI)
    ├── JacobGlatheApp.xcodeproj/         # Xcode Projektdatei
    │   └── project.pbxproj               # Projekt-Konfiguration für Xcode
    ├── Sources/
    │   ├── JacobGlatheApp.swift          # @main App Entry Point
    │   ├── Models/
    │   │   ├── Project.swift             # Identifiable Swift Structs & Specs
    │   │   ├── TeamMember.swift          # Team & Disziplinen Structs
    │   │   └── AppLanguage.swift         # Mehrsprachigkeits-State (DE/EN)
    │   ├── Data/
    │   │   ├── LocalProjectsData.swift   # Reale Projektdaten (Flipper Alt, Linux Hub)
    │   │   └── LocalContentData.swift    # Zweisprachige UI-Strings
    │   ├── Views/
    │   │   ├── ContentView.swift         # Haupt-ScrollView & Orchestrierung
    │   │   ├── Components/
    │   │   │   ├── NavbarView.swift      # Frosted Glass Header Toolbar
    │   │   │   ├── BentoCardView.swift   # Squircle Bento Card mit Micro-Interaktionen
    │   │   │   └── ProjectDetailSheet.swift # Native Detail-Ansicht
    │   │   └── Sections/
    │   │       ├── HeroSectionView.swift # SF Pro Typografie & KPI-Strip
    │   │       ├── BentoGridView.swift   # Adaptives Grid mit Filterung
    │   │       ├── PhilosophyView.swift  # 3 Prinzipien
    │   │       ├── TeamView.swift        # Teamkarten
    │   │       └── ContactView.swift     # Mail & Clipboard Anbindung
    │   └── Resources/
    │       └── Assets.xcassets/          # AppIcon & Image Assets
    └── README.md                         # Schritt-für-Schritt Anleitung für Xcode
```

---

## 4. Implementierungsschritte

1. **Swift Datenmodelle & Content (`Models/` & `Data/`):**
   - Übertragung aller realen Hardware- und Linux-Spezifikationen (SignalMaster ESP32, EdgeMesh, Synapse) in typensichere Swift-Dateien mit zweisprachiger Unterstützung.
2. **SwiftUI Bento-Card & Animationen (`Views/Components/`):**
   - Native Squircle-Ecken (`style: .continuous`), dezent animierte Elevation, unboxed Metadaten mit Mittelpunkt `·`.
3. **SwiftUI Sektionen & Main View (`Views/Sections/`):**
   - Hero mit SF Pro Typografie, modales Detail-Sheet mit Clipboard-Kopierfunktion für die LinkedIn-Pitches.
4. **Xcode-Projektdateien (`Package.swift`, `project.pbxproj`, `Info.plist`):**
   - Vollständige Konfiguration, sodass das Projekt direkt in Xcode kompiliert und gestartet werden kann.
5. **Verifikation & Dokumentation:**
   - Bereitstellung einer klaren Anleitung zum Öffnen in Xcode und Verifikation der Web-Koexistenz.
