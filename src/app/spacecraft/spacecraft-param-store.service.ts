import { Injectable } from '@angular/core';
import { Active } from '../types/active';
import { HumanRated } from '../types/human-rated';

@Injectable({
  providedIn: 'root'
})
export class SpacecraftParamStoreService {
  search: string;
  inUse: Active = Active.ACTIVE;
  humanRated: HumanRated = HumanRated.ALL;

  showFilter: boolean = false;
  spacecrafts: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
