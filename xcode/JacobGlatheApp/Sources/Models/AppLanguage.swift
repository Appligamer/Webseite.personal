import Foundation
import SwiftUI

public enum AppLanguage: String, CaseIterable, Identifiable {
    case de = "DE"
    case en = "EN"

    public var id: String { rawValue }

    public var title: String {
        switch self {
        case .de: return "Deutsch"
        case .en: return "English"
        }
    }
}

public struct LocalizedText: Hashable, Codable {
    public let de: String
    public let en: String

    public init(de: String, en: String) {
        self.de = de
        self.en = en
    }

    public func text(for lang: AppLanguage) -> String {
        switch lang {
        case .de: return de
        case .en: return en
        }
    }
}

@Observable
public final class AppState {
    public var language: AppLanguage = .de
    public var selectedProject: Project? = nil

    public init() {}
}
