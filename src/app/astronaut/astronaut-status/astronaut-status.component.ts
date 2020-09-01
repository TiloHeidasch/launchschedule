import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-astronaut-status",
  templateUrl: "./astronaut-status.component.html",
  styleUrls: ["./astronaut-status.component.scss"],
})
export class AstronautStatusComponent implements OnInit {
  @Input() status: { id: number; name: string };
  constructor() {}

  ngOnInit() {}
}
