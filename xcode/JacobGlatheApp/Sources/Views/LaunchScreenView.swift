import SwiftUI

public struct LaunchScreenView: View {
    @State private var opacity: Double = 0.0
    @State private var scale: CGFloat = 0.95
    @State private var pulseGlow: Bool = false

    public init() {}

    public var body: some View {
        ZStack {
            Color.black.ignoresSafeArea()

            VStack(spacing: 20) {
                // Minimalist Hardware Core Icon with Ambient Glow
                ZStack {
                    RoundedRectangle(cornerRadius: 24, style: .continuous)
                        .fill(Color(red: 0.16, green: 0.59, blue: 1.0).opacity(pulseGlow ? 0.25 : 0.08))
                        .frame(width: 80, height: 80)
                        .blur(radius: pulseGlow ? 20 : 10)

                    RoundedRectangle(cornerRadius: 24, style: .continuous)
                        .fill(
                            LinearGradient(
                                colors: [
                                    Color(red: 0.12, green: 0.12, blue: 0.14),
                                    Color(red: 0.08, green: 0.08, blue: 0.09)
                                ],
                                startPoint: .topLeading,
                                endPoint: .bottomTrailing
                            )
                        )
                        .frame(width: 72, height: 72)
                        .overlay(
                            RoundedRectangle(cornerRadius: 24, style: .continuous)
                                .stroke(Color.white.opacity(0.12), lineWidth: 1)
                        )

                    Image(systemName: "cpu")
                        .font(.system(size: 32, weight: .semibold))
                        .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                }

                VStack(spacing: 6) {
                    Text("Jacob Glathe & Team")
                        .font(.system(size: 20, weight: .bold, design: .default))
                        .foregroundStyle(Color(red: 0.96, green: 0.96, blue: 0.97))
                        .tracking(0.5)

                    Text("PRECISION FROM SILICON TO CLOUD")
                        .font(.system(size: 10, weight: .bold, design: .monospaced))
                        .foregroundStyle(Color.white.opacity(0.4))
                        .tracking(2.0)
                }
            }
            .scaleEffect(scale)
            .opacity(opacity)
        }
        .onAppear {
            withAnimation(.easeOut(duration: 0.7)) {
                opacity = 1.0
                scale = 1.0
            }
            withAnimation(.easeInOut(duration: 1.2).repeatForever(autoreverses: true)) {
                pulseGlow = true
            }
        }
    }
}
