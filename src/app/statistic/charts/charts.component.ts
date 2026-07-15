import {
  Component,
  Input,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
} from "@angular/core";
import {
  Chart,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarController,
  LineController,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  PolarAreaController,
  DoughnutController,
  Legend,
  Tooltip,
  Title,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarController,
  LineController,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  PolarAreaController,
  DoughnutController,
  Legend,
  Tooltip,
  Title
);

@Component({
  selector: "app-charts",
  standalone: false,
  templateUrl: "./charts.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./charts.component.scss"],
})
export class ChartsComponent implements AfterViewInit, OnDestroy {
  @Input() lineChartData: any;
  @Input() barChartData: any;
  @Input() polarChartData: any;
  @Input() doughnutChartData: any;

  @ViewChild("lineChartCanvas") lineChartCanvas: ElementRef<HTMLCanvasElement>;
  @ViewChild("barChartCanvas") barChartCanvas: ElementRef<HTMLCanvasElement>;
  @ViewChild("polarChartCanvas") polarChartCanvas: ElementRef<HTMLCanvasElement>;
  @ViewChild("doughnutChartCanvas") doughnutChartCanvas: ElementRef<HTMLCanvasElement>;

  private lineChart: any;
  private barChart: any;
  private polarChart: any;
  private doughnutChart: any;

  ngAfterViewInit() {
    this.createCharts();
  }

  ngOnDestroy() {
    this.lineChart?.destroy();
    this.barChart?.destroy();
    this.polarChart?.destroy();
    this.doughnutChart?.destroy();
  }

  private createCharts() {
    if (this.lineChartData && this.lineChartCanvas) {
      this.lineChart = new Chart(this.lineChartCanvas.nativeElement, {
        type: "line",
        data: this.lineChartData,
        options: this.lineChartData.options,
      });
    }
    if (this.barChartData && this.barChartCanvas) {
      this.barChart = new Chart(this.barChartCanvas.nativeElement, {
        type: "bar",
        data: this.barChartData,
        options: this.barChartData.options,
      });
    }
    if (this.polarChartData && this.polarChartCanvas) {
      this.polarChart = new Chart(this.polarChartCanvas.nativeElement, {
        type: "polarArea",
        data: this.polarChartData,
        options: this.polarChartData.options,
      });
    }
    if (this.doughnutChartData && this.doughnutChartCanvas) {
      this.doughnutChart = new Chart(this.doughnutChartCanvas.nativeElement, {
        type: "doughnut",
        data: this.doughnutChartData,
        options: this.doughnutChartData.options,
      });
    }
  }
}