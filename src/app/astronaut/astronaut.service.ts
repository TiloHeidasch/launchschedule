import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AstronautService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/astronauts.json")
    ));
  }

  async getAstronautById(id: string) {
    const data = await this.load();
    return data.find((entry) => entry.id === +id);
  }
  getFirstAstronauts(search?: string) {
    return this.getNextAstronauts(0, search);
  }
  async getNextAstronauts(offset: number, search = "") {
    const data = await this.load();
    return {
      astronauts: data
        .sort((a1, a2) => {
          if (a1.name < a2.name) {
            return -1;
          }
          if (a1.name > a2.name) {
            return 1;
          }
          return 0;
        })
        .filter((astronaut) => {
          return astronaut.name.includes(search);
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
