import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { Active } from "../types/active";
import { HumanRated } from "../types/human-rated";

@Injectable({
  providedIn: "root",
})
export class SpacecraftService {
  private data?: Promise<any[]>;
  constructor(private http: HttpClient) {}

  private load(): Promise<any[]> {
    return (this.data ??= firstValueFrom(
      this.http.get<any[]>("assets/data/spacecrafts.json")
    ));
  }

  async getSpacecraftById(id: string) {
    const data = await this.load();
    return data.find((entry) => entry.id === +id);
  }
  getFirstSpacecrafts(
    search?: string,
    active?: Active,
    humanRated?: HumanRated
  ) {
    return this.getNextSpacecrafts(0, search, active, humanRated);
  }
  async getNextSpacecrafts(
    offset: number,
    search = "",
    active = Active.ALL,
    humanRated?: HumanRated
  ) {
    const data = await this.load();
    return {
      spacecrafts: data
        .filter((spacecraft) => {
          return (
            (spacecraft.name.includes(search) ||
              spacecraft.details.includes(search)) &&
            ((spacecraft.in_use === true && active === Active.ACTIVE) ||
              (spacecraft.in_use === false &&
                active === Active.DECOMISSIONED) ||
              active === Active.ALL) &&
            ((spacecraft.human_rated === true &&
              humanRated === HumanRated.HUMAN) ||
              (spacecraft.human_rated === false &&
                humanRated === HumanRated.CARGO) ||
              humanRated === HumanRated.ALL)
          );
        })
        .slice(offset, offset + 24),
      max: data.length,
    };
  }
}
