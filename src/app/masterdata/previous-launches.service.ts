import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PreviousLaunchService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/previouslaunches.json")
    ));
  }

  async getPreviousLaunchById(id: string) {
    const data = await this.load();
    return data.find((entry) => entry.id === id);
  }
  getFirstPreviousLaunchs(search?: string) {
    return this.getNextPreviousLaunchs(0, search);
  }
  async getNextPreviousLaunchs(offset: number, search = "") {
    const data = await this.load();
    return {
      previousLaunches: data
        .filter((previousLaunch) => {
          return previousLaunch.name.includes(search);
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
