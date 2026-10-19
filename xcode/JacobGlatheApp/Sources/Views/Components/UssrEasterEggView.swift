import SwiftUI

public struct UssrEasterEggView: View {
    @Environment(\.dismiss) private var dismiss

    public init() {}

    public var body: some View {
        ZStack {
            Color(red: 0.08, green: 0.08, blue: 0.09)
                .ignoresSafeArea()

            VStack(spacing: 24) {
                // Official Flag of the USSR in SwiftUI Shapes
                ZStack {
                    RoundedRectangle(cornerRadius: 18, style: .continuous)
                        .fill(Color(red: 0.80, green: 0.0, blue: 0.0))
                        .frame(maxWidth: .infinity)
                        .aspectRatio(2.0, contentMode: .fit)
                        .shadow(color: Color.red.opacity(0.3), radius: 20, x: 0, y: 10)

                    // Canton hammer and sickle representation
                    VStack(alignment: .leading, spacing: 4) {
                        HStack {
                            VStack(spacing: 2) {
                                Image(systemName: "star.fill")
                                    .font(.system(size: 16))
                                    .foregroundStyle(Color.yellow)

                                Image(systemName: "hammer.fill")
                                    .font(.system(size: 26))
                                    .foregroundStyle(Color.yellow)
                            }
                            .padding(.leading, 24)
                            .padding(.top, 16)

                            Spacer()
                        }
                        Spacer()
                    }
                }
                .padding(.horizontal, 8)

                // Funny Caption
                VStack(spacing: 12) {
                    Text("Genosse Jacob meldet Dienstbereitschaft! ☭")
                        .font(.system(size: 20, weight: .bold))
                        .foregroundStyle(.white)
                        .multilineTextAlignment(.center)

                    VStack(alignment: .leading, spacing: 6) {
                        Text("Offizielles Dekret Nr. 1922:")
                            .font(.system(size: 12, weight: .bold, design: .monospaced))
                            .foregroundStyle(Color.red.opacity(0.9))

                        Text("Sämtliche Speicher-Leaks wurden verstaatlicht und gleichmäßig auf alle CPU-Kerne umverteilt!")
                            .font(.system(size: 13, weight: .medium))
                            .foregroundStyle(Color(red: 0.85, green: 0.85, blue: 0.88))
                            .lineSpacing(3)
                    }
                    .padding(14)
                    .background(Color.red.opacity(0.12))
                    .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))
                    .overlay(
                        RoundedRectangle(cornerRadius: 16, style: .continuous)
                            .stroke(Color.red.opacity(0.25), lineWidth: 1)
                    )
                }

                Spacer()

                Button {
                    dismiss()
                } label: {
                    Text("Zurück zum Kapitalismus")
                        .font(.system(size: 14, weight: .semibold))
                        .foregroundStyle(.white)
                        .frame(maxWidth: .infinity)
                        .padding(.vertical, 14)
                        .background(Color.red.opacity(0.85))
                        .clipShape(RoundedRectangle(cornerRadius: 16, style: .continuous))
                }
            }
            .padding(24)
        }
        .presentationDetents([.medium])
        .presentationDragIndicator(.visible)
    }
}
