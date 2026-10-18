import SwiftUI

public struct TeamView: View {
    let language: AppLanguage

    public init(language: AppLanguage) {
        self.language = language
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: 28) {
            VStack(alignment: .leading, spacing: 8) {
                Text(language == .de ? "KÖPFE & EXPERTISE" : "PEOPLE & EXPERTISE")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                Text(language == .de ? "Jacob Glathe & Engineering Team" : "Jacob Glathe & Engineering Team")
                    .font(.system(size: 34, weight: .bold))
                    .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))

                Text(language == .de
                    ? "Ein agiles Team an der Schnittstelle von hardwarenaher Entwicklung, Linux-Infrastruktur und Benutzeroberflächen."
                    : "An agile collective operating across bare-metal systems, Linux server daemons, and polished interfaces."
                )
                .font(.system(size: 16, weight: .regular))
                .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
            }

            LazyVGrid(columns: [GridItem(.adaptive(minimum: 300), spacing: 20)], spacing: 20) {
                ForEach(LocalTeamData.members) { member in
                    VStack(alignment: .leading, spacing: 16) {
                        HStack(spacing: 14) {
                            // Initials Avatar
                            Text(member.name.prefix(2).uppercased())
                                .font(.system(size: 16, weight: .bold, design: .monospaced))
                                .foregroundStyle(.white)
                                .frame(width: 48, height: 48)
                                .background(
                                    LinearGradient(
                                        colors: [Color(red: 0.15, green: 0.15, blue: 0.18), Color(red: 0.25, green: 0.25, blue: 0.30)],
                                        startPoint: .topLeading,
                                        endPoint: .bottomTrailing
                                    )
                                )
                                .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))

                            VStack(alignment: .leading, spacing: 2) {
                                Text(member.name)
                                    .font(.system(size: 18, weight: .bold))
                                    .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))

                                Text(member.role.text(for: language))
                                    .font(.system(size: 12, weight: .medium))
                                    .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                            }
                        }

                        Text(member.bio.text(for: language))
                            .font(.system(size: 13, weight: .regular))
                            .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
                            .lineSpacing(4)

                        // Focus Areas
                        VStack(alignment: .leading, spacing: 6) {
                            Text(language == .de ? "Fokusbereiche:" : "Focus:")
                                .font(.system(size: 11, weight: .bold))
                                .foregroundStyle(Color.white.opacity(0.4))

                            ForEach(member.focusAreas, id: \.de) { area in
                                HStack(spacing: 6) {
                                    Circle()
                                        .fill(Color(red: 0.16, green: 0.59, blue: 1.0))
                                        .frame(width: 4, height: 4)
                                    Text(area.text(for: language))
                                        .font(.system(size: 12, weight: .medium))
                                        .foregroundStyle(Color(red: 0.8, green: 0.8, blue: 0.82))
                                }
                            }
                        }
                    }
                    .padding(24)
                    .background(Color(red: 0.086, green: 0.086, blue: 0.09))
                    .clipShape(RoundedRectangle(cornerRadius: 24, style: .continuous))
                    .overlay(
                        RoundedRectangle(cornerRadius: 24, style: .continuous)
                            .stroke(Color.white.opacity(0.08), lineWidth: 1)
                    )
                }
            }
        }
        .padding(.vertical, 32)
    }
}
