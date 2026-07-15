import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RocketService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/rockets.json")
    ));
  }

  async getRocketById(id: string) {
    const data = await this.load();
    return data.find((entry) => entry.id === +id);
  }
  getFirstRockets(search?: string) {
    return this.getNextRockets(0, search);
  }
  async getNextRockets(offset: number, search = "") {
    const data = await this.load();
    return {
      rockets: data
        .filter((rocket) => {
          const family = Array.isArray(rocket.families)
            ? rocket.families.map((f) => f.name).join(" ")
            : rocket.family || "";
          return (
            rocket.name.includes(search) ||
            rocket.full_name.includes(search) ||
            family.includes(search) ||
            rocket.alias.includes(search)
          );
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
