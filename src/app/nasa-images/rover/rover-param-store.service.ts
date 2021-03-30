import { Injectable } from "@angular/core";
import { MarsPhoto } from "./mars-photos.service";

@Injectable({
  providedIn: "root",
})
export class RoverParamStoreService {
  curiosityImages: MarsPhoto[] = [];
  perseveranceImages: MarsPhoto[] = [];
  curiosityScrollY = 0;
  perseveranceScrollY = 0;
  curiosityLastRequestedSolIterator = 0;
  perseveranceLastRequestedSolIterator = 0;
  constructor() {}
}
