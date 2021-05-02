import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AstronautParamStoreService {
  search: string;
  status: string;

  showFilter = false;
  astronauts: any[] = [];
  scrollY = 0;

  constructor() {}
}
