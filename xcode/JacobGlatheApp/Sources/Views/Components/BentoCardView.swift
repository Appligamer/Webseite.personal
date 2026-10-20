import SwiftUI

public struct BentoCardView: View {
    let project: Project
    let language: AppLanguage
    let onSelect: () -> Void

    @State private var isHovered = false

    public init(project: Project, language: AppLanguage, onSelect: @escaping () -> Void) {
        self.project = project
        self.language = language
        self.onSelect = onSelect
    }

    public var body: some View {
        Button(action: onSelect) {
            VStack(alignment: .leading, spacing: 18) {
                // Top Header Zone
                HStack(alignment: .top) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(project.category.localizedName(for: language).uppercased())
                            .font(.system(size: 11, weight: .bold))
                            .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                        Text(project.headline.text(for: language))
                            .font(.system(size: 12, weight: .medium))
                            .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
                            .lineLimit(2)
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

                // Visual Media Showcase Frame with SafeImageView
                ZStack(alignment: .bottomLeading) {
                    SafeImageView(name: project.imageName, height: 190, cornerRadius: 18)
                        .overlay(
                            LinearGradient(
                                colors: [Color.clear, Color.black.opacity(0.65)],
                                startPoint: .center,
                                endPoint: .bottom
                            )
                            .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
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
                        .background(Color.black.opacity(0.85).background(.ultraThinMaterial))
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
            .background(Color(red: 0.07, green: 0.07, blue: 0.08))
            .clipShape(RoundedRectangle(cornerRadius: 28, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 28, style: .continuous)
                    .stroke(
                        isHovered ? Color.white.opacity(0.2) : Color.white.opacity(0.08),
                        lineWidth: 1
                    )
            )
            .shadow(color: Color.black.opacity(0.5), radius: isHovered ? 20 : 10, x: 0, y: isHovered ? 12 : 6)
        }
        .buttonStyle(.plain)
        .onHover { hovering in
            withAnimation(.spring(response: 0.3, dampingFraction: 0.8)) {
                isHovered = hovering
            }
        }
    }
}
