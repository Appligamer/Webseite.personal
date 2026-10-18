import SwiftUI

public struct PhilosophyView: View {
    let language: AppLanguage

    public init(language: AppLanguage) {
        self.language = language
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: 28) {
            VStack(alignment: .leading, spacing: 8) {
                Text(language == .de ? "INGENIEURS-GRUNDSÄTZE" : "ENGINEERING PRINCIPLES")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                Text(language == .de ? "Gebaut nach höchsten Maßstäben" : "Built to Uncompromising Standards")
                    .font(.system(size: 34, weight: .bold))
                    .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))

                Text(language == .de
                    ? "Drei fundamentale Prinzipien leiten jede Schaltung, jede Zeile Firmware und jedes Interface."
                    : "Three fundamental principles guide every schematic, every line of firmware, and every interface."
                )
                .font(.system(size: 16, weight: .regular))
                .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
            }

            LazyVGrid(columns: [GridItem(.adaptive(minimum: 280), spacing: 20)], spacing: 20) {
                ForEach(LocalContentData.philosophyPillars) { item in
                    VStack(alignment: .leading, spacing: 14) {
                        HStack {
                            Text(item.number)
                                .font(.system(size: 28, weight: .light, design: .monospaced))
                                .foregroundStyle(Color.white.opacity(0.3))

                            Spacer()

                            Image(systemName: item.number == "01" ? "wrench.and.screwdriver" : (item.number == "02" ? "shield.lefthalf.filled" : "sparkles"))
                                .font(.system(size: 18))
                                .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                        }

                        Text(item.title.text(for: language))
                            .font(.system(size: 18, weight: .bold))
                            .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))

                        Text(item.description.text(for: language))
                            .font(.system(size: 14, weight: .regular))
                            .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
                            .lineSpacing(4)
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
