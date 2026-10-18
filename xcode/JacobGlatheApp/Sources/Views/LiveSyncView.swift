import SwiftUI
import WebKit

#if canImport(UIKit)
import UIKit

public struct LiveWebView: UIViewRepresentable {
    let url: URL

    public init(url: URL) {
        self.url = url
    }

    public func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        let webView = WKWebView(frame: .zero, configuration: config)
        webView.isOpaque = false
        webView.backgroundColor = .black
        webView.scrollView.backgroundColor = .black
        webView.load(URLRequest(url: url))
        return webView
    }

    public func updateUIView(_ uiView: WKWebView, context: Context) {}
}

#elseif canImport(AppKit)
import AppKit

public struct LiveWebView: NSViewRepresentable {
    let url: URL

    public init(url: URL) {
        self.url = url
    }

    public func makeNSView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        let webView = WKWebView(frame: .zero, configuration: config)
        webView.setValue(false, forKey: "drawsBackground")
        webView.load(URLRequest(url: url))
        return webView
    }

    public func updateNSView(_ nsView: WKWebView, context: Context) {}
}
#endif

public struct LiveSyncView: View {
    @State private var reloadID = UUID()
    let liveURL = URL(string: "https://ais-dev-5sdumjb2cnuj3iny6qp5sp-729708878252.europe-west2.run.app")!

    public init() {}

    public var body: some View {
        ZStack(alignment: .topTrailing) {
            Color.black.ignoresSafeArea()

            LiveWebView(url: liveURL)
                .id(reloadID)
                .ignoresSafeArea(edges: .bottom)

            Button {
                reloadID = UUID()
            } label: {
                HStack(spacing: 6) {
                    Image(systemName: "arrow.clockwise")
                        .font(.system(size: 11, weight: .bold))
                    Text("Live Sync")
                        .font(.system(size: 11, weight: .semibold))
                }
                .padding(.horizontal, 10)
                .padding(.vertical, 6)
                .background(Color.black.opacity(0.7).background(.ultraThinMaterial))
                .foregroundStyle(Color(red: 0.16, green: 0.59, blue: 1.0))
                .clipShape(Capsule())
                .overlay(
                    Capsule()
                        .stroke(Color.white.opacity(0.1), lineWidth: 1)
                )
            }
            .padding(.trailing, 16)
            .padding(.top, 12)
        }
    }
}
