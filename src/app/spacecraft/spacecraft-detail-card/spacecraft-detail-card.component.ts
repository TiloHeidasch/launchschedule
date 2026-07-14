import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { SpacecraftService } from "src/app/spacecraft/spacecraft.service";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-spacecraft-detail-card",
  standalone: false,
  templateUrl: "./spacecraft-detail-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./spacecraft-detail-card.component.scss"],
})
export class SpacecraftDetailCardComponent implements OnInit {
  @Input() spacecraft?;
  @Input() id?;

  constructor(
    private service: SpacecraftService,
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
    if (this.spacecraft === undefined) {
      this.spacecraft = await this.service.getSpacecraftById(this.id);
    }
  }
}
