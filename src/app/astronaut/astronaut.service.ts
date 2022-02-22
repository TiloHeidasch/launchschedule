import { Injectable } from "@angular/core";
import { default as data } from "../data/astronauts.json";

@Injectable({
  providedIn: "root",
})
export class AstronautService {
  constructor() {}

  getAstronautById(id: string) {
    return data.find((entry) => entry.id === +id);
  }
  getFirstAstronauts(search?: string) {
    return this.getNextAstronauts(0, search);
  }
  getNextAstronauts(offset: number, search = "") {
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
