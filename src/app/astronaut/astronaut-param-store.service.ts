import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AstronautParamStoreService {
  search: string;
  status: number;

  showFilter: boolean = false;
  astronauts: any[] = [];

  constructor() { }
}
