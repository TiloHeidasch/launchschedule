import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-app",
  templateUrl: "./app.page.html",
  styleUrls: ["./app.page.scss"],
})
export class AppPage implements OnInit {
  versionCode = environment.versionCode + 1000;
  versionName = environment.versionName;

  constructor() {}

  ngOnInit() {}
}
