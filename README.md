# ColorShower

**Playground:** https://moyarich.github.io/colorshower/

ColorShower is a monorepo for the VS Code/Monaco CSS color visualization extension.

## Workspace

- `packages/colorshower` — `@moyarich/vscode-visualize-css-colors`
- `apps/playground` — TypeFox Monaco playground using the workspace package
- `tests` — repository-level extension integration tests

Color parsing is intentionally kept separate in
[`moyarich/css-color-parser`](https://github.com/moyarich/css-color-parser).
ColorShower consumes that package rather than duplicating parser logic.

## Development

```sh
npm install
npm run dev
npm run check
```

See [packages/colorshower/README.md](./packages/colorshower/README.md) for extension
usage, packaging, demos, and Open VSX publishing.
