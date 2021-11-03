import { Injectable } from "@angular/core";
import { main as jsonpack } from "jsonpack";
import { default as data } from "../data/previouslaunches.json";

@Injectable({
  providedIn: "root",
})
export class PreviousEventService {
  constructor() {}

  getPreviousEventById(id: string) {
    return jsonpack.unpack(data).find((entry) => entry.id === id);
  }
  getFirstPreviousEvents(search?: string) {
    return this.getNextPreviousEvents(0, search);
  }
  getNextPreviousEvents(offset: number, search = "") {
    let unpacked = jsonpack.unpack(data);
    return {
      events: unpacked
        .filter((previousEvent) => {
          return previousEvent.name.includes(search);
        })
        .slice(offset, offset + 10),
      max: unpacked.length,
    };
  }
}
