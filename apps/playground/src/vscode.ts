import {
  cssDefaults,
  lessDefaults,
  scssDefaults,
} from "@codingame/monaco-vscode-standalone-css-language-features";
import "@codingame/monaco-vscode-standalone-html-language-features";
import "@codingame/monaco-vscode-standalone-json-language-features";
import "@codingame/monaco-vscode-standalone-languages";
import "@codingame/monaco-vscode-standalone-typescript-language-features";
import getKeybindingsServiceOverride from "@codingame/monaco-vscode-keybindings-service-override";
import getLanguagesServiceOverride from "@codingame/monaco-vscode-languages-service-override";
import {
  vscodeVisualizeCssColorsBrowserPath,
  vscodeVisualizeCssColorsManifest,
} from "@moyarich/vscode-visualize-css-colors";
import extensionSource from "@moyarich/vscode-visualize-css-colors/extension-source";
import type { MonacoVscodeApiConfig } from "monaco-languageclient/vscodeApiWrapper";
import {
  defineDefaultWorkerLoaders,
  useWorkerFactory,
  Worker,
} from "monaco-languageclient/workerFactory";

for (const defaults of [cssDefaults, scssDefaults, lessDefaults]) {
  defaults.setModeConfiguration({
    ...defaults.modeConfiguration,
    colors: false,
  });
}

function configureWorkers() {
  useWorkerFactory({
    workerLoaders: {
      ...defineDefaultWorkerLoaders(),
      css: () =>
        new Worker(
          new URL(
            "@codingame/monaco-vscode-standalone-css-language-features/worker",
            import.meta.url,
          ),
          { type: "module" },
        ),
      html: () =>
        new Worker(
          new URL(
            "@codingame/monaco-vscode-standalone-html-language-features/worker",
            import.meta.url,
          ),
          { type: "module" },
        ),
      json: () =>
        new Worker(
          new URL(
            "@codingame/monaco-vscode-standalone-json-language-features/worker",
            import.meta.url,
          ),
          { type: "module" },
        ),
    },
  });
}

export const vscodeApiConfig: MonacoVscodeApiConfig = {
  $type: "classic",
  viewsConfig: { $type: "EditorService" },
  serviceOverrides: {
    ...getKeybindingsServiceOverride(),
    ...getLanguagesServiceOverride(),
  },
  userConfiguration: {
    json: JSON.stringify({ "editor.colorDecorators": true }),
  },
  extensions: [
    {
      config: vscodeVisualizeCssColorsManifest,
      filesOrContents: new Map([
        [vscodeVisualizeCssColorsBrowserPath, extensionSource],
      ]),
    },
  ],
  monacoWorkerFactory: configureWorkers,
};
