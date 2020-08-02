import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RocketParamStoreService {
  search: string;
  reusable: boolean = false;
  active: boolean = true;

  showFilter: boolean = false;
  rockets: any[] = [];

  constructor() { }
}
