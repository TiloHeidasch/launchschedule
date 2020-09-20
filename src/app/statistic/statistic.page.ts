import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { StatisticService } from "./statistic.service";
import { SelectItem } from "primeng/api";
import { Md5 } from "ts-md5/dist/md5";
import { Table } from "primeng/table";
import { Chart } from "chart.js";

@Component({
  selector: "app-statistic",
  templateUrl: "./statistic.page.html",
  styleUrls: ["./statistic.page.scss"],
})
export class StatisticPage implements OnInit {
  title = "Statistics";
  step = 1;
  xAxis;
  what = "Launches";
  dataRaw;
  dataFiltered;
  globalSearch;
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
  spacecrafts: SelectItem[] = [];
  selectedSpacecrafts: SelectItem[] = [];
  lineChartData;
  polarChartData;
  doughnutChartData;
  barChartData;
  @ViewChild("tt") table: Table;
  cols: { field: string; header: string }[] = [];
  constructor(private service: StatisticService) {
    Chart.defaults.global.legend.display = false;
  }

  async ngOnInit() {}

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
      case "Launches":
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
      case "Launches":
        return this.setupLaunchesTable();
      default:
        break;
    }
    setTimeout(() => {
      this.applyPreviousFilters();
    }, 10);
  }
  private applyFilter() {
    return this.table.filteredValue
      ? this.table.filteredValue
      : this.table.value;
  }
  private applyLaunchesFilter() {
    this.table.filterGlobal(this.globalSearch, "contains");
    this.table.filter(this.nameSearch, "name", "contains");
    if (this.fromFilter) {
      this.onDateSelect(this.fromFilter, "gte");
    }
    if (this.toFilter) {
      this.onDateSelect(this.toFilter, "gte");
    }
    this.table.filter(
      this.selectedRockets,
      "rocket__configuration__full_name",
      "in"
    );
    this.table.filter(
      this.selectedRocketFamilies,
      "rocket__configuration__family",
      "in"
    );
    this.table.filter(
      this.selectedAgencies,
      "launch_service_provider__name",
      "in"
    );
    this.table.filter(
      this.selectedAgencyTypes,
      "launch_service_provider__type",
      "in"
    );
    this.table.filter(
      this.selectedSpacecrafts,
      "rocket__spacecraft_stage__spacecraft__spacecraft_config__name",
      "in"
    );
  }

  private async setupLaunchesTable() {
    this.cols = [
      { field: "name", header: "Name" },
      { field: "net", header: "Date" },
      { field: "rocket__configuration__full_name", header: "Rocket" },
      { field: "rocket__configuration__family", header: "Rocket Family" },
      { field: "launch_service_provider__name", header: "Agency" },
      { field: "launch_service_provider__type", header: "Agencytype" },
      {
        field: "rocket__spacecraft_stage__spacecraft__spacecraft_config__name",
        header: "Spacecraft",
      },
    ];
    this.dataRaw = this.service.getLaunches();
    this.rockets = this.dataRaw
      .map((launch) => {
        return launch.rocket__configuration__full_name;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map((rocket) => {
        return { label: rocket, value: rocket };
      });
    this.rocketFamilies = this.dataRaw
      .map((launch) => {
        return launch.rocket__configuration__family;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map((rocketFamily) => {
        return { label: rocketFamily, value: rocketFamily };
      });
    this.agencies = this.dataRaw
      .map((launch) => {
        return launch.launch_service_provider__name;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map((agency) => {
        return { label: agency, value: agency };
      });
    this.agencyTypes = this.dataRaw
      .map((launch) => {
        return launch.launch_service_provider__type;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map((agencyType) => {
        return { label: agencyType, value: agencyType };
      });
    this.spacecrafts = this.dataRaw
      .map((launch) => {
        return launch.rocket__spacecraft_stage__spacecraft__spacecraft_config__name;
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((x1, x2) => (x1 < x2 ? -1 : 1))
      .map((spacecraft) => {
        return { label: spacecraft, value: spacecraft };
      });
  }
  private getLabels() {
    switch (this.what) {
      case "Launches":
        return this.getLaunchesLabels();
      default:
        break;
    }
  }

  getLabelsWithDatasets(
    cumulative: boolean,
    fill: boolean
  ): { labels; datasets } {
    const dates: Date[] = this.getDates();
    const datasets = this.getDatasetsForXAxisForDates(dates, cumulative, fill);
    const labels = [];
    if (cumulative) {
      dates.forEach((date) => {
        labels.push(
          this.createDateLabel(
            date,
            undefined,
            dates[0],
            dates[dates.length - 1],
            dates.length,
            cumulative
          )
        );
      });
    } else {
      for (let index = 0; index < dates.length - 1; index++) {
        const date = dates[index];
        const nextDate = dates[index + 1];
        labels.push(
          this.createDateLabel(
            date,
            nextDate,
            dates[0],
            dates[dates.length - 1],
            dates.length,
            cumulative
          )
        );
      }
    }
    const labelsWithDatasets: { labels; datasets } = { labels, datasets };
    return labelsWithDatasets;
  }
  createDateLabel(
    date: Date,
    nextDate: Date,
    firstDate: Date,
    lastDate: Date,
    amountDates: number,
    cumulative: boolean
  ) {
    // check if years is enough
    const isYearsEnough =
      lastDate.getFullYear() - firstDate.getFullYear() > amountDates;
    if (isYearsEnough) {
      // year is enough
      if (cumulative) {
        return this.getYearString(date);
      }
      return this.getYearString(date) + "-" + this.getYearString(nextDate);
    } else {
      // year is not enough (it is less than 10 years)
      // check if months are enough
      const monthDiff = this.monthDiff(firstDate, lastDate);
      const isMonthsEnough = monthDiff > amountDates;
      if (isMonthsEnough) {
        // months is enough
        if (cumulative) {
          return this.getMonthString(date);
        }
        return this.getMonthString(date) + "-" + this.getMonthString(nextDate);
      } else {
        // months is not enough
        if (cumulative) {
          return this.getDayString(date);
        }
        return this.getDayString(date) + "-" + this.getDayString(nextDate);
      }
    }
  }
  getYearString(date: Date) {
    return date.getFullYear().toString().substring(2);
  }
  getMonthString(date: Date) {
    return date.getMonth() + 1 + "/" + this.getYearString(date);
  }
  getDayString(date: Date) {
    return date.getDate() + "/" + this.getMonthString(date);
  }
  monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
  }
  getDates(): Date[] {
    const dates = this.dataFiltered.map((data) => new Date(data.net).valueOf());
    const minDate = Math.min(...dates);
    const maxDate = Math.max(...dates);
    const diffDate = maxDate - minDate;
    const chunkAmount = 10;
    const chunkSize = diffDate / chunkAmount;
    const chunks = [];
    chunks.push(minDate - chunkSize);
    chunks.push(minDate);
    for (let index = 1; index <= chunkAmount; index++) {
      chunks.push(chunks[index] + chunkSize);
    }
    const dateLabels = chunks.map((chunk) => new Date(chunk));
    return dateLabels;
  }
  getDatasetsForXAxisForDates(
    dates: Date[],
    cumulative: boolean,
    fill: boolean
  ) {
    let xAxisValues;
    switch (this.xAxis) {
      case "Rocket":
        xAxisValues = this.dataFiltered
          .map((launch) => launch.rocket__configuration__full_name)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;
      case "RocketFamily":
        xAxisValues = this.dataFiltered
          .map((launch) => launch.rocket__configuration__family)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;
      case "Agency":
        xAxisValues = this.dataFiltered
          .map((launch) => launch.launch_service_provider__name)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;
      case "AgencyType":
        xAxisValues = this.dataFiltered
          .map((launch) => launch.launch_service_provider__type)
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;
      case "Spacecraft":
        xAxisValues = this.dataFiltered
          .map(
            (launch) =>
              launch.rocket__spacecraft_stage__spacecraft__spacecraft_config__name
          )
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
        break;

      default:
        break;
    }
    const datasetsArray = [];
    xAxisValues.forEach((xAxisValue) => {
      const color = this.getColor(xAxisValue);
      let dataForXAxisValue;
      switch (this.xAxis) {
        case "Rocket":
          dataForXAxisValue = this.dataFiltered.filter(
            (launch) => launch.rocket__configuration__full_name === xAxisValue
          );
          break;
        case "RocketFamily":
          dataForXAxisValue = this.dataFiltered.filter(
            (launch) => launch.rocket__configuration__family === xAxisValue
          );
          break;
        case "Agency":
          dataForXAxisValue = this.dataFiltered.filter(
            (launch) => launch.launch_service_provider__name === xAxisValue
          );
          break;
        case "AgencyType":
          dataForXAxisValue = this.dataFiltered.filter(
            (launch) => launch.launch_service_provider__type === xAxisValue
          );
          break;
        case "Spacecraft":
          dataForXAxisValue = this.dataFiltered.filter(
            (launch) =>
              launch.rocket__spacecraft_stage__spacecraft__spacecraft_config__name ===
              xAxisValue
          );
          break;

        default:
          break;
      }
      let dataSet;
      if (fill) {
        dataSet = {
          label: xAxisValue,
          data: [],
          borderColor: color,
          backgroundColor: color,
        };
      } else {
        dataSet = {
          label: xAxisValue,
          data: [],
          fill: false,
          borderColor: color,
        };
      }
      if (cumulative) {
        dates.forEach((date) => {
          const count = dataForXAxisValue.filter(
            (launch) => new Date(launch.net) <= date
          ).length;
          dataSet.data.push(count);
        });
      } else {
        for (let index = 0; index < dates.length - 1; index++) {
          const date = dates[index];
          const nextDate = dates[index + 1];
          const count = dataForXAxisValue.filter(
            (launch) =>
              new Date(launch.net) >= date && new Date(launch.net) <= nextDate
          ).length;
          dataSet.data.push(count);
        }
      }
      datasetsArray.push(dataSet);
    });
    return datasetsArray;
  }
  private getLaunchesLabels() {
    switch (this.xAxis) {
      case "Rocket":
        return this.dataFiltered
          .map((launch) => {
            return launch.rocket__configuration__full_name;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      case "RocketFamily":
        return this.dataFiltered
          .map((launch) => {
            return launch.rocket__configuration__family;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      case "Agency":
        return this.dataFiltered
          .map((launch) => {
            return launch.launch_service_provider__name;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      case "AgencyType":
        return this.dataFiltered
          .map((launch) => {
            return launch.launch_service_provider__type;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      case "Spacecraft":
        return this.dataFiltered
          .map((launch) => {
            return launch.rocket__spacecraft_stage__spacecraft__spacecraft_config__name;
          })
          .filter((value, index, self) => self.indexOf(value) === index)
          .sort((x1, x2) => (x1 < x2 ? -1 : 1));
      default:
        break;
    }
  }

  private getDataForLabels(labels) {
    switch (this.what) {
      case "Launches":
        return this.getLaunchesDataForLabels(labels);
      default:
        break;
    }
  }
  private getLaunchesDataForLabels(labels) {
    const localData = [];
    labels.forEach((label) => {
      switch (this.xAxis) {
        case "Rocket":
          localData.push(
            this.dataFiltered.filter(
              (datapoint) =>
                datapoint.rocket__configuration__full_name === label
            ).length
          );
          break;
        case "RocketFamily":
          localData.push(
            this.dataFiltered.filter(
              (datapoint) => datapoint.rocket__configuration__family === label
            ).length
          );
          break;
        case "Agency":
          localData.push(
            this.dataFiltered.filter(
              (datapoint) => datapoint.launch_service_provider__name === label
            ).length
          );
          break;
        case "AgencyType":
          localData.push(
            this.dataFiltered.filter(
              (datapoint) => datapoint.launch_service_provider__type === label
            ).length
          );
          break;
        case "Spacecraft":
          localData.push(
            this.dataFiltered.filter(
              (datapoint) =>
                datapoint.rocket__spacecraft_stage__spacecraft__spacecraft_config__name ===
                label
            ).length
          );
          break;
        default:
          break;
      }
    });
    return localData;
  }
  private getColors(labels) {
    const colors = [];
    labels.forEach((label) => {
      colors.push(this.getColor(label));
    });
    return colors;
  }
  private getColor(label) {
    const md5 = new Md5();
    md5.appendStr(label ? label : "");
    return "#" + md5.end().toString().toUpperCase().substr(0, 6);
  }
  private initCharts() {
    this.initLineChart();
    this.initPolarChart();
    this.initDoughnutChart();
    this.initBarChart();
  }
  private initLineChart() {
    const labelsWithDatasets: { labels; datasets } = this.getLabelsWithDatasets(
      true,
      false
    );
    this.lineChartData = {
      labels: labelsWithDatasets.labels,
      datasets: labelsWithDatasets.datasets,
      options: {
        legend: {
          position: "right",
        },
      },
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
        },
      ],
      options: {
        legend: {
          position: "right",
        },
      },
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
        },
      ],
      options: {
        legend: {
          position: "right",
        },
      },
    };
  }
  private initBarChart() {
    const labelsWithDatasets: { labels; datasets } = this.getLabelsWithDatasets(
      false,
      true
    );
    this.barChartData = {
      labels: labelsWithDatasets.labels,
      datasets: labelsWithDatasets.datasets,
      options: {
        legend: {
          position: "right",
        },
      },
    };
  }
  onDateSelect(value, filter) {
    this.table.filter(this.formatDate(value), "net", filter);
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = "0" + month;
    }

    if (day < 10) {
      day = "0" + day;
    }

    return date.getFullYear() + "-" + month + "-" + day;
  }
  shuffle() {
    this.whatOpen();
    setTimeout(() => {
      this.shuffleWhat();
    }, 100);
  }
  private shuffleWhat() {
    // only launches therefor just skip this step
    this.whatComplete();
    this.shuffleFilter();
  }
  private shuffleFilter(words?) {
    this.nameSearch = undefined;
    this.toFilter = undefined;
    this.fromFilter = undefined;
    this.selectedRockets = [];
    this.selectedRocketFamilies = [];
    this.selectedAgencies = [];
    this.selectedAgencyTypes = [];
    this.selectedSpacecrafts = [];
    words = this.shuffleNameFilter(words);
    setTimeout(() => {
      this.applyPreviousFilters();
      setTimeout(() => {
        if (this.table.filteredValue.length < this.dataRaw.length / 500) {
          this.shuffleFilter(words);
        } else {
          this.filterComplete();
          this.shuffleAxis();
        }
      }, 300);
    }, 100);
  }
  private shuffleNameFilter(words?) {
    const wordsLocal: string[] = words ? words : this.getAllPossibleWords();
    const aWord = wordsLocal[this.randbetween(0, wordsLocal.length - 1)];
    this.globalSearch = aWord;
    return wordsLocal;
  }
  private getAllPossibleWords() {
    let names = [];
    names = names.concat(
      ...this.dataRaw.map((launch) => {
        return [
          this.removeNonText(launch.name),
          this.removeNonText(launch.rocket__configuration__full_name),
          this.removeNonText(launch.rocket__configuration__family),
          this.removeNonText(launch.launch_service_provider__name),
          this.removeNonText(launch.launch_service_provider__type),
        ];
      })
    );
    names = names.filter((value, index, self) => self.indexOf(value) === index);
    const words: string[] = [];
    names.forEach((name) => {
      const wordsInName = name.split(" ");
      wordsInName.forEach((wordInName) => {
        if (wordInName.length > 2) {
          words.push(wordInName);
        }
      });
    });
    return words.filter((value, index, self) => self.indexOf(value) === index);
  }
  private removeNonText(str: string): string {
    while (str.includes("/")) {
      str = str.replace("/", " ");
    }
    while (str.includes("-")) {
      str = str.replace("-", " ");
    }
    while (str.includes("\\")) {
      str = str.replace("\\", " ");
    }
    while (str.includes("+")) {
      str = str.replace("+", " ");
    }
    while (str.includes("(")) {
      str = str.replace("(", " ");
    }
    while (str.includes(")")) {
      str = str.replace(")", " ");
    }
    while (str.includes(",")) {
      str = str.replace(",", " ");
    }
    while (str.includes("|")) {
      str = str.replace("|", " ");
    }
    return str;
  }
  private shuffleAxis() {
    switch (this.randbetween(0, 5)) {
      case 0:
        this.xAxis = "Rocket";
        break;
      case 1:
        this.xAxis = "RocketFamily";
        break;
      case 2:
        this.xAxis = "Agency";
        break;
      case 3:
        this.xAxis = "AgencyType";
        break;
      case 4:
        this.xAxis = "Spacecraft";
        break;

      default:
        break;
    }
    this.axisComplete();
  }
  private randbetween(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
}
