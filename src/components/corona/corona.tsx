import { Component, Host, h, Element, Prop } from '@stencil/core';
import CustomAnimationsService from "./animations/custom-animations.service";
import PWCMapUtils from '../pwc-map/services/pwc-map-utils.service';
@Component({
  tag: 'pwc-map-corona',
  styleUrl: 'corona.css',
  shadow: true
})
export class MapCorona {
  @Element() private element: HTMLElement;
  @Prop() config;

  componentWillLoad() {
    PWCMapUtils
      .getParentFirstLevelMap(this.element)
      .then(this.startCoronaAnimation.bind(this));
  }

  startCoronaAnimation(map) {
    if (!map) return;
    if (this.config && typeof this.config === "string") {
      try {
        this.config = JSON.parse(this.config);
      } catch (error) {
        console.warn("config prop is not a valid json");
        console.error(error);
      }
    }


    CustomAnimationsService.startFlyingStories(map, this.config);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
