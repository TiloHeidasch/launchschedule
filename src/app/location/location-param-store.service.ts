import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationParamStoreService {
  search: string;
  countryCode: string = '';

  showFilter: boolean = false;
  locations: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
