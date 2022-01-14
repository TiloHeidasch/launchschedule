import { Injectable } from "@angular/core";
import { default as data } from "../data/rockets.json";

@Injectable({
  providedIn: "root",
})
export class RocketService {
  constructor() {}

  getRocketById(id: string) {
    return data.find((entry) => entry.id === +id);
  }
  getFirstRockets(search?: string) {
    return this.getNextRockets(0, search);
  }
  getNextRockets(offset: number, search = "") {
    return {
      rockets: data
        .filter((rocket) => {
          return (
            rocket.name.includes(search) ||
            rocket.full_name.includes(search) ||
            rocket.family.includes(search) ||
            rocket.alias.includes(search)
          );
        })
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
