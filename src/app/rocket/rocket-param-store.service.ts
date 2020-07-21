import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RocketParamStoreService {
  search: string;
  padId: number;
  locationId: number;
  rocketId: number;
  agencyId: number;

  showFilter: boolean = false;

  constructor() { }
}
