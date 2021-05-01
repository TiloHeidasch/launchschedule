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
  getFirstAstronauts(search?: string, status?: string) {
    return this.getNextAstronauts(0, search, status);
  }
  getNextAstronauts(offset: number, search = "", status = "") {
    return {
      astronauts: data
        .filter((astronaut) => {
          return astronaut.name.includes(search);
        })
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
