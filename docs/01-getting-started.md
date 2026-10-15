# Getting started

ColorShower adds inline color swatches and native picker presentations in VS Code, VS Code for the Web and supported Monaco hosts.

## Install

Install the `@moyarich/colorshower` package from GitHub Packages, or use a compatible VS Code extension host that supports the ColorShower extension.

Enable `editor.colorDecorators` in your editor settings, then select a swatch to inspect or change a color.

## Supported syntax

Hex, named colors, RGB, HSL, HWB, Lab/LCH, OKLab/OKLCH, `color()`, weighted and nested `color-mix()`, and relative color syntax with `calc()` are supported.

## Limitations

ColorShower reads source code rather than a rendered page. It does not evaluate `var()`, `currentColor`, system colors or which `light-dark()` branch is active. Advanced colors are presented as sRGB and may be clipped.

Try the [color examples](../examples/colors.css) in the playground.
