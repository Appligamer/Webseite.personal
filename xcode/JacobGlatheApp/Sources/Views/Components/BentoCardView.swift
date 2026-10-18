import SwiftUI

public struct BentoCardView: View {
    let project: Project
    let language: AppLanguage
    let onSelect: (Project) -> Void

    @State private var isHovered = false

    public init(project: Project, language: AppLanguage, onSelect: @escaping (Project) -> Void) {
        self.project = project
        self.language = language
        self.onSelect = onSelect
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: 18) {
            // Header Zone: Category, Headline & Arrow
            HStack(alignment: .top) {
                HStack(spacing: 6) {
                    Image(systemName: "cpu")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                    Text(project.category.localizedName(for: language).uppercased())
                        .font(.system(size: 11, weight: .bold))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                    Text("·")
                        .foregroundStyle(Color.white.opacity(0.2))

                    Text(project.headline.text(for: language))
                        .font(.system(size: 12, weight: .medium))
                        .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
                        .lineLimit(1)
                }

                Spacer()

                ZStack {
                    Circle()
                        .fill(Color.white.opacity(isHovered ? 0.15 : 0.05))
                        .frame(width: 32, height: 32)

                    Image(systemName: "arrow.up.right")
                        .font(.system(size: 13, weight: .semibold))
                        .foregroundStyle(isHovered ? .white : Color(red: 0.53, green: 0.53, blue: 0.55))
                }
            }

            // Project Title
            Text(project.title.text(for: language))
                .font(.system(size: 20, weight: .bold, design: .default))
                .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                .lineSpacing(4)
                .fixedSize(horizontal: false, vertical: true)

            // Short Description
            Text(project.shortDescription.text(for: language))
                .font(.system(size: 14, weight: .regular))
                .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
                .lineSpacing(4)

            // Visual Media Showcase Frame
            ZStack(alignment: .bottomLeading) {
                // Background visual container
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .fill(
                        LinearGradient(
                            colors: [
                                Color(red: 0.11, green: 0.11, blue: 0.12),
                                Color(red: 0.16, green: 0.16, blue: 0.18)
                            ],
                            startPoint: .topLeading,
                            endPoint: .bottomTrailing
                        )
                    )
                    .frame(height: 190)
                    .overlay(
                        VStack(spacing: 8) {
                            Image(systemName: project.category == .hardware ? "antenna.radiowaves.left.and.right" : "server.rack")
                                .font(.system(size: 34, weight: .light))
                                .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0).opacity(0.8))

                            Text(project.category == .hardware ? "ESP32 Sub-GHz Silicon" : "Linux Micro-Daemon Hub")
                                .font(.system(size: 11, weight: .medium, design: .monospaced))
                                .foregroundStyle(Color.white.opacity(0.5))
                        }
                    )

                // Key Metric Pill Overlay (Monospaced Ziffern)
                if let firstMetric = project.metrics.first {
                    HStack {
                        Text(firstMetric.label.text(for: language))
                            .font(.system(size: 11, weight: .medium))
                            .foregroundStyle(Color(red: 0.7, green: 0.7, blue: 0.72))

                        Spacer()

                        Text(firstMetric.value)
                            .font(.system(size: 12, weight: .bold, design: .monospaced))
                            .foregroundStyle(.white)
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 8)
                    .background(Color.black.opacity(0.75).background(.ultraThinMaterial))
                    .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
                    .padding(10)
                }
            }

            // Bottom Tech Stack (Zero-Pill: Unboxed mit Trennern)
            HStack(spacing: 8) {
                ForEach(Array(project.techStack.prefix(4).enumerated()), id: \.offset) { index, tech in
                    Text(tech)
                        .font(.system(size: 12, weight: .medium))
                        .foregroundStyle(Color(red: 0.6, green: 0.6, blue: 0.62))

                    if index < min(project.techStack.count, 4) - 1 {
                        Text("·")
                            .foregroundStyle(Color.white.opacity(0.2))
                    }
                }
            }
            .padding(.top, 4)
        }
        .padding(24)
        .background(Color(red: 0.086, green: 0.086, blue: 0.09))
        .clipShape(RoundedRectangle(cornerRadius: 28, style: .continuous))
        .overlay(
            RoundedRectangle(cornerRadius: 28, style: .continuous)
                .stroke(isHovered ? Color.white.opacity(0.2) : Color.white.opacity(0.08), lineWidth: 1)
        )
        .shadow(color: Color.black.opacity(isHovered ? 0.6 : 0.3), radius: isHovered ? 24 : 12, y: isHovered ? 12 : 6)
        .scaleEffect(isHovered ? 1.012 : 1.0)
        .animation(.spring(response: 0.3, dampingFraction: 0.75), value: isHovered)
        #if os(macOS)
        .onHover { hovering in
            isHovered = hovering
        }
        #endif
        .contentShape(RoundedRectangle(cornerRadius: 28, style: .continuous))
        .onTapGesture {
            onSelect(project)
        }
    }
}
