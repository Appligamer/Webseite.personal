import Foundation

public struct TeamMember: Identifiable, Hashable {
    public let id: String
    public let name: String
    public let role: LocalizedText
    public let bio: LocalizedText
    public let focusAreas: [LocalizedText]
    public let email: String?

    public init(
        id: String,
        name: String,
        role: LocalizedText,
        bio: LocalizedText,
        focusAreas: [LocalizedText],
        email: String? = nil
    ) {
        self.id = id
        self.name = name
        self.role = role
        self.bio = bio
        self.focusAreas = focusAreas
        self.email = email
    }
}
