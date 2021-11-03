import { Injectable } from "@angular/core";
import { main as jsonpack } from "jsonpack";
import { default as data } from "../data/agencies.json";

@Injectable({
  providedIn: "root",
})
export class AgencyService {
  constructor() {}
  getAgencyById(id: string) {
    return jsonpack.unpack(data).find((entry) => entry.id === +id);
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
    let unpacked = jsonpack.unpack(data);
    return {
      agencies: unpacked
        .filter((entry) => {
          return (
            (entry.name.includes(search) ||
              entry.abbrev.includes(search) ||
              entry.administrator.includes(search) ||
              entry.description.includes(search)) &&
            entry.featured === featured &&
            entry.type.includes(type) &&
            entry.country_code.includes(countryCode)
          );
        })
        .slice(offset, offset + 13),
      max: unpacked.length,
    };
  }
}
