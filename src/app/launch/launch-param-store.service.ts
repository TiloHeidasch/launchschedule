import { Injectable } from '@angular/core';
import { UpcomingPreviousAll } from '../types/upcoming-previous-all';

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
  upcomingPreviousAll: UpcomingPreviousAll = UpcomingPreviousAll.UPCOMING;

  constructor() { }
}
