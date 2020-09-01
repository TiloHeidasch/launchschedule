import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AgencyParamStoreService {
  search: string;
  featured = true;
  type = "";
  countryCode = "";
  showFilter = false;
  agencies: any[] = [];
  scrollY = 0;
  constructor() {}
}
