import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacestationParamStoreService {
  search: string;
  status: number;

  showFilter: boolean = false;
  spacestations: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
