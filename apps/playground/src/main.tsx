import { MonacoEditorReactComp } from "@typefox/monaco-editor-react";
import { createRoot } from "react-dom/client";
import demoCss from "./demo.css?raw";
import "./styles.css";
import { vscodeApiConfig } from "./vscode";

function App() {
  return (
    <main className="playground">
      <header className="playground__header">
        <h1>ColorShower Playground</h1>
        <p>
          Select a CSS color swatch to open the native VS Code color picker.
        </p>
      </header>
      <MonacoEditorReactComp
        vscodeApiConfig={vscodeApiConfig}
        editorAppConfig={{
          codeResources: {
            modified: {
              text: demoCss,
              uri: "file:///workspace/colors.css",
              enforceLanguageId: "css",
            },
          },
          editorOptions: {
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 15,
            lineHeight: 22,
            theme: "vs-dark",
          },
        }}
        style={{ height: "100%" }}
      />
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
