# @PWC/MAP

PWC Map component is an abstraction on top of maps like mapboxGL, leaflet, openlayers.

## Getting Started

### Prerequisites

npm 6+

### Installing

Add following script to your index.html head section

`<script type="module" src="https://unpkg.com/@paraboly/PwcMap@latest/dist/PwcMap/PwcMap.esm.js"></script>

  <script nomodule src="https://unpkg.com/@paraboly/PwcMap@latest/dist/PwcMap/PwcMap.js"></script>`

Configuring the initial setup:

```
this.state =
  map: null,
  config: {}
};
```

and finally use it in your html.

`<PwcMap map="${this.state.map}" config="${this.state.config}"></PwcMap>`

## Running the tests

`$npm run test`

## Built With

- [StencilJS](https://stenciljs.com/)

## Authors

- _SchemeSonic_ - [github](https://github.com/schemesonic)

See also the list of [contributors](https://github.com/paraboly/@PwcMap/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
