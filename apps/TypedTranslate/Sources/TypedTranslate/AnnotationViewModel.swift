import Foundation
import SwiftUI

/// Drives the annotation pane: input sentence, engine selection, the async
/// annotate action, and re-parsing of user-edited code.
@MainActor
final class AnnotationViewModel: ObservableObject {
    // Input
    @Published var sentence: String = ""
    @Published var engine: Engine = .codex
    @Published var model: String = ""

    // Editable generated code
    @Published var code: String = ""

    // Outputs
    @Published var resolved: String?
    @Published var tree: GrammarNode?
    @Published var errors: [String] = []
    @Published var typeChecks: Bool = false

    // State
    @Published var isAnnotating: Bool = false
    @Published var isReparsing: Bool = false
    @Published var errorMessage: String?
    @Published var hasResult: Bool = false

    private let cli: CLIService

    /// Called whenever the grammar context changes (annotate / reparse), so the
    /// chat pane can mirror it. Wired in the App. Pushing (vs. the chat pulling)
    /// is what lets the chat pane re-render the instant a result exists.
    var onContextChange: ((ChatContext?) -> Void)?

    init(cli: CLIService) {
        self.cli = cli
    }

    var canAnnotate: Bool {
        !sentence.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty && !isAnnotating
    }

    /// Grammar context for the chat pane, derived from the current result. Present
    /// whenever there's an annotation to discuss — even one with audit issues.
    var chatContext: ChatContext? {
        guard hasResult, !code.isEmpty else { return nil }
        return ChatContext(
            sentence: sentence.trimmingCharacters(in: .whitespacesAndNewlines),
            code: code,
            resolved: resolved,
            treeSummary: tree.map { Self.flatten($0) } ?? ""
        )
    }

    // MARK: Actions

    func annotate() async {
        let trimmed = sentence.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !trimmed.isEmpty else { return }

        isAnnotating = true
        errorMessage = nil
        do {
            let result = try await cli.annotateAndParse(
                sentence: trimmed,
                engine: engine,
                model: model.isEmpty ? nil : model
            )
            apply(result)
            hasResult = true
            if !result.ok && errorMessage == nil {
                errorMessage = result.errors.first ?? "Annotation did not type-check."
            }
            onContextChange?(chatContext)
        } catch {
            errorMessage = (error as? LocalizedError)?.errorDescription ?? error.localizedDescription
        }
        isAnnotating = false
    }

    /// Re-parse the (possibly user-edited) code to refresh the tree.
    func reparse() async {
        guard !code.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else { return }
        isReparsing = true
        errorMessage = nil
        do {
            let result = try await cli.parse(code: code)
            // `parse` does not re-run annotation, so keep the existing `code`.
            tree = result.tree
            resolved = result.resolved ?? resolved
            errors = result.errors
            typeChecks = result.ok
            hasResult = true
            if !result.ok, let first = result.errors.first {
                errorMessage = first
            }
            onContextChange?(chatContext)
        } catch {
            errorMessage = (error as? LocalizedError)?.errorDescription ?? error.localizedDescription
        }
        isReparsing = false
    }

    private func apply(_ result: AnnotationResult) {
        code = result.code
        resolved = result.resolved
        tree = result.tree
        errors = result.errors
        typeChecks = result.ok
    }

    // MARK: Tree flattening for chat context

    static func flatten(_ node: GrammarNode, depth: Int = 0) -> String {
        let indent = String(repeating: "  ", count: depth)
        var line = "\(indent)- \(node.label) [\(node.category)]"
        if let r = node.resolved, !r.isEmpty {
            line += " => \(r)"
        }
        var out = [line]
        for child in node.children {
            out.append(flatten(child, depth: depth + 1))
        }
        return out.joined(separator: "\n")
    }
}
