import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent implements OnInit {
  @Input() lineChartData;
  @Input() barChartData;
  @Input() polarChartData;
  @Input() doughnutChartData;
  @ViewChild("chart") chart: Chart;
  @ViewChild("legend") legend: ElementRef;
  constructor() {}

  ngOnInit() {}
}
