import { Component, OnInit, ViewChild } from '@angular/core';
import { StatisticService } from './statistic.service';
import { SelectItem } from 'primeng/api';
import { Md5 } from 'ts-md5/dist/md5';
import { Table } from 'primeng/table';
import { Chart } from "chart.js";

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.page.html',
  styleUrls: ['./statistic.page.scss'],
})
export class StatisticPage implements OnInit {
  title = 'Statistics';
  step = 1;
  xAxis;
  what = 'Launches';
  dataRaw;
  dataFiltered;
  nameSearch;
  fromFilter;
  toFilter;
  rockets: SelectItem[] = [];
  selectedRockets: SelectItem[] = [];
  rocketFamilies: SelectItem[] = [];
  selectedRocketFamilies: SelectItem[] = [];
  agencies: SelectItem[] = [];
  selectedAgencies: SelectItem[] = [];
  agencyTypes: SelectItem[] = [];
  selectedAgencyTypes: SelectItem[] = [];
  lineChartData;
  polarChartData;
  doughnutChartData;
  barChartData;
  @ViewChild('tt') table: Table;
  cols: { field: string, header: string }[] = [];
  constructor(private service: StatisticService) {
    Chart.defaults.global.legend.display = false;
  }

  async ngOnInit() {
  }

  async whatComplete() {
    this.step = 2;
    this.setupTable();
  }
  whatOpen() {
    this.step = 1;
  }
  filterComplete() {
    this.step = 3;
    this.dataFiltered = this.applyFilter();
  }
  filterOpen() {
    this.step = 2;
    setTimeout(() => {
      this.applyPreviousFilters();
    }, 10);
  }
  private applyPreviousFilters() {
    switch (this.what) {
      case 'Launches':
        this.applyLaunchesFilter();
        break;

      default:
        break;
    }
  }
  axisComplete() {
    this.step = 4;
    this.initCharts();
  }
  axisOpen() {
    this.step = 3;
  }
  private setupTable() {
    switch (this.what) {
      case 'Launches':
        return this.setupLaunchesTable();
      case 'Agencies':
        return this.setupAgenciesTable();
      case 'Astronauts':
        return this.setupAstronautsTable();
      case 'Events':
        return this.setupEventsTable();
      case 'Facilities':
        return this.setupFacilitiesTable();
      case 'Pad':
        return this.setupPadTable();
      case 'Rocket':
        return this.setupRocketTable();
      case 'Spacecraft':
        return this.setupSpacecraftTable();
      case 'Spacestation':
        return this.setupSpacestationTable();
      default:
        break;
    }
    setTimeout(() => {
      this.applyPreviousFilters();
    }, 10);
  }
  private applyFilter() {
    return this.table.filteredValue ? this.table.filteredValue : this.table.value;
  }
  private applyLaunchesFilter() {
    this.table.filter(this.nameSearch, 'name', 'contains');
    if (this.fromFilter) {
      this.onDateSelect(this.fromFilter, 'gte');
    }
    if (this.toFilter) {
      this.onDateSelect(this.toFilter, 'gte');
    }
    this.table.filter(this.selectedRockets, 'rocket__configuration__full_name', 'in')
    this.table.filter(this.selectedRocketFamilies, 'rocket__configuration__family', 'in')
    this.table.filter(this.selectedAgencies, 'launch_service_provider__name', 'in')
    this.table.filter(this.selectedAgencyTypes, 'launch_service_provider__type', 'in')
  }

  private applyAgenciesFilter() { }
  private applyAstronautsFilter() { }
  private applyEventsFilter() { }
  private applyFacilitiesFilter() { }
  private applyPadFilter() { }
  private applyRocketFilter() { }
  private applySpacecraftFilter() { }
  private applySpacestationFilter() { }

