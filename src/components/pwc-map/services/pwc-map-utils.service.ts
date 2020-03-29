export default abstract class PwcMapUtils {
  static getParentFirstLevelMap(element, callback) {
    if (element.parentElement)
      element.parentElement.addEventListener("mapReady", function(event) {
        callback(event.detail);
      });
  }

  static randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
