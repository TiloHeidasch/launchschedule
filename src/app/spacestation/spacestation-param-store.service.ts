import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpacestationParamStoreService {
  search: string;
  status: number;
  orbit: number;
  type: number;

  showFilter = false;
  spacestations: any[] = [];
  scrollY = 0;

  constructor() {}
}
