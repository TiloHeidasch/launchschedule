import { Injectable } from '@angular/core';
import Launches from '../data/launches.json';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  constructor() { }

  getLaunches() {
    return Launches;
  }


}
