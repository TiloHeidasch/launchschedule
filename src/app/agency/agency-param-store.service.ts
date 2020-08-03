import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgencyParamStoreService {
  search: string;
  featured: boolean = true;
  type: string = '';
  countryCode: string = '';
  showFilter: boolean = false;
  agencies: any[] = [];
  scrollY: number = 0;
  constructor() { }
}
