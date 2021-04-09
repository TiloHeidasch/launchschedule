import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-road-closures",
  templateUrl: "./road-closures.component.html",
  styleUrls: ["./road-closures.component.scss"],
})
export class RoadClosuresComponent implements OnInit {
  @Input() roadClosures: {
    id: number;
    title: string;
    status: { id: number; name: string };
    window_start: string;
    window_end: string;
  }[];
  constructor() {}
  days: {
    label: string;
    hours: {
      date: Date;
      inactive?: boolean;
      primary?: boolean;
      secondary?: boolean;
    }[];
  }[] = [];
  ngOnInit() {
    this.createEmptyDayStructure();
    console.log("ngOnInit", this.days);
    this.prepareRoadClosureGraph();
    console.log("ngOnInit", this.days);
  }
  private prepareRoadClosureGraph() {
    this.days.forEach((day) => {
      day.hours.forEach((hour) => {
        this.roadClosures.forEach((closure) => {
          const windowStart = new Date(closure.window_start);
          const windowEnd = new Date(closure.window_end);
          const primary = closure.title === "Primary Date";
          const secondary = closure.title === "Secondary Date";
          if (this.isInTimeFrame(hour.date, windowStart, windowEnd)) {
            hour.primary = primary;
            hour.secondary = secondary;
          }
        });
      });
    });
  }
  private isInTimeFrame(date: Date, windowStart: Date, windowEnd: Date) {
    return (
      date.getTime() > windowStart.getTime() &&
      date.getTime() <= windowEnd.getTime()
    );
  }
  private createEmptyDayStructure() {
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    for (let day = 0; day < 7; day++) {
      const date = new Date(today);
      date.setDate(today.getDate() + day);
      const label = this.getWeekDayAbbreviation(date.getDay());
      const hours = [];
      for (let hour = 0; hour < 24; hour++) {
        const hoursDate = new Date(date);
        hoursDate.setHours(hour);
        hours.push({ date: hoursDate, inactive: true });
      }
      this.days.push({ label, hours });
    }
  }
  private getWeekDayAbbreviation(dayOfWeek) {
    switch (dayOfWeek) {
      case 0:
        return "So";
      case 1:
        return "Mo";
      case 2:
        return "Tu";
      case 3:
        return "We";
      case 4:
        return "Th";
      case 5:
        return "Fr";
      case 6:
        return "Sa";

      default:
        break;
    }
  }
  toDate(dateString: string): Date {
    return new Date(dateString);
  }
}
