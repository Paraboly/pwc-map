# @PWC/MAP

PWC Map component is an abstraction on top of maps like leaflet, openlayers and mapbox. 

## Getting Started

### Prerequisites

npm 6+ 

### Installing

```$npm install --save "@pwc/map"```


commonJS:
```import @pwc/map``` 
or
requireJS:
```require "@pwc/map"```

Configuring the initial setup:
``` 
this.state = 
  map: null,
  config: {}
};
```

and finally use it in your html.

```<pwc-map map="${this.state.map}" config="${this.state.config}"></pwc-map>```

## Running the tests

```$npm run test```

## Built With

* [StencilJS](https://stenciljs.com/)

## Authors

* *SchemeSonic* - [github](https://github.com/schemesonic)

See also the list of [contributors](https://github.com/paraboly/@pwc-map/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
