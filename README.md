# ColorShower

CSS color visualization for **VS Code, VS Code for the Web, and Monaco editor hosts**.

ColorShower provides native editor color swatches and color-picker integration for modern CSS colors. The reusable package is published as `@moyarich/colorshower`.

## Workspace

- `packages/colorshower` — publishable `@moyarich/colorshower` package and VS Code/web extension
- `apps/playground` — TypeFox Monaco playground using ColorShower

## Install

The package is published to GitHub Packages:

```sh
npm install @moyarich/colorshower
```


## Publish

```sh
npm run publish:github
```

The publish command validates the package before publishing `@moyarich/colorshower` to GitHub Packages.

## Dependency

Color parsing is intentionally maintained separately in
[moyarich/css-color-parser](https://github.com/moyarich/css-color-parser).

See [packages/colorshower/README.md](./packages/colorshower/README.md) for the API, Monaco integration, VS Code extension workflow, demos, and Open VSX publishing.
