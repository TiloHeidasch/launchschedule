import { Injectable } from "@angular/core";
import { Reusable } from "../types/reusable";
import { Active } from "../types/active";

@Injectable({
  providedIn: "root",
})
export class RocketParamStoreService {
  search: string;

  showFilter = false;
  rockets: any[] = [];
  scrollY = 0;

  constructor() {}
}
