import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-charts",
  standalone: false,
  templateUrl: "./charts.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent {
  @Input() lineChartData;
  @Input() barChartData;
  @Input() polarChartData;
  @Input() doughnutChartData;
  constructor() {}
}
