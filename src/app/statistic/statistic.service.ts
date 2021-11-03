import { Injectable } from "@angular/core";
import { decompress } from "compress-json";
import launches from "../data/launches.json";

@Injectable({
  providedIn: "root",
})
export class StatisticService {
  constructor() {}

  getLaunches() {
    return decompress(launches);
  }
}
