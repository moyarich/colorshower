# Development

Development instructions are separate from the published package README and release notes.

## Workspace

- `packages/colorshower`: library, VS Code extension and desktop demo scenarios
- `apps/playground`: Vite/React TypeFox Monaco application rendering root documentation and examples
- `docs/`: canonical product documentation and development guides
- `examples/`: reusable CSS examples consumed by the playground

## Setup and validation

From the repository root:

```sh
npm ci
npm run dev
npm run lint
npm run format:check
npm run typecheck
npm test
npm run build
npm run package
```

`npm run dev` builds the package and launches the playground. `npm run check` runs the project-wide quality checks. The playground reads examples and docs from outside `apps/`; avoid duplicating canonical content within the app.

## VS Code extension and demos

```sh
npm run dev:extension --workspace @moyarich/colorshower
npm run demo:list --workspace @moyarich/colorshower
npm run demo:record --workspace @moyarich/colorshower -- --scenario=color-mix
npm run demo:all --workspace @moyarich/colorshower
npm run demo:gif --workspace @moyarich/colorshower -- --scenario=color-mix
```

Recordings need a graphical desktop and `ffmpeg`; the interactive demo menu also needs `fzf`. Scenario definitions and instructions live in [the demo guide](../../packages/colorshower/demo/README.md). The shared runner is `@moyarich/vscode-dev-toolkit`.

## Packaging and publication

```sh
npm run package --workspace @moyarich/colorshower
npm run publish:github
npm run publish:openvsx --workspace @moyarich/colorshower
```

Packaging produces a VSIX under `packages/colorshower/artifacts/`. VS Code users can install it with **Extensions: Install from VSIX** or `code --install-extension <path-to-vsix>`.

The extension manifest and package versions must match. The extension staging output includes a CommonJS bundle for the VS Code host. The npm package has separate ESM/CJS exports.

Publishing to Open VSX requires an approved publisher namespace and `OVSX_PAT` in the environment; do not commit tokens. Publishing to Open VSX does not publish to the Microsoft Marketplace. Use repository Actions workflows for automated release drafting and registry publishing. Release drafts and the public changelog should only summarize shipped end-user changes.
