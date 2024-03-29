import { Component, Input } from "@angular/core";
import { ActionSheetController, ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { PlaceholderService } from "src/app/placeholder.service";

@Component({
  selector: "app-spacestation-detail-card",
  templateUrl: "./spacestation-detail-card.component.html",
  styleUrls: ["./spacestation-detail-card.component.scss"],
})
export class SpacestationDetailCardComponent {
  @Input() spacestation;

  constructor(
    public actionSheetController: ActionSheetController,
    public toastController: ToastController,
    private router: Router,
    public placeholderService: PlaceholderService
  ) {}

  async showSpecification(name, value, unit) {
    const toast = await this.toastController.create({
      message: name + ": " + value + " " + unit,
      duration: 2000,
    });
    toast.present();
  }
  async presentUnoccupiedToast(dockingLocation) {
    const toast = await this.toastController.create({
      message: dockingLocation.name + " is not occupied.",
      duration: 2000,
    });
    toast.present();
  }

  async presentDockingLocationActionSheet(dockingLocation) {
    const actionSheet = await this.actionSheetController.create({
      header:
        dockingLocation.name +
        " - " +
        dockingLocation.docked.flight_vehicle.spacecraft.spacecraft_config.name,
      cssClass: "my-custom-class",
      buttons: [
        {
          text: "Goto Launch",
          icon: "rocket",
          handler: () => {
            this.router.navigate([
              "launch/" + dockingLocation.docked.flight_vehicle.launch.id,
            ]);
          },
        },
        {
          text: "Goto Spacecraft",
          icon: "planet",
          handler: () => {
            this.router.navigate([
              "spacecraft/" +
                dockingLocation.docked.flight_vehicle.spacecraft
                  .spacecraft_config.id,
            ]);
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            // Cancel clicked
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
