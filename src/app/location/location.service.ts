import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/locations.json")
    ));
  }

  async getLocationById(id: string) {
    const data = await this.load();
    return data.find((entry) => entry.id === +id);
  }
  getFirstLocations(search?: string, countryCode?: string) {
    return this.getNextLocations(0, search, countryCode);
  }
  async getNextLocations(offset: number, search = "", countryCode = "") {
    const data = await this.load();
    return {
      locations: data
        .sort((l1, l2) => {
          if (l1.name < l2.name) {
            return -1;
          }
          if (l1.name > l2.name) {
            return 1;
          }
          return 0;
        })
        .filter((location) => {
          const countryMatches =
            countryCode === ""
              ? true
              : (location.country &&
                  location.country.some((c) =>
                    (c.name || c.alpha_3_code || c.alpha_2_code) ===
                      countryCode ||
                    (c.name || c.alpha_3_code || c.alpha_2_code || "").includes(
                      countryCode
                    )
                  )) ||
                location.country_code === countryCode;
          return location.name.includes(search) && countryMatches;
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
