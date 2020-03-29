import { Element, Component, Prop, h, Method, Event, EventEmitter } from "@stencil/core";
import MapboxService from "./mapbox/mapbox.service";

@Component({
  tag: "pwc-map",
  styleUrls: ["./pwc-map.css"]
})
export class Map {
  /**
   * Map reference
   */
  mapRef: any;
  @Event() mapReady: EventEmitter;
  @Element() private element: HTMLElement;
  /**
   * Current type is mapbox, later could be extend to leaflet
   */
  @Prop() type = "mapbox";

  /**
   * Given map
   */
  @Prop() map: Object;
  /**
   * Map config, currently MapboxGL.JS config
   */
  @Prop() config: Object;
  @Method()
  async getMap() {
    if (!this.map) {
      return;
    }
    this.mapRef = this.map;
    return this.mapRef;
  }

  componentDidLoad() {
    this.mapRef = MapboxService.getOne({ container: this.element }, "BUILDING");
    this.mapRef.on('style.load', () => this.mapReady.emit({ map: this.mapRef }));
  }

  render() {
    return <div></div>;
  }
}
