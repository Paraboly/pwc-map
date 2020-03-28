export default abstract class OSMService {
  static search(query) {
    const url = `http://nominatim.openstreetmap.org/search?q=${query}&format=json`;
    return fetch(url, { mode: "cors" }).then(res => res.json());
  }
}