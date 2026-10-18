import SwiftUI

public struct BentoGridView: View {
    let language: AppLanguage
    let onSelectProject: (Project) -> Void

    @State private var selectedCategory: ProjectCategory = .all

    public init(language: AppLanguage, onSelectProject: @escaping (Project) -> Void) {
        self.language = language
        self.onSelectProject = onSelectProject
    }

    private var filteredProjects: [Project] {
        if selectedCategory == .all {
            return LocalProjectsData.projects
        }
        return LocalProjectsData.projects.filter { $0.category == selectedCategory }
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: 28) {
            // Header
            VStack(alignment: .leading, spacing: 10) {
                HStack(spacing: 6) {
                    Image(systemName: "square.grid.2x2")
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                    Text(language == .de ? "AUSGEWÄHLTE PROJEKTE & PROTOTYPEN" : "SELECTED PROJECTS & PROTOTYPES")
                        .font(.system(size: 11, weight: .bold))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                }

                Text(language == .de ? "Hardware-Innovation & Systemarchitektur" : "Hardware Innovation & Architecture")
                    .font(.system(size: 34, weight: .bold, design: .default))
                    .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))

                Text(language == .de
                    ? "Jedes Projekt verkörpert die bewusste Verbindung aus effizientem Silizium, robuster Linux-Infrastruktur und elegantem Software-Design."
                    : "Each project embodies a deliberate convergence of efficient silicon, robust Linux infrastructure, and thoughtful software design."
                )
                .font(.system(size: 16, weight: .regular))
                .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))
            }

            // Category Filter Picker
            Picker("Kategorie", selection: $selectedCategory) {
                ForEach(ProjectCategory.allCases) { cat in
                    Text(cat.localizedName(for: language)).tag(cat)
                }
            }
            .pickerStyle(.segmented)
            .padding(.vertical, 4)

            // Adaptive Bento Grid
            LazyVGrid(columns: [GridItem(.adaptive(minimum: 340), spacing: 24)], spacing: 24) {
                ForEach(filteredProjects) { project in
                    BentoCardView(
                        project: project,
                        language: language,
                        onSelect: onSelectProject
                    )
                }
            }
        }
        .padding(.vertical, 24)
    }
}
