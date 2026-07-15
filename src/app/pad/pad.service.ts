import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PadService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/pads.json")
    ));
  }

  async getPadById(id: string) {
    const data = await this.load();
    return data.find((entry) => entry.id === +id);
  }
  getFirstPads(search?: string) {
    return this.getNextPads(0, search);
  }
  async getNextPads(offset: number, search = "") {
    const data = await this.load();
    return {
      pads: data
        .sort((p1, p2) => {
          if (p1.location.name < p2.location.name) {
            return -1;
          }
          if (p1.location.name > p2.location.name) {
            return 1;
          }
          return 0;
        })
        .filter((pad) => {
          return pad.name.includes(search);
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
