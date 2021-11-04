import { Injectable } from "@angular/core";
import { main as jsonpack } from "jsonpack";
import { default as data } from "../data/pads.json";

@Injectable({
  providedIn: "root",
})
export class PadService {
  constructor() {}

  getPadById(id: string) {
    return jsonpack.unpack(data).find((entry) => entry.id === +id);
  }
  getFirstPads(search?: string) {
    return this.getNextPads(0, search);
  }
  getNextPads(offset: number, search = "") {
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
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
