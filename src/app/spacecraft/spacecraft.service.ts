import { Injectable } from "@angular/core";
import { Active } from "../types/active";
import { main as jsonpack } from "jsonpack";
import { default as data } from "../data/spacecrafts.json";
import { HumanRated } from "../types/human-rated";

@Injectable({
  providedIn: "root",
})
export class SpacecraftService {
  constructor() {}

  getSpacecraftById(id: string) {
    return jsonpack.unpack(data).find((entry) => entry.id === +id);
  }
  getFirstSpacecrafts(
    search?: string,
    active?: Active,
    humanRated?: HumanRated
  ) {
    return this.getNextSpacecrafts(0, search, active, humanRated);
  }
  getNextSpacecrafts(
    offset: number,
    search = "",
    active = Active.ALL,
    humanRated?: HumanRated
  ) {
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
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
