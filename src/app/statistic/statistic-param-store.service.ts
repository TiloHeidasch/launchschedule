import { Injectable } from '@angular/core';
import { DatasetSelector } from './dataset-selector';

@Injectable({
  providedIn: 'root'
})
export class StatisticParamStoreService {
  datasetSelectors: DatasetSelector[] = [];
  constructor() { }
}
