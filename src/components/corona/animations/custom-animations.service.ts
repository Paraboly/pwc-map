import MOCK_ANIMATION_DATA from "./animations.mock";
export default abstract class CustomAnimationsService {
  static startFlyingStories(
    map,
    config = { source: { ...MOCK_ANIMATION_DATA }, animationDuration: "5000" }
  ) {
    if (!map) {
      console.warn("First argument(map) is not valid.");
      return;
    }

    const targets = Object.keys(config.source);
    let currentTargetIndex = 0;

    const animationInterval = setInterval(() => {
      if (!targets[currentTargetIndex]) {
        clearInterval(animationInterval);
        return;
      }

      const story = config.source[targets[currentTargetIndex]];
      map.flyTo(story);

      currentTargetIndex += 1;
    }, parseInt(config.animationDuration) || 5000);
  }
}
