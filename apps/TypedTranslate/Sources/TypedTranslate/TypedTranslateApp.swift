import SwiftUI
import AppKit

@main
struct TypedTranslateApp: App {
    @StateObject private var annotation: AnnotationViewModel
    @StateObject private var chat: ChatViewModel

    init() {
        // A `swift run` launch is an "accessory" by default; make it a regular
        // app so the window comes forward and takes focus.
        NSApplication.shared.setActivationPolicy(.regular)
        NSApp.activate(ignoringOtherApps: true)

        let cli = CLIService()
        _annotation = StateObject(wrappedValue: AnnotationViewModel(cli: cli))
        _chat = StateObject(wrappedValue: ChatViewModel(cli: cli))
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(annotation)
                .environmentObject(chat)
                .frame(minWidth: 720, minHeight: 460)
                .onAppear {
                    // Keep the chat engine in sync with the annotation engine and
                    // mirror the live grammar context into the chat pane so it
                    // enables the instant a sentence is annotated.
                    chat.engine = annotation.engine
                    annotation.onContextChange = { [weak chat] context in
                        chat?.context = context
                    }
                    chat.context = annotation.chatContext
                }
        }
        .windowStyle(.titleBar)
        // Open at the minimum size (matches the .frame minWidth/minHeight above).
        .defaultSize(width: 720, height: 460)
    }
}