  private async setupLaunchesTable() {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'net', header: 'Date' },
      { field: 'rocket__configuration__full_name', header: 'Rocket' },
      { field: 'rocket__configuration__family', header: 'Rocket Family' },
      { field: 'launch_service_provider__name', header: 'Agency' },
      { field: 'launch_service_provider__type', header: 'Agencytype' },
    ]
    this.dataRaw = this.service.getLaunches();
    this.rockets = this.dataRaw
      .map(launch => {
        return launch.rocket__configuration__full_name;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map(rocket => {
        return { label: rocket, value: rocket, }
      });
    this.rocketFamilies = this.dataRaw
      .map(launch => {
        return launch.rocket__configuration__family;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map(rocketFamily => {
        return { label: rocketFamily, value: rocketFamily, }
      });
    this.agencies = this.dataRaw
      .map(launch => {
        return launch.launch_service_provider__name;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map(agency => {
        return { label: agency, value: agency, }
      });
    this.agencyTypes = this.dataRaw
      .map(launch => {
        return launch.launch_service_provider__type;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map(agencyType => {
        return { label: agencyType, value: agencyType, }
      });
  }
  private setupAgenciesTable() { }
  private setupAstronautsTable() { }
  private setupEventsTable() { }
  private setupFacilitiesTable() { }
  private setupPadTable() { }
  private setupRocketTable() { }
  private setupSpacecraftTable() { }
  private setupSpacestationTable() { }
  private getLabels() {
    switch (this.what) {
      case 'Launches':
        return this.getLaunchesLabels();
      case 'Agencies':
        return this.getAgenciesLabels();
      case 'Astronauts':
        return this.getAstronautsLabels();
      case 'Events':
        return this.getEventsLabels();
      case 'Facilities':
        return this.getFacilitiesLabels();
      case 'Pad':
        return this.getPadLabels();
      case 'Rocket':
        return this.getRocketLabels();
      case 'Spacecraft':
        return this.getSpacecraftLabels();
      case 'Spacestation':
        return this.getSpacestationLabels();
      default:
        break;
    }
  }

  getLabelsWithDatasets(cumulative: boolean, fill: boolean): { labels, datasets } {
    const dates: Date[] = this.getDates();
    const datasets = this.getDatasetsForXAxisForDates(dates, cumulative, fill);
    const labels = [];
    for (let index = 0; index < dates.length - 1; index++) {
      const date = dates[index];
      const nextDate = dates[index + 1];
      labels.push(this.createDateLabel(date, nextDate, dates[0], dates[dates.length - 1], dates.length));
    }
    const labelsWithDatasets: { labels, datasets } = { labels, datasets };
    return labelsWithDatasets;
  }
  createDateLabel(date: Date, nextDate: Date, firstDate: Date, lastDate: Date, amountDates: number) {
    //check if years is enough
    const isYearsEnough = lastDate.getFullYear() - firstDate.getFullYear() > amountDates;
    if (isYearsEnough) {
      //year is enough
      return this.getYearString(date) + '-' + this.getYearString(nextDate);
    } else {
      // year is not enough (it is less than 10 years)
      // check if months are enough
      const monthDiff = this.monthDiff(firstDate, lastDate);
      console.log(monthDiff);
      const isMonthsEnough = monthDiff > amountDates;
      if (isMonthsEnough) {
        //months is enough
        return this.getMonthString(date) + '-' + this.getMonthString(nextDate);
      } else {
        //months is not enough
        return this.getDayString(date) + '-' + this.getDayString(nextDate);
      }
    }
  }
  getYearString(date: Date) {
    return date.getFullYear().toString().substring(2);
  }
  getMonthString(date: Date) {
    return date.getMonth() + 1 + '/' + this.getYearString(date);
  }
  getDayString(date: Date) {
    return date.getDate() + '/' + this.getMonthString(date);
  }
  monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  getDates(): Date[] {
    const data: any[] = this.dataFiltered;
    const dates = this.dataFiltered.map(data => { return new Date(data.net).valueOf() });
    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);
    const diffDate = maxDate - minDate;
    const chunkAmount = 10;
    const chunkSize = diffDate / chunkAmount;
    const chunks = [];
    chunks.push(minDate);
    for (let index = 0; index < chunkAmount; index++) {
      chunks.push(chunks[index] + chunkSize);
    }
    const dateLabels = chunks.map(chunk => { return new Date(chunk) });
    return dateLabels;
  }
  getDatasetsForXAxisForDates(dates: Date[], cumulative: boolean, fill: boolean) {
    let xAxisValues;
    switch (this.xAxis) {
      case 'Rocket':
        xAxisValues = this.dataFiltered.map(launch => { return launch.rocket__configuration__full_name })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;
      case 'RocketFamily':
        xAxisValues = this.dataFiltered.map(launch => { return launch.rocket__configuration__family })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;
      case 'Agency':
        xAxisValues = this.dataFiltered.map(launch => { return launch.launch_service_provider__name })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;
      case 'AgencyType':
        xAxisValues = this.dataFiltered.map(launch => { return launch.launch_service_provider__type })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;

      default:
        break;
    }
    const datasetsArray = [];
    for (let index = 0; index < xAxisValues.length; index++) {
      const xAxisValue = xAxisValues[index];
      const color = this.getColor(xAxisValue);
      let dataForXAxisValue;
      switch (this.xAxis) {
        case 'Rocket':
          dataForXAxisValue = this.dataFiltered.filter(launch => (launch.rocket__configuration__full_name === xAxisValue));
          break;
        case 'RocketFamily':
          dataForXAxisValue = this.dataFiltered.filter(launch => (launch.rocket__configuration__family === xAxisValue));
          break;
        case 'Agency':
          dataForXAxisValue = this.dataFiltered.filter(launch => (launch.launch_service_provider__name === xAxisValue));
          break;
        case 'AgencyType':
          dataForXAxisValue = this.dataFiltered.filter(launch => (launch.launch_service_provider__type === xAxisValue));
          break;

        default:
          break;
      }
      let dataSet;
      if (fill) {
        dataSet = { label: xAxisValue, data: [], borderColor: color, backgroundColor: color };
      } else {
        dataSet = { label: xAxisValue, data: [], fill: false, borderColor: color };
      }
      let cumulativeCount = 0;
      for (let index = 0; index < dates.length - 1; index++) {
        const date = dates[index];
        const nextDate = dates[index + 1];
        const count = dataForXAxisValue.filter(launch => (new Date(launch.net) >= date && new Date(launch.net) <= nextDate)).length;
        if (cumulative) {
          cumulativeCount += count;
          dataSet.data.push(cumulativeCount);
        } else {
          dataSet.data.push(count);
        }
      }
      datasetsArray.push(dataSet);
    }
    return datasetsArray;
  }
  private getLaunchesLabels() {
    switch (this.xAxis) {
      case 'Rocket':
        return this.dataFiltered
          .map(launch => {
            return launch.rocket__configuration__full_name;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      case 'RocketFamily':
        return this.dataFiltered
          .map(launch => {
            return launch.rocket__configuration__family;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      case 'Agency':
        return this.dataFiltered
          .map(launch => {
            return launch.launch_service_provider__name;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      case 'AgencyType':
        return this.dataFiltered
          .map(launch => {
            return launch.launch_service_provider__type;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      default:
        break;
    }
  }

  private getAgenciesLabels() { }
  private getAstronautsLabels() { }
  private getEventsLabels() { }
  private getFacilitiesLabels() { }
  private getPadLabels() { }
  private getRocketLabels() { }
  private getSpacecraftLabels() { }
  private getSpacestationLabels() { }
  private getDataForLabels(labels) {
    switch (this.what) {
      case 'Launches':
        return this.getLaunchesDataForLabels(labels);
      case 'Agencies':
        return this.getAgenciesDataForLabels(labels);
      case 'Astronauts':
        return this.getAstronautsDataForLabels(labels);
      case 'Events':
        return this.getEventsDataForLabels(labels);
      case 'Facilities':
        return this.getFacilitiesDataForLabels(labels);
      case 'Pad':
        return this.getPadDataForLabels(labels);
      case 'Rocket':
        return this.getRocketDataForLabels(labels);
      case 'Spacecraft':
        return this.getSpacecraftDataForLabels(labels);
      case 'Spacestation':
        return this.getSpacestationDataForLabels(labels);
      default:
        break;
    }
  }
  private getLaunchesDataForLabels(labels) {
    const localData = [];
    labels.forEach(label => {
      switch (this.xAxis) {
        case 'Rocket':
          localData.push(
            this.dataFiltered.filter(datapoint => (datapoint.rocket__configuration__full_name === label)).length
          );
          break;
        case 'RocketFamily':
          localData.push(
            this.dataFiltered.filter(datapoint => (datapoint.rocket__configuration__family === label)).length
          );
          break;
        case 'Agency':
          localData.push(
            this.dataFiltered.filter(datapoint => (datapoint.launch_service_provider__name === label)).length
          );
          break;
        case 'AgencyType':
          localData.push(
            this.dataFiltered.filter(datapoint => (datapoint.launch_service_provider__type === label)).length
          );
          break;
        default:
          break;
      }
    });
    return localData;
  }
  private getAgenciesDataForLabels(labels) { }
  private getAstronautsDataForLabels(labels) { }
  private getEventsDataForLabels(labels) { }
  private getFacilitiesDataForLabels(labels) { }
  private getPadDataForLabels(labels) { }
  private getRocketDataForLabels(labels) { }
  private getSpacecraftDataForLabels(labels) { }
  private getSpacestationDataForLabels(labels) { }
  private getColors(labels) {
    const colors = [];
    labels.forEach(label => {
      colors.push(this.getColor(label));
    });
    return colors;
  }
  private getColor(label) {
    const md5 = new Md5();
    md5.appendStr(label ? label : '');
    return '#' + md5.end().toString().toUpperCase().substr(0, 6);
  }
  private initCharts() {
    this.initLineChart();
    this.initPolarChart();
    this.initDoughnutChart();
    this.initBarChart();
  }
  private initLineChart() {
    const labelsWithDatasets: { labels, datasets } = this.getLabelsWithDatasets(true, false);
    this.lineChartData = {
      labels: labelsWithDatasets.labels,
      datasets: labelsWithDatasets.datasets,
      options: {
        legend: {
          position: 'right'
        },
      }
    };
  }
  private initPolarChart() {
    const labels = this.getLabels();
    const data = this.getDataForLabels(labels);
    const backgroundColor = this.getColors(labels);
    this.polarChartData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          hoverBackgroundColor: backgroundColor,
        }],
      options: {
        legend: {
          position: 'right'
        },
      }
    };
  }
  private initDoughnutChart() {
    const labels = this.getLabels();
    const data = this.getDataForLabels(labels);
    const backgroundColor = this.getColors(labels);
    this.doughnutChartData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          hoverBackgroundColor: backgroundColor,
        }],
      options: {
        legend: {
          position: 'right'
        },
      }
    };
  }
  private initBarChart() {
    const labelsWithDatasets: { labels, datasets } = this.getLabelsWithDatasets(false, true);
    this.barChartData = {
      labels: labelsWithDatasets.labels,
      datasets: labelsWithDatasets.datasets,
      options: {
        legend: {
          position: 'right'
        },
      }
    };
  }
  onDateSelect(value, filter) {
    this.table.filter(this.formatDate(value), 'net', filter);
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }
}
