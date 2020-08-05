import { Injectable } from '@angular/core';
import { Reusable } from '../types/reusable';
import { Active } from '../types/active';

@Injectable({
  providedIn: 'root'
})
export class RocketParamStoreService {
  search: string;
  reusable: Reusable = Reusable.ALL;
  active: Active = Active.ACTIVE;

  showFilter: boolean = false;
  rockets: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
