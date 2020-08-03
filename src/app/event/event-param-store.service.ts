import { Injectable } from '@angular/core';
import { UpcomingPreviousAll } from '../types/upcoming-previous-all';

@Injectable({
  providedIn: 'root'
})
export class EventParamStoreService {
  search: string;
  type: number;

  showFilter: boolean = false;
  events: any[] = [];
  scrollY: number = 0;
  upcomingPreviousAll: UpcomingPreviousAll = UpcomingPreviousAll.UPCOMING;

  constructor() { }
}
