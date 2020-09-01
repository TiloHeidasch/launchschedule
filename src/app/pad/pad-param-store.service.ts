import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PadParamStoreService {
  search: string;

  showFilter = false;
  pads: any[] = [];
  scrollY = 0;

  constructor() {}
}
