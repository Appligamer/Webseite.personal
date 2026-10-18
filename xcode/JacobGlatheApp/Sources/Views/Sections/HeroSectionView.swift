import SwiftUI

public struct HeroSectionView: View {
    let language: AppLanguage
    let onExplore: () -> Void

    public init(language: AppLanguage, onExplore: @escaping () -> Void) {
        self.language = language
        self.onExplore = onExplore
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: 28) {
            // Kicker
            HStack(spacing: 8) {
                Image(systemName: "cpu")
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                Text(LocalContentData.heroKicker.text(for: language))
                    .font(.system(size: 13, weight: .semibold))
                    .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
            }

            // Massive Headlines
            VStack(alignment: .leading, spacing: 8) {
                Text(LocalContentData.heroTitleLine1.text(for: language))
                    .font(.system(size: 54, weight: .black, design: .default))
                    .foregroundStyle(
                        LinearGradient(
                            colors: [
                                Color(red: 0.98, green: 0.98, blue: 0.99),
                                Color(red: 0.85, green: 0.85, blue: 0.88),
                                Color(red: 0.65, green: 0.65, blue: 0.70)
                            ],
                            startPoint: .top,
                            endPoint: .bottom
                        )
                    )

                Text(LocalContentData.heroTitleLine2.text(for: language))
                    .font(.system(size: 34, weight: .bold, design: .default))
                    .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
            }

            // Lead Subtitle
            Text(LocalContentData.heroSubtitle.text(for: language))
                .font(.system(size: 17, weight: .regular))
                .foregroundStyle(Color(red: 0.65, green: 0.65, blue: 0.68))
                .lineSpacing(6)
                .frame(maxWidth: 720, alignment: .leading)

            // Action Buttons
            HStack(spacing: 16) {
                Button {
                    onExplore()
                } label: {
                    HStack(spacing: 8) {
                        Text(language == .de ? "Ausgewählte Arbeiten entdecken" : "Explore Works")
                            .font(.system(size: 14, weight: .semibold))
                        Image(systemName: "arrow.down")
                            .font(.system(size: 13, weight: .semibold))
                    }
                    .padding(.horizontal, 20)
                    .padding(.vertical, 12)
                    .background(Color(red: 0.0, green: 0.478, blue: 1.0))
                    .foregroundStyle(.white)
                    .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
                    .shadow(color: Color(red: 0.0, green: 0.478, blue: 1.0).opacity(0.35), radius: 10, y: 4)
                }
                .buttonStyle(.plain)

                Link(destination: URL(string: "mailto:\(LocalContentData.contactEmail)?subject=Projektanfrage")!) {
                    HStack(spacing: 8) {
                        Text(language == .de ? "Projekt anfragen" : "Initiate Contact")
                            .font(.system(size: 14, weight: .semibold))
                        Image(systemName: "arrow.up.right")
                            .font(.system(size: 13, weight: .semibold))
                    }
                    .padding(.horizontal, 20)
                    .padding(.vertical, 12)
                    .background(Color.white.opacity(0.06))
                    .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                    .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
                    .overlay(
                        RoundedRectangle(cornerRadius: 14, style: .continuous)
                            .stroke(Color.white.opacity(0.1), lineWidth: 1)
                    )
                }
            }
            .padding(.top, 8)

            // 4-Column KPI / Metrics Strip
            LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible()), GridItem(.flexible())], spacing: 16) {
                ForEach(LocalContentData.heroMetrics) { metric in
                    VStack(alignment: .leading, spacing: 6) {
                        Text(metric.label.text(for: language))
                            .font(.system(size: 11, weight: .medium))
                            .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))

                        Text(metric.value)
                            .font(.system(size: 20, weight: .bold, design: .monospaced))
                            .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                    }
                    .padding(18)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color(red: 0.086, green: 0.086, blue: 0.09))
                    .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
                    .overlay(
                        RoundedRectangle(cornerRadius: 18, style: .continuous)
                            .stroke(Color.white.opacity(0.08), lineWidth: 1)
                    )
                }
            }
            .padding(.top, 16)
        }
        .padding(.top, 36)
        .padding(.bottom, 24)
    }
}
