import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationParamStoreService {
  search: string;
  startDate: Date;
  endDate: Date;
  locationId: number;
  rocketId: number;

  showFilter: boolean = false;
  locations: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
