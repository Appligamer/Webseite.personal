import SwiftUI
#if canImport(UIKit)
import UIKit
#elseif canImport(AppKit)
import AppKit
#endif

public struct ContactView: View {
    let language: AppLanguage
    @State private var copied = false

    public init(language: AppLanguage) {
        self.language = language
    }

    private func copyEmail() {
        #if canImport(UIKit)
        UIPasteboard.general.string = LocalContentData.contactEmail
        #elseif canImport(AppKit)
        NSPasteboard.general.clearContents()
        NSPasteboard.general.setString(LocalContentData.contactEmail, forType: .string)
        #endif

        copied = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            copied = false
        }
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text(language == .de ? "VERBINDUNG AUFNEHMEN" : "INITIATE DIALOGUE")
                .font(.system(size: 11, weight: .bold))
                .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

            Text(language == .de ? "Lassen Sie uns etwas Außergewöhnliches bauen" : "Let’s Build Something Extraordinary")
                .font(.system(size: 34, weight: .bold))
                .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))

            Text(language == .de
                ? "Ob maßgeschneiderte ESP32-Hardwareentwicklung, Linux-Server-Orchestrierung oder High-End App-Projekte — wir freuen uns auf Ihre Anfrage."
                : "Whether custom ESP32 hardware engineering, Linux server orchestration, or high-end native apps — we welcome ambitious inquiries."
            )
            .font(.system(size: 16, weight: .regular))
            .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
            .lineSpacing(4)

            // Email Card
            HStack(spacing: 16) {
                HStack(spacing: 10) {
                    Image(systemName: "envelope.fill")
                        .font(.system(size: 15))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                    Text(LocalContentData.contactEmail)
                        .font(.system(size: 15, weight: .semibold, design: .monospaced))
                        .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                }

                Spacer()

                Button {
                    copyEmail()
                } label: {
                    HStack(spacing: 4) {
                        Image(systemName: copied ? "checkmark" : "doc.on.doc")
                            .font(.system(size: 12, weight: .semibold))
                        Text(copied ? (language == .de ? "Kopiert" : "Copied") : (language == .de ? "Kopieren" : "Copy"))
                            .font(.system(size: 12, weight: .semibold))
                    }
                    .padding(.horizontal, 12)
                    .padding(.vertical, 8)
                    .background(Color.white.opacity(0.1))
                    .foregroundStyle(.white)
                    .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
                }
                .buttonStyle(.plain)

                Link(destination: URL(string: "mailto:\(LocalContentData.contactEmail)?subject=Projektanfrage")!) {
                    HStack(spacing: 4) {
                        Text(language == .de ? "Mail senden" : "Send Mail")
                            .font(.system(size: 12, weight: .semibold))
                        Image(systemName: "arrow.up.right")
                            .font(.system(size: 11, weight: .semibold))
                    }
                    .padding(.horizontal, 14)
                    .padding(.vertical, 8)
                    .background(Color(red: 0.0, green: 0.478, blue: 1.0))
                    .foregroundStyle(.white)
                    .clipShape(RoundedRectangle(cornerRadius: 10, style: .continuous))
                }
            }
            .padding(18)
            .background(Color(red: 0.086, green: 0.086, blue: 0.09))
            .clipShape(RoundedRectangle(cornerRadius: 18, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: 18, style: .continuous)
                    .stroke(Color.white.opacity(0.08), lineWidth: 1)
            )
        }
        .padding(32)
        .background(
            RoundedRectangle(cornerRadius: 32, style: .continuous)
                .fill(Color(red: 0.05, green: 0.05, blue: 0.06))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 32, style: .continuous)
                .stroke(Color.white.opacity(0.08), lineWidth: 1)
        )
        .padding(.vertical, 24)
    }
}
