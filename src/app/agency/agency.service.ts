import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AgencyService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/agencies.json")
    ));
  }

  async getAgencyById(id: string) {
    const data = await this.load();
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
  async getNextAgencies(
    offset: number,
    search = "",
    featured = true,
    type = "",
    countryCode = ""
  ) {
    const data = await this.load();
    return {
      agencies: data
        .filter((entry) => {
          return (
            (entry.name.includes(search) ||
              entry.abbrev.includes(search) ||
              entry.administrator.includes(search) ||
              entry.description.includes(search)) &&
            entry.featured === featured &&
            (((entry.type &&
              ((entry.type.name || entry.type).includes(type))) ||
              !entry.type) ||
              !entry.type) &&
            (((entry.country &&
              entry.country.some((c) =>
                (c.name || c.alpha_3_code || c.alpha_2_code || "").includes(
                  countryCode
                )
              )) ||
              (entry.country_code || "").includes(countryCode)) ||
              !countryCode)
          );
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
