declare var mapboxgl: any;
import { Component, Host, h, Element, Prop, Method } from '@stencil/core';
import PwcMapUtils from '../pwc-map/services/pwc-map-utils.service';
import PwcMapStoryService from './services/story.service';
import OSMService from '../pwc-map/services/osm.service';
import PwcMapStoryModel from '../../../dist/types/components/story/models/pwc-map-story.model.d';
@Component({
  tag: 'pwc-map-story',
  styleUrl: 'story.css',
  shadow: true
})
export class PwcMapStory {
  @Element() private element: HTMLElement;
  @Prop() map;
  @Prop() config;
  @Prop() stories?: any;
  @Prop() story?: any;
  private mapRef: any;
  private storyMarker: any;



  componentWillLoad() {
    this.initialize(() => {
      if (this.story) this.startStory(this.story)
    });
  }

  async initialize(callback) {
    if (this.config && typeof this.config === "string") {
      try {
        this.config = JSON.parse(this.config);
      } catch (error) {
        Promise.reject(error);
      }
    }
    if (!this.map) {
      PwcMapUtils.getParentFirstLevelMap(this.element, ({ map }) => {
        this.mapRef = map;
        callback();
      });
    }
  }

  @Method()
  async startStory(story: PwcMapStoryModel | any) {
    if (!this.story && !story) {
      return;
    }

    this.storyMarker = PwcMapStoryService.addStoryMarker(story.target.center, {
      fontSize: 40,
    });

    this.storyMarker.addTo(this.mapRef)

    OSMService.getGeometryByCountryOrCity(story.metadata['country'], story.metadata['province']).then((result) => {
      const osmBoundingBox: [number, number, number, number] = result['boundingbox'];
      const southWest = new mapboxgl.LngLat(osmBoundingBox[2], osmBoundingBox[0]);
      const northEast = new mapboxgl.LngLat(osmBoundingBox[3], osmBoundingBox[1]);
      const boundingBox = new mapboxgl.LngLatBounds(southWest, northEast);
      this.mapRef.fitBounds(boundingBox, story.target);
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
