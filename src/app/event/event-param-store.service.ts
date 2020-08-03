import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventParamStoreService {
  search: string;
  status: number;

  showFilter: boolean = false;
  events: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
