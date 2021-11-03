import { Injectable } from "@angular/core";
import { main as jsonpack } from "jsonpack";
import data from "../data/launches.json";

@Injectable({
  providedIn: "root",
})
export class StatisticService {
  constructor() {}

  getLaunches() {
    return jsonpack.unpack(data);
  }
}
