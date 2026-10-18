import Foundation

public enum ProjectCategory: String, CaseIterable, Identifiable {
    case all = "all"
    case hardware = "hardware"
    case embedded = "embedded"
    case cloud = "cloud"
    case web = "web"

    public var id: String { rawValue }

    public func localizedName(for lang: AppLanguage) -> String {
        switch self {
        case .all:
            return lang == .de ? "Alle Projekte" : "All Projects"
        case .hardware:
            return lang == .de ? "Hardware & IoT" : "Hardware & IoT"
        case .embedded:
            return lang == .de ? "Embedded & C++" : "Embedded & C++"
        case .cloud:
            return lang == .de ? "Linux & Cloud" : "Linux & Cloud"
        case .web:
            return lang == .de ? "Web & UI" : "Web & UI"
        }
    }
}

public struct ProjectMetric: Identifiable, Hashable {
    public var id: String { label.de }
    public let label: LocalizedText
    public let value: String

    public init(label: LocalizedText, value: String) {
        self.label = label
        self.value = value
    }
}

public struct ProjectSpec: Identifiable, Hashable {
    public var id: String { key.de }
    public let key: LocalizedText
    public let value: String

    public init(key: LocalizedText, value: String) {
        self.key = key
        self.value = value
    }
}

public struct Project: Identifiable, Hashable {
    public let id: String
    public let title: LocalizedText
    public let headline: LocalizedText
    public let shortDescription: LocalizedText
    public let longDescription: LocalizedText
    public let linkedinPitch: LocalizedText
    public let category: ProjectCategory
    public let techStack: [String]
    public let metrics: [ProjectMetric]
    public let specs: [ProjectSpec]
    public let imageName: String
    public let isOpenSource: Bool
    public let featured: Bool

    public init(
        id: String,
        title: LocalizedText,
        headline: LocalizedText,
        shortDescription: LocalizedText,
        longDescription: LocalizedText,
        linkedinPitch: LocalizedText,
        category: ProjectCategory,
        techStack: [String],
        metrics: [ProjectMetric],
        specs: [ProjectSpec],
        imageName: String,
        isOpenSource: Bool,
        featured: Bool
    ) {
        self.id = id
        self.title = title
        self.headline = headline
        self.shortDescription = shortDescription
        self.longDescription = longDescription
        self.linkedinPitch = linkedinPitch
        self.category = category
        self.techStack = techStack
        self.metrics = metrics
        self.specs = specs
        self.imageName = imageName
        self.isOpenSource = isOpenSource
        self.featured = featured
    }
}
