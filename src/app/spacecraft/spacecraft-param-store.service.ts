import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacecraftParamStoreService {
  search: string;
  status: number;

  showFilter: boolean = false;
  spacecrafts: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
