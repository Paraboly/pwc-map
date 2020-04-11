export default abstract class OsmService {
  static search(query) {
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json`;
    return fetch(url, { mode: "cors" }).then((res) => res.json());
  }

  /**
   * @description Get first found element from provided country and city
   */
  static getGeometryByCountryOrCity(country = "", city = "") {
    const query = `${country ? country + "," : ""}${city || ""}`;
    const filters = `${country ? "&country=" + (country || "") + "," : ""}${
      city ? "&city=" + (city || "") + "," : ""
    }`;

    return OsmService.search(`${query}${filters}`).then((places) => places[0]);
  }
}
