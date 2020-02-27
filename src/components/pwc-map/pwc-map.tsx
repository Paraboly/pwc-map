import { Element, Component, Prop, h } from "@stencil/core";
import MapboxService from "./mapbox/mapbox.service";

@Component({
  tag: "pwc-map",
  styleUrls: ["./pwc-map.css"]
})
export class Map {
  @Element() private element: HTMLElement;
  @Prop() map: Object;
  @Prop() config: Object;
  @Prop() type = "mapbox";

  componentWillLoad() { }
  componentDidLoad() {
    this.map = MapboxService.getOne({ container: this.element }, "BUILDING");
  }

  render() {
    return <div></div>;
  }
}
