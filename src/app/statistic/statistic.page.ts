import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from "chart.js";
import { Dataset } from './dataset';
import { DatasetSelector } from './dataset-selector';
import { LaunchLibraryService } from '../launch-library.service';
import { StatisticParamStoreService } from './statistic-param-store.service';

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

  addDatasetSelector() {
    this.store.datasetSelectors.push(new DatasetSelector());
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
  private async determineDataSet(datasetSelector): Promise<Dataset> {
    let value = 0;
    switch (datasetSelector.type) {
      case "Agencies":
        value = await this.service.getAgencyAmount(datasetSelector.search === undefined ? '' : datasetSelector.search);
        break;
      case "Launches":
        value = await this.service.getLaunchAmount(datasetSelector.search === undefined ? '' : datasetSelector.search);
        break;
      case "Missions":
        value = await this.service.getMissionAmount(datasetSelector.search === undefined ? '' : datasetSelector.search);
        break;
      case "Pads":
        value = await this.service.getPadAmount(datasetSelector.search === undefined ? '' : datasetSelector.search);
        break;
      case "Payloads":
        value = await this.service.getPayloadAmount(datasetSelector.search === undefined ? '' : datasetSelector.search);
        break;
      case "Rockets":
        value = await this.service.getRocketAmount(datasetSelector.search === undefined ? '' : datasetSelector.search);
        break;

      default:
        break;
    }
    return new Dataset(datasetSelector.name, value, datasetSelector.color);
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