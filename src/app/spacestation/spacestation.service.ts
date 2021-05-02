import { Injectable } from "@angular/core";
import { default as data } from "../data/spacestations.json";

@Injectable({
  providedIn: "root",
})
export class SpacestationService {
  constructor() {}

  getSpacestationById(id: string) {
    return data.find((entry) => entry.id === +id);
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
    return {
      spacestations: data
        .filter((spacestation) => {
          return (
            spacestation.name.includes(search) &&
            (spacestation.status.id === status || status === undefined) &&
            (spacestation.orbit === orbit || orbit === undefined) &&
            (spacestation.type.id === type || type === undefined)
          );
        })
        .slice(offset, offset + 10),
      max: data.length,
    };
  }
}
