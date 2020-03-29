export default abstract class PwcMapUtils {
  static async getParentFirstLevelMap(element) {
    let map;
    const warning = `Given ${element}: Cannot find pwc-map component.`;

    if (element.parentElement.localName === "pwc-map") {
      return (element.parentElement as any)
        .getMap()
        .then(parentMap => (map = parentMap))
        .finally(() => {
          if (!map) {
            console.warn(warning);
            return Promise.reject({ warning });
          } else {
            return map;
          }
        });
    } else {
      return Promise.reject({ warning });
    }
  }
}
