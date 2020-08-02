import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { Dataset } from './dataset';
import { DatasetSelector } from './dataset-selector';
import { DatasetSelectorType } from "./dataset-selector-type";
import { LaunchLibraryService } from '../launch-library.service';
import { StatisticParamStoreService } from './statistic-param-store.service';
import { TypeFilterItemType } from './type-filter-item-type';
import { TypeFilterItem } from './type-filter-item';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
})
export class StatisticPage implements OnInit {
  @ViewChild("barCanvas", { read: ElementRef, static: true }) barCanvas: ElementRef;
  @ViewChild("doughnutCanvas", { read: ElementRef, static: true }) doughnutCanvas: ElementRef;

  title = 'Statistics';
  private barChart: Chart;
  private doughnutChart: Chart;
  datasets: Dataset[] = [];
  public DatasetSelectorType = DatasetSelectorType;

  constructor(private service: LaunchLibraryService, public store: StatisticParamStoreService) {
    if (this.store.datasetSelectors.length === 0) {
      this.addDatasetSelector();
    } else {
      this.datasetSelectorChange();
    }
  }
  ngOnInit() {
    this.initCharts();
  }
  datasetSelectorTypeChange(datasetSelector: DatasetSelector, event) {
    datasetSelector.setType(event.detail.value);
    this.datasetSelectorChange();
  }
  datasetSelectorSearchChange(datasetSelector: DatasetSelector, event) {
    datasetSelector.setSearch(event.detail.value);
    this.datasetSelectorChange();
  }
  datasetSelectorfilterItemChange(datasetSelector: DatasetSelector, filterItem: TypeFilterItem, event) {
    const value = event.detail.value;
    switch (filterItem.type) {
      case TypeFilterItemType.Rocket:
        if (value === 'none') {
          datasetSelector.setRocket(undefined);
        } else {
          datasetSelector.setRocket(event.detail.value);
        }
        break;
      case TypeFilterItemType.Agency:
        if (value === 'none') {
          datasetSelector.setAgency(undefined);
        } else {
          datasetSelector.setAgency(event.detail.value);
        }
        break;
      case TypeFilterItemType.Pad:
        if (value === 'none') {
          datasetSelector.setPad(undefined);
        } else {
          datasetSelector.setPad(event.detail.value);
        }
        break;
      case TypeFilterItemType.Location:
        if (value === 'none') {
          datasetSelector.setLocation(undefined);
        } else {
          datasetSelector.setLocation(event.detail.value);
        }
        break;
      default:
        break;
    }
    this.datasetSelectorChange();
  }

  addDatasetSelector() {
    this.store.datasetSelectors.push(new DatasetSelector(this.service, this.store));
    this.datasetSelectorChange();
  }
  async deleteDatasetSelector(datasetSelector: DatasetSelector) {
    const element = document.getElementById(datasetSelector.getId());
    for (let index = 0; index < 100; index += 3) {
      element.style.left = index + '%';
      await this.sleep(1);
    }
    this.store.datasetSelectors = this.store.datasetSelectors.filter(otherDatasetSelector => (otherDatasetSelector !== datasetSelector));
    if (this.store.datasetSelectors.length === 0) {
      this.addDatasetSelector();
    } else {
      this.datasetSelectorChange();
    }
  }
  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  private initCharts() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
      }
    });

  }
  private updateCharts() {
    const data = {
      labels: this.getLabels(this.datasets),
      datasets: [
        {
          data: this.getValues(this.datasets),
          backgroundColor: this.getColorsLight(this.datasets),
          borderColor: this.getColors(this.datasets),
          hoverBackgroundColor: this.getColors(this.datasets),
          borderWidth: 1
        }
      ]
    };
    this.barChart.data = data;
    this.doughnutChart.data = data;
    this.barChart.update();
    this.doughnutChart.update();
  }
  private async datasetSelectorChange() {
    this.datasets = [];
    for (let index = 0; index < this.store.datasetSelectors.length; index++) {
      const datasetSelector = this.store.datasetSelectors[index];
      const dataset = await this.determineDataSet(datasetSelector)
      this.datasets.push(dataset);
    }
    this.updateCharts();
  }
  private async determineDataSet(datasetSelector: DatasetSelector): Promise<Dataset> {
    let value = 0;
    try {
      switch (datasetSelector.getType()) {
        case "Agencies":
          value = await this.service.getAgencyAmount(datasetSelector.getSearch() === undefined ? '' : datasetSelector.getSearch());
          break;
        case "Launches":
          value = await this.service.getLaunchAmount(datasetSelector.getSearch() === undefined ? '' : datasetSelector.getSearch(), datasetSelector.getRocketId(), datasetSelector.getAgencyId(), datasetSelector.getPadId(), datasetSelector.getLocationId());
          break;
        case "Pads":
          value = await this.service.getPadAmount(datasetSelector.getSearch() === undefined ? '' : datasetSelector.getSearch());
          break;
        case "Payloads":
          value = await this.service.getPayloadAmount(datasetSelector.getSearch() === undefined ? '' : datasetSelector.getSearch());
          break;
        case "Rockets":
          value = await this.service.getRocketAmount(datasetSelector.getSearch() === undefined ? '' : datasetSelector.getSearch());
          break;

        default:
          break;
      }
    } catch (error) { }
    return new Dataset(datasetSelector.getName(), value, datasetSelector.getColor());
  }
  private getLabels(datasets: Dataset[]): string[] {
    const labels = [];
    datasets.forEach(dataset => {
      labels.push(dataset.name);
    });
    return labels;
  }
  private getValues(datasets: Dataset[]): number[] {
    const values = [];
    datasets.forEach(dataset => {
      values.push(dataset.value);
    });
    return values;
  }
  private getColors(datasets: Dataset[]): string[] {
    const colors: string[] = [];
    datasets.forEach(dataset => {
      colors.push(dataset.color);
    });
    return colors;
  }
  private getColorsLight(datasets: Dataset[]): string[] {
    const colors: string[] = [];
    datasets.forEach(dataset => {
      colors.push(dataset.colorLight);
    });
    return colors;
  }
}