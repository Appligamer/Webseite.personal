import WidgetKit
import SwiftUI

// MARK: - Timeline Entry
public struct JacobGlatheWidgetEntry: TimelineEntry {
    public let date: Date
    public let brandName: String
    public let activeNodeCount: Int
    public let featuredProjectTitle: String
    public let systemStatus: String

    public init(
        date: Date = Date(),
        brandName: String = "Jacob Glathe & Team",
        activeNodeCount: Int = 5,
        featuredProjectTitle: String = "SignalMaster RF",
        systemStatus: String = "ONLINE"
    ) {
        self.date = date
        self.brandName = brandName
        self.activeNodeCount = activeNodeCount
        self.featuredProjectTitle = featuredProjectTitle
        self.systemStatus = systemStatus
    }
}

// MARK: - Timeline Provider
public struct JacobGlatheTimelineProvider: TimelineProvider {
    public init() {}

    public func placeholder(in context: Context) -> JacobGlatheWidgetEntry {
        JacobGlatheWidgetEntry()
    }

    public func getSnapshot(in context: Context, completion: @escaping (JacobGlatheWidgetEntry) -> Void) {
        completion(JacobGlatheWidgetEntry())
    }

    public func getTimeline(in context: Context, completion: @escaping (Timeline<JacobGlatheWidgetEntry>) -> Void) {
        let entry = JacobGlatheWidgetEntry()
        // Refresh every 30 minutes
        let nextUpdate = Calendar.current.date(byAdding: .minute, value: 30, to: Date()) ?? Date()
        let timeline = Timeline(entries: [entry], policy: .after(nextUpdate))
        completion(timeline)
    }
}

// MARK: - Lock Screen & Home Screen Views
public struct JacobGlatheWidgetEntryView: View {
    var entry: JacobGlatheTimelineProvider.Entry
    @Environment(\.widgetFamily) var family

    public init(entry: JacobGlatheTimelineProvider.Entry) {
        self.entry = entry
    }

    public var body: some View {
        switch family {
        // MARK: Sperrbildschirm - Accessory Inline
        case .accessoryInline:
            HStack(spacing: 4) {
                Image(systemName: "cpu")
                Text("JG & Team · 5 Nodes Active")
            }

        // MARK: Sperrbildschirm - Accessory Circular
        case .accessoryCircular:
            ZStack {
                AccessoryWidgetBackground()
                VStack(spacing: 2) {
                    Image(systemName: "antenna.radiowaves.left.and.right")
                        .font(.system(size: 13, weight: .bold))
                    Text("5 NODES")
                        .font(.system(size: 9, weight: .black, design: .monospaced))
                }
            }

        // MARK: Sperrbildschirm - Accessory Rectangular
        case .accessoryRectangular:
            VStack(alignment: .leading, spacing: 3) {
                HStack(spacing: 4) {
                    Circle()
                        .fill(Color.primary)
                        .frame(width: 6, height: 6)
                    Text("JACOB GLATHE & TEAM")
                        .font(.system(size: 10, weight: .bold, design: .monospaced))
                }
                Text("Hardware: \(entry.featuredProjectTitle)")
                    .font(.system(size: 12, weight: .semibold))
                    .lineLimit(1)
                Text("\(entry.activeNodeCount) Embedded & Linux Nodes")
                    .font(.system(size: 10, weight: .medium))
                    .foregroundStyle(.secondary)
            }

        // MARK: Home Screen - System Small
        case .systemSmall:
            VStack(alignment: .leading, spacing: 10) {
                HStack {
                    ZStack {
                        Circle()
                            .fill(Color.white.opacity(0.1))
                            .frame(width: 32, height: 32)
                        Image(systemName: "cpu")
                            .font(.system(size: 14, weight: .bold))
                            .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                    }
                    Spacer()
                    Text(entry.systemStatus)
                        .font(.system(size: 9, weight: .bold, design: .monospaced))
                        .padding(.horizontal, 6)
                        .padding(.vertical, 3)
                        .background(Color.green.opacity(0.2))
                        .foregroundStyle(Color.green)
                        .clipShape(Capsule())
                }

                Spacer()

                VStack(alignment: .leading, spacing: 2) {
                    Text(entry.brandName)
                        .font(.system(size: 13, weight: .bold))
                        .foregroundStyle(.white)
                    Text(entry.featuredProjectTitle)
                        .font(.system(size: 11, weight: .medium))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                    Text("\(entry.activeNodeCount) Active Nodes")
                        .font(.system(size: 10, weight: .regular, design: .monospaced))
                        .foregroundStyle(Color.white.opacity(0.5))
                }
            }
            .padding(14)
            .background(Color(red: 0.08, green: 0.08, blue: 0.09))

        // MARK: Home Screen - System Medium
        case .systemMedium:
            HStack(spacing: 16) {
                VStack(alignment: .leading, spacing: 8) {
                    HStack(spacing: 6) {
                        Image(systemName: "cpu")
                            .font(.system(size: 12, weight: .bold))
                            .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                        Text(entry.brandName)
                            .font(.system(size: 12, weight: .bold))
                            .foregroundStyle(.white)
                    }

                    Text("Cyber-Physical Systems & Server Infrastructure")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundStyle(Color(red: 0.85, green: 0.85, blue: 0.88))
                        .lineLimit(2)

                    Spacer()

                    HStack(spacing: 8) {
                        Label("SignalMaster", systemImage: "antenna.radiowaves.left.and.right")
                        Label("JARVIS Core", systemImage: "server.rack")
                    }
                    .font(.system(size: 10, weight: .medium, design: .monospaced))
                    .foregroundStyle(Color.white.opacity(0.5))
                }

                Spacer()

                VStack(spacing: 6) {
                    Text("\(entry.activeNodeCount)")
                        .font(.system(size: 32, weight: .bold, design: .monospaced))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                    Text("ACTIVE NODES")
                        .font(.system(size: 9, weight: .bold, design: .monospaced))
                        .foregroundStyle(Color.white.opacity(0.4))
                }
                .padding(.vertical, 12)
                .padding(.horizontal, 16)
                .background(Color.white.opacity(0.04))
                .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
            }
            .padding(16)
            .background(Color(red: 0.08, green: 0.08, blue: 0.09))

        default:
            VStack(alignment: .leading, spacing: 10) {
                Text(entry.brandName)
                    .font(.headline)
                    .foregroundStyle(.white)
                Text("5 Hardware & Cloud Nodes Online")
                    .font(.subheadline)
                    .foregroundStyle(.secondary)
            }
            .padding()
            .background(Color(red: 0.08, green: 0.08, blue: 0.09))
        }
    }
}

