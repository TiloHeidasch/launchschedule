import { Component, OnInit, Input, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"],
})
export class CountdownComponent implements OnInit {
  @Input() date: Date;
  prefix: string;
  private hours: number;
  hours1: string;
  hours2: string;
  private minutes: number;
  minutes1: string;
  minutes2: string;
  private seconds: number;
  seconds1: string;
  seconds2: string;
  unit1: string;
  unit2: string;
  unit3: string;
  active: boolean;
  interval = 500;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.calculateHours(this.getDiff(this.date)) > 99) {
      this.setTimer();
      this.active = false;
    } else {
      this.setTimer();
      const task = setInterval(() => {
        this.setTimer();
      }, this.interval);
      this.active = true;
    }
  }
  private getDiff(date: Date): number {
    const now = new Date();
    return this.date.valueOf() - now.valueOf();
  }
  private calculateHours(diff: number) {
    return Math.floor(Math.abs(diff) / (1000 * 60 * 60));
  }

  private setTimer() {
    const diff = this.getDiff(this.date);
    const hours = this.calculateHours(diff);
    if (hours > 99) {
      this.prefix = "*";
      this.hours = this.date.getDate();
      this.minutes = this.date.getMonth() + 1;
      this.seconds = +this.date.getFullYear().toString().substr(2, 2);
      this.unit1 = "DAY";
      this.unit2 = "MONTH";
      this.unit3 = "YEAR";
    } else {
      if (diff < 0) {
        this.prefix = "+";
      } else {
        this.prefix = "-";
      }
      this.hours = hours;
      this.minutes = Math.floor(
        (Math.abs(diff) % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.seconds = Math.floor((Math.abs(diff) % (1000 * 60)) / 1000);
      this.unit1 = "HOUR";
      this.unit2 = "MINUTE";
      this.unit3 = "SECOND";
    }
    this.setupDigits();
  }
  private setupDigits() {
    this.setupHourDigits();
    this.setupMinuteDigits();
    this.setupSecondDigits();
    this.cdr.markForCheck();
  }
  private setupHourDigits() {
    if (this.hours > 9) {
      this.hours1 = this.hours.toString().charAt(0);
      this.hours2 = this.hours.toString().charAt(1);
    } else {
      this.hours1 = "0";
      this.hours2 = this.hours.toString().charAt(0);
    }
  }
  private setupMinuteDigits() {
    if (this.minutes > 9) {
      this.minutes1 = this.minutes.toString().charAt(0);
      this.minutes2 = this.minutes.toString().charAt(1);
    } else {
      this.minutes1 = "0";
      this.minutes2 = this.minutes.toString().charAt(0);
    }
  }
  private setupSecondDigits() {
    if (this.seconds > 9) {
      this.seconds1 = this.seconds.toString().charAt(0);
      this.seconds2 = this.seconds.toString().charAt(1);
    } else {
      this.seconds1 = "0";
      this.seconds2 = this.seconds.toString().charAt(0);
    }
  }
}
