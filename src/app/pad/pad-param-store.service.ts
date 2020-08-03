import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PadParamStoreService {
  search: string;

  showFilter: boolean = false;
  pads: any[] = [];
  scrollY: number = 0;

  constructor() { }
}
