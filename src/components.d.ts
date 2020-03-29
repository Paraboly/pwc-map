/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcMap {
    /**
    * Map config, currently MapboxGL.JS config
    */
    'config': Object;
    'getMap': () => Promise<Object>;
    /**
    * Map reference
    */
    'map': Object;
    /**
    * Current type is mapbox, later could be extend to leaflet
    */
    'type': string;
  }
  interface PwcMapGeojsonLayer {
    /**
    * geojson formatted data source to be drawn on map
    */
    'geojson': { type: string; geometry: { type: string; coordinates: number[][][]; }; };
  }
  interface PwcMapStory {
    'config': any;
    'map': any;
  }
}

declare global {


  interface HTMLPwcMapElement extends Components.PwcMap, HTMLStencilElement {}
  var HTMLPwcMapElement: {
    prototype: HTMLPwcMapElement;
    new (): HTMLPwcMapElement;
  };

  interface HTMLPwcMapGeojsonLayerElement extends Components.PwcMapGeojsonLayer, HTMLStencilElement {}
  var HTMLPwcMapGeojsonLayerElement: {
    prototype: HTMLPwcMapGeojsonLayerElement;
    new (): HTMLPwcMapGeojsonLayerElement;
  };

  interface HTMLPwcMapStoryElement extends Components.PwcMapStory, HTMLStencilElement {}
  var HTMLPwcMapStoryElement: {
    prototype: HTMLPwcMapStoryElement;
    new (): HTMLPwcMapStoryElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-map': HTMLPwcMapElement;
    'pwc-map-geojson-layer': HTMLPwcMapGeojsonLayerElement;
    'pwc-map-story': HTMLPwcMapStoryElement;
  }
}

declare namespace LocalJSX {
  interface PwcMap {
    /**
    * Map config, currently MapboxGL.JS config
    */
    'config'?: Object;
    /**
    * Map reference
    */
    'map'?: Object;
    /**
    * Current type is mapbox, later could be extend to leaflet
    */
    'type'?: string;
  }
  interface PwcMapGeojsonLayer {
    /**
    * geojson formatted data source to be drawn on map
    */
    'geojson'?: { type: string; geometry: { type: string; coordinates: number[][][]; }; };
  }
  interface PwcMapStory {
    'config'?: any;
    'map'?: any;
  }

  interface IntrinsicElements {
    'pwc-map': PwcMap;
    'pwc-map-geojson-layer': PwcMapGeojsonLayer;
    'pwc-map-story': PwcMapStory;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-map': LocalJSX.PwcMap & JSXBase.HTMLAttributes<HTMLPwcMapElement>;
      'pwc-map-geojson-layer': LocalJSX.PwcMapGeojsonLayer & JSXBase.HTMLAttributes<HTMLPwcMapGeojsonLayerElement>;
      'pwc-map-story': LocalJSX.PwcMapStory & JSXBase.HTMLAttributes<HTMLPwcMapStoryElement>;
    }
  }
}


