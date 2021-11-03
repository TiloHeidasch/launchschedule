import { Injectable } from "@angular/core";
import { main as jsonpack } from "jsonpack";
import { default as data } from "../data/spacestations.json";

@Injectable({
  providedIn: "root",
})
export class SpacestationService {
  constructor() {}

  getSpacestationById(id: string) {
    return jsonpack.unpack(data).find((entry) => entry.id === +id);
  }
  getFirstSpacestations(
    search?: string,
    status?: number,
    orbit?: string,
    type?: number
  ) {
    return this.getNextSpacestations(0, search, status, orbit, type);
  }
  getNextSpacestations(
    offset: number,
    search = "",
    status?: number,
    orbit?: string,
    type?: number
  ) {
    const unpacked = jsonpack.unpack(data);
    return {
      spacestations: unpacked
        .sort((s1, s2) => {
          if (s1.status.id < s2.status.id) {
            return -1;
          }
          if (s1.status.id > s2.status.id) {
            return 1;
          }
          if (s1.status.id === s2.status.id) {
            if (s1.founded < s2.founded) {
              return 1;
            }
            if (s1.founded > s2.founded) {
              return -1;
            }
          }
          return 0;
        })
        .filter((spacestation) => {
          return (
            spacestation.name.includes(search) &&
            (spacestation.status.id === status || status === undefined) &&
            (spacestation.orbit === orbit || orbit === undefined) &&
            (spacestation.type.id === type || type === undefined)
          );
        })
        .slice(offset, offset + 10),
      max: unpacked.length,
    };
  }
}
