import { Component, Host, h, Element, Prop } from '@stencil/core';
import PwcMapUtils from '../pwc-map/services/pwc-map-utils.service';
import PwcMapStoryService from './services/story.service';
@Component({
  tag: 'pwc-map-story',
  styleUrl: 'story.css',
  shadow: true
})
export class PwcMapStory {
  @Element() private element: HTMLElement;
  @Prop() map;
  @Prop() config;

  componentWillLoad() {
    this.initialize()
      .then(() => PwcMapStoryService.getStories())
      .then(this.startStories.bind(this));
  }

  async initialize() {
    if (this.config && typeof this.config === "string") {
      try {
        this.config = JSON.parse(this.config);
      } catch (error) {
        Promise.reject(error);
      }
    }
    if (!this.map) {
      // TODO: If map is not provided, pwc-map-story component should be first level child of pwc-map (<pwc-map><pwc-map-story></pwc-map-story><pwc-map/>). Should add multi level support
      return PwcMapUtils.getParentFirstLevelMap(this.element).then(map => this.map = map);
    }
  }

  startStories(stories: [] | [any]) {
    PwcMapStoryService.startStoryFeedFromBeginning(this.map, stories);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
