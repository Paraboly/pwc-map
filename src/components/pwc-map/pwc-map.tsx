import { Element, Component, Prop, h, Method } from "@stencil/core";
import MapboxService from "./mapbox/mapbox.service";

@Component({
  tag: "pwc-map",
  styleUrls: ["./pwc-map.css"]
})
export class Map {
  @Element() private element: HTMLElement;
  /**
   * Current type is mapbox, later could be extend to leaflet
   */
  @Prop() type = "mapbox";

  /**
   * Map reference
   */
  @Prop() map: Object;
  /**
   * Map config, currently MapboxGL.JS config
   */
  @Prop() config: Object;
  @Method()
  async getMap() {
    if (!this.map) {
      console.warn("Map is not initialized, cannot get map");
      return;
    }

    return this.map;
  }

  componentWillLoad() {

  }
  componentDidLoad() {
    this.map = MapboxService.getOne({ container: this.element }, "BUILDING");
  }

  render() {
    return <div></div>;
  }
}
