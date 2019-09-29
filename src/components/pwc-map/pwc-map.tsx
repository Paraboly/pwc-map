import { Component, Prop, h } from "@stencil/core";
import { format } from "../../utils/utils";

@Component({
  tag: "pwc-map",
  styleUrl: "pwc-map.css",
  shadow: true
})
export class Map {
  @Prop() map: string;
  @Prop() config: string;

  private getProps(): string {
    return format(this.map, this.config);
  }

  render() {
    return <div>OMG, its amazing {this.getProps()}</div>;
  }
}
