# Monaco integration

ColorShower exports an extension manifest and browser extension source for TypeFox Monaco hosts.

```ts
import {
  vscodeVisualizeCssColorsBrowserPath,
  vscodeVisualizeCssColorsManifest,
} from "@moyarich/colorshower";
import extensionSource from "@moyarich/colorshower/extension-source";
import { configureDefaultWorkerFactory } from "monaco-languageclient/workerFactory";

const vscodeApiConfig = {
  $type: "classic",
  viewsConfig: { $type: "EditorService" },
  userConfiguration: {
    json: JSON.stringify({ "editor.colorDecorators": true }),
  },
  extensions: [{
    config: vscodeVisualizeCssColorsManifest,
    filesOrContents: new Map([
      [vscodeVisualizeCssColorsBrowserPath, extensionSource],
    ]),
  }],
  monacoWorkerFactory: configureDefaultWorkerFactory,
};
```

Pass `vscodeApiConfig` to `MonacoEditorReactComp` and configure `worker: { format: "es" }` in Vite. Language workers, tokenizers and themes remain the responsibility of the host. ColorShower provides color information and picker presentations.

See the [interactive playground](https://moyarich.github.io/colorshower/) for a working Monaco integration.
