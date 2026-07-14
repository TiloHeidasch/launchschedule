import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { RocketService } from "src/app/rocket/rocket.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-rocket-detail-card",
  standalone: false,
  templateUrl: "./rocket-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./rocket-detail-card.component.scss"],
})
export class RocketDetailCardComponent implements OnInit {
  @Input() rocket?;
  @Input() id?;
  constructor(
    private service: RocketService,
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
