import MAP_BOX_CONSTANTS from "./mapbox.constant";
declare var mapboxgl: any;
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2NoZW1lc29uaWMiLCJhIjoiY2swY3lxOWhqMDJpcTNjb2NoOGhjZncyZSJ9.lvVwLocCAkKFm3zAei5seA";

export default class MapboxService {
  public static getOne(
    {
      container,
      style = "mapbox://styles/mapbox/light-v10",
      center = [32.7758598, 39.8974598],
      zoom = 17.5,
      pitch = 45,
      bearing = -17.6,
      antialias = true
    },
    layer = "BUILDING"
  ) {
    const map = new mapboxgl.Map({
      container,
      style,
      center,
      zoom,
      pitch,
      bearing,
      antialias
    });

    if (layer && MAP_BOX_CONSTANTS.LAYERS[layer]) {
      map.on("load", () =>
        MapboxService.addLayer(map, MAP_BOX_CONSTANTS.LAYERS[layer])
      );
    }

    return map;
  }

  public static addLayer(map, layerConfig = MAP_BOX_CONSTANTS.LAYERS.BUILDING) {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;

    let labelLayerId;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
        labelLayerId = layers[i].id;
        break;
      }
    }

    map.addLayer(layerConfig, labelLayerId);
  }
}
