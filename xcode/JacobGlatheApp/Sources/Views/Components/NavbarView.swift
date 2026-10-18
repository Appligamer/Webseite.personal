import SwiftUI

public struct NavbarView: View {
    @Bindable var state: AppState

    public init(state: AppState) {
        self.state = state
    }

    public var body: some View {
        HStack(spacing: 20) {
            // Brand Wordmark
            Text(LocalContentData.brandName)
                .font(.system(size: 17, weight: .bold, design: .default))
                .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))

            Spacer()

            // Language Switcher (Segmented or Toggle)
            Picker("Sprache", selection: $state.language) {
                ForEach(AppLanguage.allCases) { lang in
                    Text(lang.rawValue).tag(lang)
                }
            }
            .pickerStyle(.segmented)
            .frame(width: 100)

            // Primary Contact Action
            Link(destination: URL(string: "mailto:\(LocalContentData.contactEmail)?subject=Projektanfrage")!) {
                HStack(spacing: 4) {
                    Text(state.language == .de ? "Kontakt" : "Contact")
                        .font(.system(size: 13, weight: .semibold))
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
        .padding(.horizontal, 24)
        .padding(.vertical, 14)
        .background(
            Color.black.opacity(0.8)
                .background(.ultraThinMaterial)
        )
        .overlay(
            Rectangle()
                .frame(height: 1)
                .foregroundStyle(Color.white.opacity(0.08)),
            alignment: .bottom
        )
    }
}