// MARK: - Main Widget Declaration
public struct JacobGlatheWidget: Widget {
    public let kind: String = "JacobGlatheWidget"

    public init() {}

    public var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: JacobGlatheTimelineProvider()) { entry in
            JacobGlatheWidgetEntryView(entry: entry)
                .containerBackground(Color(red: 0.08, green: 0.08, blue: 0.09), for: .widget)
        }
        .configurationDisplayName("Jacob Glathe & Team")
        .description("Live-Status der Hardware-Knoten, Linux-Server-Daemons und Projekt-Telemetrie.")
        .supportedFamilies([
            .systemSmall,
            .systemMedium,
            .systemLarge,
            .accessoryInline,
            .accessoryCircular,
            .accessoryRectangular
        ])
    }
}

// MARK: - Kontrollzentrum (Control Center) Widget (iOS 18+)
#if canImport(AppIntents) && compiler(>=6.0)
import AppIntents

@available(iOS 18.0, macOS 15.0, *)
public struct OpenSignalMasterIntent: AppIntent {
    public static var title: LocalizedStringResource = "SignalMaster RF Analyzer öffnen"
    public static var description = IntentDescription("Startet die SignalMaster Pentest Telemetrie direkt.")

    public init() {}

    public func perform() async throws -> some IntentResult {
        return .result()
    }
}

@available(iOS 18.0, macOS 15.0, *)
public struct JacobGlatheControlWidget: ControlWidget {
    public let kind: String = "JacobGlatheControlWidget"

    public init() {}

    public var body: some ControlWidgetConfiguration {
        StaticControlConfiguration(kind: kind) {
            ControlWidgetButton(action: OpenSignalMasterIntent()) {
                Label("SignalMaster", systemImage: "antenna.radiowaves.left.and.right")
            }
        }
        .displayName("SignalMaster Steuerung")
        .description("Schnellzugriff auf Hardware-Sicherheitsanalyse im Kontrollzentrum.")
    }
}
#endif
