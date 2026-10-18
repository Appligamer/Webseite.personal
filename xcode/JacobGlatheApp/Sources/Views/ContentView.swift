import SwiftUI

public struct ContentView: View {
    @State private var state = AppState()

    public init() {}

    public var body: some View {
        ZStack(alignment: .top) {
            Color.black
                .ignoresSafeArea()

            ScrollViewReader { proxy in
                ScrollView {
                    VStack(alignment: .leading, spacing: 32) {
                        HeroSectionView(language: state.language) {
                            withAnimation(.spring(response: 0.5, dampingFraction: 0.8)) {
                                proxy.scrollTo("bentoSection", anchor: .top)
                            }
                        }

                        BentoGridView(language: state.language) { project in
                            state.selectedProject = project
                        }
                        .id("bentoSection")

                        PhilosophyView(language: state.language)

                        TeamView(language: state.language)

                        ContactView(language: state.language)

                        // Native Footer
                        VStack(spacing: 8) {
                            Divider()
                                .background(Color.white.opacity(0.08))

                            HStack {
                                Text("© \(Calendar.current.component(.year, from: Date())) Jacob Glathe & Team.")
                                    .font(.system(size: 12))
                                    .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))

                                Spacer()

                                Text("ESP32 · Linux Daemons · SwiftUI Universal")
                                    .font(.system(size: 11, design: .monospaced))
                                    .foregroundStyle(Color.white.opacity(0.3))
                            }
                            .padding(.top, 12)
                        }
                        .padding(.vertical, 24)
                    }
                    .padding(.horizontal, 24)
                    .padding(.top, 70)
                    .frame(maxWidth: 1200)
                }
            }

            // Fixed Top Navbar
            NavbarView(state: state)
        }
        .preferredColorScheme(.dark)
        .sheet(item: $state.selectedProject) { project in
            ProjectDetailSheet(project: project, language: state.language)
        }
    }
}
