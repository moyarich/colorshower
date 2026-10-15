# ColorShower

Native CSS color swatches and color-picker integration for **VS Code, VS Code for the Web, and Monaco hosts**.

ColorShower supports modern CSS color syntax, including Lab, OKLCH, `color-mix()`, and relative colors. The reusable package is `@moyarich/colorshower`.

## Get started

Install the package from GitHub Packages:

```sh
npm install @moyarich/colorshower
```

Open a supported file in VS Code and select a color swatch to inspect or change its color. For embedded editors, see the [Monaco integration guide](docs/02-monaco-integration.md).

## Documentation and examples

- [Capabilities and limitations](docs/01-getting-started.md)
- [Monaco integration](docs/02-monaco-integration.md)
- [Color syntax examples](examples/colors.css)
- [Interactive playground](https://moyarich.github.io/colorshower/)
- [Public changelog](packages/colorshower/CHANGELOG.md)

## Development

Local setup, testing, desktop demos and publishing procedures are in [development documentation](docs/development/README.md).

Color parsing is maintained independently in [css-color-parser](https://github.com/moyarich/css-color-parser).
