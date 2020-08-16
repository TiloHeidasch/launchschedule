import { Injectable } from '@angular/core';
import SampleJson from '../data/launches.json';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  constructor() { }

  getLaunches() {
    return SampleJson;
  }


}
