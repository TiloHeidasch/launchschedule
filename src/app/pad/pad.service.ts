import { Injectable } from "@angular/core";
import { default as data } from "../data/pads.json";

@Injectable({
  providedIn: "root",
})
export class PadService {
  constructor() {}

  getPadById(id: string) {
    return data.find((entry) => entry.id === +id);
  }
  getFirstPads(search?: string) {
    return this.getNextPads(0, search);
  }
  getNextPads(offset: number, search = "") {
    return {
      pads: data
        .filter((pad) => {
          return pad.name.includes(search);
        })
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
