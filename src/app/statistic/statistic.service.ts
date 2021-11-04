import { Injectable } from "@angular/core";
import data from "../data/launches.json";

@Injectable({
  providedIn: "root",
})
export class StatisticService {
  constructor() {}

  getLaunches() {
    return data;
  }
}
