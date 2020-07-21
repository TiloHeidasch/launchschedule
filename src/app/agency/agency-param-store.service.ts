import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyParamStoreService {
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  agencyId: number;
  showFilter: boolean = false;
  constructor() { }
}
