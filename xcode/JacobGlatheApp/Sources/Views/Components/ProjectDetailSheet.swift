import SwiftUI

public struct ProjectDetailSheet: View {
    let project: Project
    let language: AppLanguage
    @Environment(\.dismiss) private var dismiss
    @State private var selectedTab = 0
    @State private var copied = false

    public init(project: Project, language: AppLanguage) {
        self.project = project
        self.language = language
    }

    private func copyToClipboard(_ text: String) {
        #if os(iOS)
        UIPasteboard.general.string = text
        #elseif os(macOS)
        NSPasteboard.general.clearContents()
        NSPasteboard.general.setString(text, forType: .string)
        #endif
        copied = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
            copied = false
        }
    }

    public var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    // Headline kicker
                    HStack(spacing: 6) {
                        Text(project.category.localizedName(for: language).uppercased())
                            .font(.system(size: 11, weight: .bold))
                            .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                        Text("·")
                            .foregroundStyle(Color.white.opacity(0.2))

                        Text(project.headline.text(for: language))
                            .font(.system(size: 12, weight: .medium))
                            .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
                    }

                    // Title
                    Text(project.title.text(for: language))
                        .font(.system(size: 26, weight: .bold, design: .default))
                        .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                        .lineSpacing(4)

                    // Project High-Res Visual Frame with SafeImageView
                    SafeImageView(name: project.imageName, height: 240, cornerRadius: 20)
                        .overlay(
                            RoundedRectangle(cornerRadius: 20, style: .continuous)
                                .stroke(Color.white.opacity(0.1), lineWidth: 1)
                        )

                    // Short Description
                    Text(project.shortDescription.text(for: language))
                        .font(.system(size: 15, weight: .regular))
                        .foregroundStyle(Color(red: 0.7, green: 0.7, blue: 0.72))
                        .lineSpacing(4)

                    // 4-Column Key Metrics Strip
                    LazyVGrid(columns: [GridItem(.flexible()), GridItem(.flexible())], spacing: 12) {
                        ForEach(project.metrics) { metric in
                            VStack(alignment: .leading, spacing: 4) {
                                Text(metric.label.text(for: language))
                                    .font(.system(size: 11, weight: .medium))
                                    .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))

                                Text(metric.value)
                                    .font(.system(size: 16, weight: .bold, design: .monospaced))
                                    .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                            }
                            .padding(14)
                            .frame(maxWidth: .infinity, alignment: .leading)
                            .background(Color.white.opacity(0.04))
                            .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
                        }
                    }

                    // Segmented Tabs
                    Picker("Ansicht", selection: $selectedTab) {
                        Text(language == .de ? "Überblick" : "Overview").tag(0)
                        Text("LinkedIn Pitch").tag(1)
                        Text(language == .de ? "Hardware Specs" : "Specs").tag(2)
                    }
                    .pickerStyle(.segmented)
                    .padding(.vertical, 8)

                    // Tab Content
                    if selectedTab == 0 {
                        // Overview Tab
                        VStack(alignment: .leading, spacing: 16) {
                            Text(project.longDescription.text(for: language))
                                .font(.system(size: 15, weight: .regular))
                                .foregroundStyle(Color(red: 0.8, green: 0.8, blue: 0.82))
                                .lineSpacing(6)

                            VStack(alignment: .leading, spacing: 10) {
                                Text(language == .de ? "Technologie & Protokolle" : "Technologies & Protocols")
                                    .font(.system(size: 12, weight: .semibold))
                                    .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))

                                HStack(spacing: 8) {
                                    ForEach(project.techStack, id: \.self) { tech in
                                        Text(tech)
                                            .font(.system(size: 12, weight: .medium))
                                            .padding(.horizontal, 10)
                                            .padding(.vertical, 6)
                                            .background(Color.white.opacity(0.06))
                                            .clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
                                    }
                                }
                            }
                        }
                    } else if selectedTab == 1 {
                        // LinkedIn Pitch Tab with Copy Button
                        VStack(alignment: .leading, spacing: 16) {
                            HStack {
                                Text("Executive LinkedIn Pitch")
                                    .font(.system(size: 12, weight: .bold))
                                    .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                                Spacer()

                                Button {
                                    copyToClipboard(project.linkedinPitch.text(for: language))
                                } label: {
                                    HStack(spacing: 4) {
                                        Image(systemName: copied ? "checkmark" : "doc.on.doc")
                                            .font(.system(size: 12, weight: .semibold))
                                        Text(copied ? (language == .de ? "Kopiert" : "Copied") : (language == .de ? "Kopieren" : "Copy"))
                                            .font(.system(size: 12, weight: .medium))
                                    }
                                    .padding(.horizontal, 10)
                                    .padding(.vertical, 6)
                                    .background(Color.white.opacity(0.08))
                                    .clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
                                }
                                .buttonStyle(.plain)
                            }

                            Text(project.linkedinPitch.text(for: language))
                                .font(.system(size: 14, weight: .regular))
                                .foregroundStyle(Color(red: 0.85, green: 0.85, blue: 0.88))
                                .lineSpacing(5)
                                .padding(16)
                                .background(Color.white.opacity(0.03))
                                .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
                                .overlay(
                                    RoundedRectangle(cornerRadius: 12, style: .continuous)
                                        .stroke(Color.white.opacity(0.06), lineWidth: 1)
                                )
                        }
                    } else {
                        // Specs Tab
                        VStack(spacing: 1) {
                            ForEach(project.specs) { spec in
                                HStack {
                                    Text(spec.key.text(for: language))
                                        .font(.system(size: 13, weight: .medium))
                                        .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
                                        .frame(width: 140, alignment: .leading)

                                    Spacer()

                                    Text(spec.value)
                                        .font(.system(size: 13, weight: .regular, design: .monospaced))
                                        .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                                        .multilineTextAlignment(.trailing)
                                }
                                .padding(.vertical, 12)
                                .padding(.horizontal, 14)
                                .background(Color.white.opacity(0.02))

                                Divider()
                                    .background(Color.white.opacity(0.04))
                            }
                        }
                        .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))
                        .overlay(
                            RoundedRectangle(cornerRadius: 14, style: .continuous)
                                .stroke(Color.white.opacity(0.08), lineWidth: 1)
                        )
                    }
                }
                .padding(24)
            }
            .background(Color(red: 0.07, green: 0.07, blue: 0.08).ignoresSafeArea())
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        dismiss()
                    } label: {
                        Image(systemName: "xmark.circle.fill")
                            .font(.system(size: 20))
                            .foregroundStyle(Color.white.opacity(0.6))
                    }
                    .buttonStyle(.plain)
                }
            }
        }
    }
}
