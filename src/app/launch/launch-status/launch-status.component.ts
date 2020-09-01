import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-launch-status",
  templateUrl: "./launch-status.component.html",
  styleUrls: ["./launch-status.component.scss"],
})
export class LaunchStatusComponent implements OnInit {
  @Input() status: { id: number; name: string };
  constructor() {}

  ngOnInit() {}
}
