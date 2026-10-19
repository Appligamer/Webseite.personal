import SwiftUI

public struct ContentView: View {
    @State private var state = AppState()
    @State private var isLaunching: Bool = true
    @State private var isUssrOpen: Bool = false
    @Environment(\.horizontalSizeClass) private var horizontalSizeClass

    public init() {}

    public var body: some View {
        ZStack(alignment: .top) {
            Color.black
                .ignoresSafeArea()

            if isLaunching {
                LaunchScreenView()
                    .transition(.opacity)
                    .zIndex(10)
            } else {
                ScrollViewReader { proxy in
                    ScrollView {
                        VStack(alignment: .leading, spacing: 36) {
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
                            VStack(spacing: 12) {
                                Divider()
                                    .background(Color.white.opacity(0.08))

                                HStack {
                                    Text("© \(Calendar.current.component(.year, from: Date())) Jacob Glathe & Team.")
                                        .font(.system(size: 13, weight: .regular))
                                        .foregroundStyle(Color(red: 0.53, green: 0.53, blue: 0.55))

                                    Spacer()

                                    // Secret 5-tap gesture triggers USSR Easter Egg
                                    Text("ESP32 · Linux Daemons · SwiftUI Universal")
                                        .font(.system(size: 11, weight: .medium, design: .monospaced))
                                        .foregroundStyle(Color.white.opacity(0.35))
                                        .onTapGesture(count: 5) {
                                            isUssrOpen = true
                                        }
                                }
                                .padding(.top, 12)
                            }
                            .padding(.vertical, 32)
                        }
                        .padding(.horizontal, horizontalSizeClass == .regular ? 48 : 20)
                        .padding(.top, 74)
                        .frame(maxWidth: 1280)
                    }
                    .scrollIndicators(.hidden)
                }

                // Fixed Top Navbar with Frosted Blur
                NavbarView(state: state)
                    .zIndex(5)
            }
        }
        .preferredColorScheme(.dark)
        .sheet(item: $state.selectedProject) { project in
            ProjectDetailSheet(project: project, language: state.language)
        }
        .sheet(isPresented: $isUssrOpen) {
            UssrEasterEggView()
        }
        .onAppear {
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) {
                withAnimation(.easeInOut(duration: 0.35)) {
                    isLaunching = false
                }
            }
        }
    }
}
