import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayloadParamStoreService {
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  payloadId: number;

  showFilter: boolean = false;

  constructor() { }
}
