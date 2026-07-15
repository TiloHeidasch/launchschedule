import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PreviousEventService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/previouslaunches.json")
    ));
  }

  async getPreviousEventById(id: string) {
    const data = await this.load();
    return data.find((entry) => entry.id === id);
  }
  getFirstPreviousEvents(search?: string) {
    return this.getNextPreviousEvents(0, search);
  }
  async getNextPreviousEvents(offset: number, search = "") {
    const data = await this.load();
    return {
      events: data
        .filter((previousEvent) => {
          return previousEvent.name.includes(search);
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
