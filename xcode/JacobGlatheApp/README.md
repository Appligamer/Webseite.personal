# Jacob Glathe & Team — Native Apple App (SwiftUI & Xcode)

Dieses Verzeichnis enthält die vollständige, native **SwiftUI Universal App** für **Xcode** (iOS, iPadOS und macOS).

---

## 🚀 Wie man das Projekt in Xcode startet

### Option 1: Direkt über Xcode öffnen (Empfohlen)

1. Öffne das Terminal auf deinem Mac und navigiere in diesen Ordner:
   ```bash
   cd xcode/JacobGlatheApp
   open Package.swift
   ```
   *Alternativ:* Starte Xcode, wähle **File → Open…** und wähle den Ordner `xcode/JacobGlatheApp` oder die Datei `Package.swift` aus.

2. **Zielgerät auswählen:**
   - Oben in der Toolbar von Xcode das gewünschte Ziel auswählen (z. B. **iPhone 16 Pro Simulator**, **iPad Pro**, oder **My Mac**).

3. **Starten:**
   - Drücke `⌘ + R` (Command + R) oder klicke auf den Play-Button oben links.
   - Die App kompiliert und startet sofort als flüssige native Apple App.

---

## 📱 Features der nativen SwiftUI-App

- **100% Native SwiftUI & SF Pro Typografie:**
  - Echte Apple Squircles mit `.clipShape(RoundedRectangle(cornerRadius: 28, style: .continuous))`
  - Flüssige 120Hz ProMotion-Scroll-Performance und adaptive Fenstergrößen unter macOS
  - System-integriertes Dark Mode Farbschema (`#000000` Canvas, `#161617` Bento-Karten)
- **Offline-First & Autark:**
  - Sämtliche Hardware-Spezifikationen, BOMs und Projektbeschreibungen sind lokal im Swift-Bundle hinterlegt.
  - Funktioniert vollständig ohne Internetverbindung.
- **Interaktive Detail-Sheets:**
  - Native Modal-Sheets mit Tabs (*Überblick*, *LinkedIn Insight*, *Hardware Specs*).
  - Ein-Klick-Kopierfunktion in das native Clipboard (`UIPasteboard` / `NSPasteboard`).
- **Zweisprachig (DE / EN):**
  - Direkter Segmented-Picker in der Navigationsleiste zur Umschaltung aller Texte.
- **Datenschutz & Anonymität:**
  - Der persönliche GitHub-Nutzername ist an keiner Stelle im Code oder UI enthalten.

---

## 🛠 Systemanforderungen

- **macOS:** macOS Sonoma (14.0) oder neuer / macOS Sequoia
- **Xcode:** Xcode 15.0 oder neuer (mit Swift 5.9+)
- **Targets:** iOS 17+, iPadOS 17+, macOS 14+
