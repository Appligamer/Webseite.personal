import SwiftUI

#if canImport(UIKit)
import UIKit
#elseif canImport(AppKit)
import AppKit
#endif

public struct SafeImageView: View {
    let name: String
    let height: CGFloat
    let cornerRadius: CGFloat

    public init(name: String, height: CGFloat, cornerRadius: CGFloat = 18) {
        self.name = name
        self.height = height
        self.cornerRadius = cornerRadius
    }

    private var loadedImage: Image? {
        #if canImport(UIKit)
        if let uiImg = UIImage(named: name) {
            return Image(uiImage: uiImg)
        }
        if let path = Bundle.main.path(forResource: name, ofType: "jpg") ?? Bundle.main.path(forResource: name, ofType: "png"),
           let uiImg = UIImage(contentsOfFile: path) {
            return Image(uiImage: uiImg)
        }
        #elseif canImport(AppKit)
        if let nsImg = NSImage(named: name) {
            return Image(nsImage: nsImg)
        }
        if let path = Bundle.main.path(forResource: name, ofType: "jpg") ?? Bundle.main.path(forResource: name, ofType: "png"),
           let nsImg = NSImage(contentsOfFile: path) {
            return Image(nsImage: nsImg)
        }
        #endif
        return nil
    }

    public var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                .fill(Color(red: 0.11, green: 0.11, blue: 0.13))

            if let img = loadedImage {
                img
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .frame(maxWidth: .infinity, minHeight: height, maxHeight: height)
                    .clipped()
            } else {
                // High-End Cyber-Physical Fallback Graphic
                ZStack {
                    LinearGradient(
                        colors: [
                            Color(red: 0.12, green: 0.12, blue: 0.14),
                            Color(red: 0.08, green: 0.08, blue: 0.09)
                        ],
                        startPoint: .topLeading,
                        endPoint: .bottomTrailing
                    )

                    VStack(spacing: 8) {
                        Image(systemName: "cpu")
                            .font(.system(size: 32, weight: .semibold))
                            .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))

                        Text(name.replacingOccurrences(of: "_", with: " ").capitalized)
                            .font(.system(size: 11, weight: .bold, design: .monospaced))
                            .foregroundStyle(Color.white.opacity(0.6))
                    }
                }
                .frame(maxWidth: .infinity, minHeight: height, maxHeight: height)
            }
        }
        .frame(height: height)
        .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
    }
}
