import { Component, Host, h, Prop, Element } from '@stencil/core';
import PwcMapUtils from '../../services/pwc-map-utils.service';
import EXAMPLE_GEOJSON from '../mock/geojson';

@Component({
  tag: 'pwc-map-geojson-layer',
  styleUrl: 'geojson-layer.css',
  shadow: true
})
export class MapGeojsonLayer {
  @Element() private element: HTMLElement;
  /**
   * geojson formatted data source to be drawn on map
   */
  @Prop() geojson = EXAMPLE_GEOJSON;
  /**
   * Map reference
   */
  @Prop() map;
  private mapRef: any;

  componentWillLoad() {
    if (!this.map) {
      PwcMapUtils.getParentFirstLevelMap(this.element, ({ map }) => {
        this.mapRef = map;
        this.draw();
      });
    }
  }

  draw() {
    if (this.mapRef)
      this.mapRef.on('load', () => {
        this.mapRef.addSource('maine', {
          type: 'geojson',
          data: this.geojson
        });
        this.mapRef.addLayer({
          'id': 'maine',
          'type': 'fill',
          'source': 'maine',
          'layout': {},
          'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
          }
        });
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
