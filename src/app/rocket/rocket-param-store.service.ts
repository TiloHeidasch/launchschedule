import { Injectable } from "@angular/core";

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
