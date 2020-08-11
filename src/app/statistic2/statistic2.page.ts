import { Component, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { StatisticService } from './statistic.service';
import { SelectItem } from 'primeng/api';
import { Md5 } from 'ts-md5/dist/md5';
import { Table } from 'primeng/table';
import { Chart } from "chart.js";

@Component({
  selector: 'app-statistic2',
  templateUrl: './statistic2.page.html',
  styleUrls: ['./statistic2.page.scss'],
})
export class Statistic2Page implements OnInit {
  title = 'Statistics';
  step = 1;
  xAxis;
  what;
  dataRaw;
  dataFiltered;
  rockets: SelectItem[] = [];
  selectedRockets: SelectItem[] = [];
  agencies: SelectItem[] = [];
  selectedAgencies: SelectItem[] = [];
  agencyTypes: SelectItem[] = [];
  selectedAgencyTypes: SelectItem[] = [];
  chartData;
  @ViewChild('tt') table: Table;
  cols: { field: string, header: string }[] = [];
  constructor(private service: StatisticService) {
    // Chart.defaults.global.legend.display = false;
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
    console.log(this.dataFiltered);
  }
  filterOpen() {
    this.step = 2;
  }
  axisComplete() {
    this.step = 4;
    this.initChartData();
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
  }
  private applyFilter() {
    return this.table.filteredValue ? this.table.filteredValue : this.table.value;
  }
  private applyLaunchesFilter() {
    let localData: any[] = [];
    console.log({ dataRaw: this.dataRaw, selectedRockets: this.selectedRockets, selectedAgencies: this.selectedAgencies, selectedAgencyTypes: this.selectedAgencyTypes, });
    console.log({ table: this.table });

    if (this.selectedRockets.length > 0) {
      this.selectedRockets.forEach(selected => {
        localData.push(...this.dataRaw.filter(datapoint => (datapoint.rocket__configuration__full_name === selected)));
      });
    }
    if (this.selectedAgencies.length > 0) {
      this.selectedAgencies.forEach(selected => {
        localData.push(...this.dataRaw.filter(datapoint => (datapoint.launch_service_provider__name === selected)));
      });
    }
    if (this.selectedAgencyTypes.length > 0) {
      this.selectedAgencyTypes.forEach(selected => {
        localData.push(...this.dataRaw.filter(datapoint => (datapoint.launch_service_provider__type === selected)));
      });
    }
    return localData;
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
      { field: 'launch_service_provider__name', header: 'Agency' },
      { field: 'launch_service_provider__type', header: 'Agencytype' },
    ]
    this.dataRaw = await (await this.service.getLaunches()).map(launch => {
      return {
        name: launch.name,
        net: launch.net,
        launch_service_provider__name: launch.launch_service_provider.name,
        launch_service_provider__type: launch.launch_service_provider.type,
        rocket__configuration__full_name: launch.rocket.configuration.full_name
      }
    });
    this.rockets = this.dataRaw
      .map(launch => {
        return launch.rocket__configuration__full_name;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((r1, r2) => (r1 < r2 ? -1 : 1))
      .map(rocket => {
        return { label: rocket, value: rocket, }
      });
    this.agencies = this.dataRaw
      .map(launch => {
        return launch.launch_service_provider__name;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a1, a2) => (a1 < a2 ? -1 : 1))
      .map(agency => {
        return { label: agency, value: agency, }
      });
    this.agencyTypes = this.dataRaw
      .map(launch => {
        return launch.launch_service_provider__type;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((at1, at2) => (at1 < at2 ? -1 : 1))
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
  private getLaunchesLabels() {
    switch (this.xAxis) {
      case 'rocket':
        return this.dataFiltered
          .map(launch => {
            return launch.rocket__configuration__full_name;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((at1, at2) => (at1 < at2 ? -1 : 1));
      case 'agency':
        return this.dataFiltered
          .map(launch => {
            return launch.launch_service_provider__name;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((at1, at2) => (at1 < at2 ? -1 : 1));
      case 'agencyType':
        return this.dataFiltered
          .map(launch => {
            return launch.launch_service_provider__type;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((at1, at2) => (at1 < at2 ? -1 : 1));
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
        case 'rocket':
          localData.push(
            this.dataFiltered.filter(datapoint => (datapoint.rocket__configuration__full_name === label)).length
          );
          break;
        case 'agency':
          localData.push(
            this.dataFiltered.filter(datapoint => (datapoint.launch_service_provider__name === label)).length
          );
          break;
        case 'agencyType':
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
      const md5 = new Md5();
      md5.appendStr(label);
      colors.push('#' + md5.end().toString().toUpperCase().substr(0, 6));
    });
    return colors;
  }

  private initChartData() {
    const labels = this.getLabels();
    const data = this.getDataForLabels(labels);
    const backgroundColor = this.getColors(labels);

    console.log({ labels, data });

    this.chartData = {
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
}
