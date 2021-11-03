import { Injectable } from "@angular/core";
import { Active } from "../types/active";
import { Reusable } from "../types/reusable";
import { main as jsonpack } from "jsonpack";
import { default as data } from "../data/rockets.json";

@Injectable({
  providedIn: "root",
})
export class RocketService {
  constructor() {}

  getRocketById(id: string) {
    return jsonpack.unpack(data).find((entry) => entry.id === +id);
  }
  getFirstRockets(search?: string) {
    return this.getNextRockets(0, search);
  }
  getNextRockets(offset: number, search = "") {
    const unpacked = jsonpack.unpack(data);
    return {
      rockets: unpacked
        .filter((rocket) => {
          return (
            rocket.name.includes(search) ||
            rocket.full_name.includes(search) ||
            rocket.family.includes(search) ||
            rocket.alias.includes(search)
          );
        })
        .slice(offset, offset + 10),
      max: unpacked.length,
    };
  }
}
