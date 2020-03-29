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

  componentWillLoad() {
    PwcMapUtils
      .getParentFirstLevelMap(this.element)
      .then(this.draw.bind(this));
  }

  draw(map) {
    map.on('load', () => {
      map.addSource('maine', {
        type: 'geojson',
        data: this.geojson
      });
      map.addLayer({
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
