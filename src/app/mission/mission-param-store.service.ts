import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionParamStoreService {
  search: string;
  startDate: Date;
  endDate: Date;
  padId: number;
  locationId: number;
  rocketId: number;
  missionId: number;

  showFilter: boolean = false;
  missions: any[] = [];

  constructor() { }
}
