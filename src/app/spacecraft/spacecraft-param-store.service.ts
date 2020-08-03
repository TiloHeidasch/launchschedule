import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacecraftParamStoreService {
  search: string;
  inUse: boolean = true;
  humanRated: boolean = true;

  showFilter: boolean = false;
  spacecrafts: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
