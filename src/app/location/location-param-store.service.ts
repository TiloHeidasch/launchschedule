import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocationParamStoreService {
  search: string;
  countryCode = "";

  showFilter = false;
  locations: any[] = [];
  scrollY = 0;

  constructor() {}
}
