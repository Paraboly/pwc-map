import OSMService from "../../pwc-map/services/osm.service";
import { MOCK_COVID19_STORIES, MOCK_STORIES } from "../mock/stories.mock";
import COVID19StoryService from "./covid19-story.service";

export default abstract class PwcMapStoryService {
  static startStoryFeedFromBeginning(map, feed: any, duration = 5000) {
    if (!map) {
      Promise.reject(`👻 Map is not valid.`);
      return;
    }

    const targets = Object.keys(feed); // 🎯
    let currentTargetIndex = 0;

    const animationInterval = setInterval(() => {
      if (!targets[currentTargetIndex]) {
        clearInterval(animationInterval);
        return;
      }

      const story = feed[targets[currentTargetIndex]];

      map.flyTo(story);

      currentTargetIndex += 1;
    }, duration);

    return Promise.resolve(animationInterval);
  }

  /**
   * @description Get first found element from provided country and city
   */
  static getStoryGeometry(country = "", city = "") {
    const query = `${country ? country + "," : ""}${city}`;
    const filters = `${country ? "&country=" + country + "," : ""}${
      city ? "&city=" + city + "," : ""
    }`;

    return OSMService.search(`${query}${filters}`).then(places => places[0]);
  }

  /**
   * // TODO: Add custom story support
   * @desc Get stories from different sources according to given query. Only  query='covid' is available for custom sources.
   * @param query will be used for custom stories
   */
  static getStories(query?: string): Promise<any> {
    if (query && query.includes("covid"))
      return Promise.resolve(
        COVID19StoryService.prepareStoriesFromCOVID19(MOCK_COVID19_STORIES)
      );
    else {
      return Promise.resolve(MOCK_STORIES);
    }
  }
}
