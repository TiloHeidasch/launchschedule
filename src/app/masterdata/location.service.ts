import { Injectable } from "@angular/core";
import { default as data } from "../data/locations.json";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor() {}

  getLocationById(id: string) {
    return data.find((entry) => entry.id === +id);
  }
  getFirstLocations(search?: string, countryCode?: string) {
    return this.getNextLocations(0, search, countryCode);
  }
  getNextLocations(offset: number, search = "", countryCode = "") {
    return {
      locations: data
        .filter((location) => {
          return (
            location.name.includes(search) &&
            location.country_code === countryCode
          );
        })
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
