import Foundation

public struct PhilosophyItem: Identifiable, Hashable {
    public var id: String { number }
    public let number: String
    public let title: LocalizedText
    public let description: LocalizedText
}

public enum LocalContentData {
    public static let brandName = "Jacob Glathe & Team"
    public static let contactEmail = "jcob.glathe@gmail.com"

    public static let heroKicker = LocalizedText(
        de: "Embedded Systems · Linux Server · High-End Engineering",
        en: "Embedded Systems · Linux Server · High-End Engineering"
    )

    public static let heroTitleLine1 = LocalizedText(
        de: "PRÄZISION.",
        en: "PRECISION."
    )

    public static let heroTitleLine2 = LocalizedText(
        de: "VOM SILIZIUM BIS ZUR CLOUD.",
        en: "FROM SILICON TO CLOUD."
    )

    public static let heroSubtitle = LocalizedText(
        de: "Wir entwickeln hardwarenahe IoT-Systeme auf ESP32-Basis, vernetzte Linux-Server-Infrastrukturen und meisterhafte Software-Plattformen — getrieben von kompromissloser Ingenieurskunst und Open-Source-Transparenz.",
        en: "We architect bare-metal IoT systems on ESP32, distributed Linux server infrastructure, and masterful software platforms — guided by uncompromising engineering rigor and open-source accessibility."
    )

    public static let heroMetrics: [ProjectMetric] = [
        ProjectMetric(label: LocalizedText(de: "Hardware-BOM Multi-Tool", en: "Hardware BOM Multi-Tool"), value: "< 25 €"),
        ProjectMetric(label: LocalizedText(de: "Integrierte Architektur", en: "Integrated Architecture"), value: "ESP32 + Linux"),
        ProjectMetric(label: LocalizedText(de: "Open-Source Philosophie", en: "Open Source Philosophy"), value: "100 %"),
        ProjectMetric(label: LocalizedText(de: "Apple UI Fluidität", en: "Apple UI Fluidity"), value: "120 FPS")
    ]

    public static let philosophyPillars: [PhilosophyItem] = [
        PhilosophyItem(
            number: "01",
            title: LocalizedText(de: "Hardware-Demokratisierung", en: "Hardware Democratization"),
            description: LocalizedText(
                de: "Professionelle Hardware-Sicherheits- und Analysewerkzeuge dürfen keine Hunderte Euro kosten. Durch intelligentes Schaltungsdesign mit leicht zugänglichen ESP32-Komponenten machen wir Cyber-Physical Research für jeden Entwickler erschwinglich.",
                en: "Professional hardware security and signal analysis tools should not cost hundreds of dollars. Through intelligent circuit topology with accessible ESP32 components, we make cyber-physical research attainable for every engineer."
            )
        ),
        PhilosophyItem(
            number: "02",
            title: LocalizedText(de: "Bare-Metal trifft Linux-Robustheit", en: "Bare-Metal Meets Linux Rigor"),
            description: LocalizedText(
                de: "Wir überbrücken den Graben zwischen 8/32-Bit Mikrocontrollern und Enterprise-Linux-Servern. Schnelle, zuverlässige Daemons, minimale CPU-Last und sichere Datenströme garantieren langfristige Systemstabilität.",
                en: "We bridge the divide between low-level microcontrollers and enterprise Linux hosts. Resilient system daemons, minimal host CPU overhead, and encrypted telemetry guarantee long-term operational autonomy."
            )
        ),
        PhilosophyItem(
            number: "03",
            title: LocalizedText(de: "Apple-Ästhetik & Null Bloat", en: "Apple Aesthetics & Zero Bloat"),
            description: LocalizedText(
                de: "Keine überfrachteten Standard-Templates. Wir setzen auf radikale Klarheit: großzügiger Negativraum, edle Typografie, hauchdünne Konturen und flüssige ProMotion Micro-Interaktionen.",
                en: "No bloated generic templates. We practice deliberate visual restraint: generous whitespace, elegant typography, hairline border elevation, and fluid ProMotion micro-interactions."
            )
        )
    ]
}
