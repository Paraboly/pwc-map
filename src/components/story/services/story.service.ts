declare var mapboxgl: any;
// import PwcMapStoryModel from "../models/pwc-map-story.model";
import PwcMapUtils from "../../pwc-map/services/pwc-map-utils.service";

export default abstract class PwcMapStoryService {
  static addStoryMarker(coords, options) {
    var el = document.createElement("div");
    el.className = "marker";
    el.innerText = "🎯";
    el.style.fontSize = options.fontSize + "px";

    el.addEventListener("click", function() {
      window.alert(options.message);
    });

    // add marker to map
    return new mapboxgl.Marker(el).setLngLat(coords);
  }
  // static startStoryFeedFromBeginning(
  //   map,
  //   feed: [PwcMapStoryModel],
  //   feedDuration = 0
  // ) {
  //   if (!map) {
  //     Promise.reject(`👻 Map is not valid.`);
  //     return;
  //   }

  //   let activeStoryIndex = 0;

  //   const animationInterval = setInterval(() => {
  //     feedDuration = 60000;
  //     if (!feed[activeStoryIndex]) {
  //       clearInterval(animationInterval);
  //       return;
  //     }
  //     const story = feed[activeStoryIndex];
  //     map.flyTo(story.target);

  //     activeStoryIndex += 1;
  //   }, feedDuration);

  //   return Promise.resolve(animationInterval);
  // }

  static generateRandomAnimation() {
    return {
      //bearing: PwcMapUtils.randomIntFromInterval(0, 180),
      zoom: 6, //PwcMapUtils.randomIntFromInterval(5, 10),
      pitch: PwcMapUtils.randomIntFromInterval(0, 10),
      duration: PwcMapUtils.randomIntFromInterval(5000, 10000)
    };
  }

  /**
   * // TODO: Add custom story support
   * @desc Get stories from different sources according to given query. Only  query='covid' is available for custom sources.
   * @param query will be used for custom stories
   */
  // static getStories(query?: string): Promise<any> {
  //   if (query && query.includes("covid"))
  //     return Promise.resolve(COVID19StoryService.prepareStoriesFromCOVID19());
  //   else {
  //     return Promise.resolve(MOCK_STORIES);
  //   }
  // }
}
