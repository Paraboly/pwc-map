import OSMService from "../pwc-map/services/osm.service";

export default abstract class PWCMapCoronaService {
  /**
   * @description Get first found element from provided country and city search
   */
  static getCOVID19StoryGeometry(country = "", city = "") {
    const query = `${country ? country + "," : ""}${city}`;
    const filters = `${country ? "&country=" + country + "," : ""}${
      city ? "&city=" + city + "," : ""
    }`;

    return OSMService.search(`${query}${filters}`).then(places => places[0]);
  }
}
