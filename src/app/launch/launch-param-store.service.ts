import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaunchParamStoreService {
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  agencyId: number;
  showFilter: boolean = false;
  launches: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
