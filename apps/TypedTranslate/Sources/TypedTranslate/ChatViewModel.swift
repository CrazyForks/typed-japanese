import Foundation
import SwiftUI

/// Drives the chat pane. Disabled until a sentence has been annotated; injects
/// the current annotation as grammar context on every send.
@MainActor
final class ChatViewModel: ObservableObject {
    @Published var messages: [ChatMessage] = []
    @Published var draft: String = ""
    @Published var isSending: Bool = false
    @Published var engine: Engine = .codex
    @Published var model: String = ""
    @Published var errorMessage: String?

    /// The live grammar context, pushed in by the annotation view model whenever a
    /// sentence is annotated/re-parsed. `@Published` so the chat pane re-renders
    /// (and enables) the moment a result exists — nil until then.
    @Published var context: ChatContext?

    private let cli: CLIService

    init(cli: CLIService) {
        self.cli = cli
    }

    var isEnabled: Bool {
        context != nil
    }

    var canSend: Bool {
        isEnabled
            && !isSending
            && !draft.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    func send() async {
        let text = draft.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !text.isEmpty, let context else { return }

        messages.append(ChatMessage(role: .user, text: text))
        draft = ""
        isSending = true
        errorMessage = nil

        do {
            let reply = try await cli.chat(
                history: messages,
                context: context,
                engine: engine,
                model: model.isEmpty ? nil : model
            )
            messages.append(ChatMessage(role: .assistant, text: reply))
        } catch {
            errorMessage = (error as? LocalizedError)?.errorDescription ?? error.localizedDescription
        }
        isSending = false
    }

    func clear() {
        messages.removeAll()
        errorMessage = nil
    }
}
