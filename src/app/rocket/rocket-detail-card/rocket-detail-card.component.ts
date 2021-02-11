import { Component, OnInit, Input } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { LaunchLibraryService } from "src/app/launch-library.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-rocket-detail-card",
  templateUrl: "./rocket-detail-card.component.html",
  styleUrls: ["./rocket-detail-card.component.scss"],
})
export class RocketDetailCardComponent implements OnInit {
  @Input() rocket?;
  @Input() id?;
  constructor(
    private service: LaunchLibraryService,
    public toastController: ToastController,
    public placeholderService: PlaceholderService
  ) {}

  async showSpecification(name, value, unit) {
    const toast = await this.toastController.create({
      message: name + ": " + value + " " + unit,
      duration: 2000,
    });
    toast.present();
  }

  async ngOnInit() {
    if (this.rocket === undefined) {
      this.rocket = await this.service.getRocketById(this.id);
    }
  }
}
