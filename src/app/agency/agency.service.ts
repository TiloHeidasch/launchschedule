import { Injectable } from "@angular/core";
import { default as data } from "../data/agencies.json";

@Injectable({
  providedIn: "root",
})
export class AgencyService {
  constructor() {}
  getAgencyById(id: string) {
    return data.find((entry) => entry.id === +id);
  }
  getFirstAgencies(
    search?: string,
    featured?: boolean,
    type?: string,
    countryCode?: string
  ) {
    return this.getNextAgencies(0, search, featured, type, countryCode);
  }
  getNextAgencies(
    offset: number,
    search = "",
    featured = true,
    type = "",
    countryCode = ""
  ) {
    return {
      agencies: data
        .filter((entry) => {
          return (
            (entry.name.includes(search) ||
              entry.abbrev.includes(search) ||
              entry.administrator.includes(search) ||
              entry.description.includes(search)) &&
            entry.featured === featured &&
            ((entry.type && entry.type.includes(type)) || !entry.type) &&
            entry.country_code.includes(countryCode)
          );
        })
        .slice(offset, offset + 13),
      max: data.length,
    };
  }
}
