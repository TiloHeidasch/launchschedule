import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent implements OnInit, AfterViewInit {
  @Input() lineChartData;
  @Input() barChartData;
  @Input() polarChartData;
  @Input() doughnutChartData;
  @ViewChild("chart") chart: Chart;
  @ViewChild("legend") legend: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    try {
      let chartHtml: string = this.chart.generateLegend().replace(/\d*-/, "");
      while (
        chartHtml.includes("<ul") ||
        chartHtml.includes("</ul") ||
        chartHtml.includes("<li") ||
        chartHtml.includes("</li") ||
        chartHtml.includes("<span") ||
        chartHtml.includes("</span")
      ) {
        chartHtml = chartHtml
          .replace("<ul", "<div")
          .replace("<li", "<div class='list-entry'")
          .replace("<span", "<div class='chart-color'")
          .replace("</ul", "</div")
          .replace("</li", "</div")
          .replace("</span", "</div");
      }

      this.legend.nativeElement.innerHTML = chartHtml;
    } catch (error) {}
  }
  ngOnInit() {}
}
