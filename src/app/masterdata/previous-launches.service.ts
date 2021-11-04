import { Injectable } from "@angular/core";
import { main as jsonpack } from "jsonpack";
import { default as data } from "../data/previouslaunches.json";

@Injectable({
  providedIn: "root",
})
export class PreviousLaunchService {
  constructor() {}

  getPreviousLaunchById(id: string) {
    return jsonpack.unpack(data).find((entry) => entry.id === id);
  }
  getFirstPreviousLaunchs(search?: string) {
    return this.getNextPreviousLaunchs(0, search);
  }
  getNextPreviousLaunchs(offset: number, search = "") {
    return {
      previousLaunches: data
        .filter((previousLaunch) => {
          return previousLaunch.name.includes(search);
        })
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
