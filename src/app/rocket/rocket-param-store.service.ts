import { Injectable } from "@angular/core";
import { Reusable } from "../types/reusable";
import { Active } from "../types/active";

@Injectable({
  providedIn: "root",
})
export class RocketParamStoreService {
  search: string;
  reusable: Reusable = Reusable.ALL;
  active: Active = Active.ACTIVE;

  showFilter = false;
  rockets: any[] = [];
  scrollY = 0;

  constructor() {}
}
