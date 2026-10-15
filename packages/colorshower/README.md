# @moyarich/colorshower

Native CSS color visualization for **VS Code, VS Code for the Web, and Monaco editor hosts**. The extension identifier is `moyarich.visualize-css-colors`.

Open a CSS, SCSS, Less, HTML, JavaScript, TypeScript, JSX/TSX, Vue, or Svelte file and select a color swatch to open the editor's native picker. Enable `editor.colorDecorators` if swatches are hidden.

## Supported colors

- Hex, named colors, `transparent`, RGB/RGBA and HSL/HSLA
- HWB, Lab/LCH, OKLab/OKLCH, and `color()`, including Display P3
- Weighted and nested `color-mix()`, transparency and hue interpolation
- Relative colors with `calc()`, including `hsl(from red calc(h + 120) s l)`

A complete color function is represented by one editable range. Picker changes replace expressions with a hex or RGB literal. Advanced colors resolve to 8-bit sRGB, potentially clipping wide-gamut colors.

The provider analyzes source text, not the rendered DOM. It cannot resolve `var()`, `currentColor`, system colors, or the active branch of `light-dark()`; fixed colors inside gradients and `light-dark()` remain inspectable.

## Install

The package is published to GitHub Packages:

```sh
npm install @moyarich/colorshower
```

For embedded Monaco integration, see [Monaco integration](../../docs/02-monaco-integration.md) and [examples](../../examples/colors.css). To try it, open the [interactive playground](https://moyarich.github.io/colorshower/).

For development commands, builds, demos and publishing, see [Development](../../docs/development/README.md).
