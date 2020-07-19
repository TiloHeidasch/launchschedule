import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';
import { ModalController } from '@ionic/angular';
import { BigImageModal } from './big-image-modal/big-image-modal.page';


@Component({
  selector: 'rocket-detail-card',
  templateUrl: './rocket-detail-card.component.html',
  styleUrls: ['./rocket-detail-card.component.scss'],
})
export class RocketDetailCardComponent implements OnInit {
  @Input('id') id;
  rocket;
  imageUrlSmall: string;
  imageUrlBig: string;
  constructor(private service: LaunchLibraryService, private modalController: ModalController) { }

  async ngOnInit() {
    this.rocket = await this.service.getRocketById(this.id);
    const url: string = this.rocket.imageURL;
    if (url.endsWith('placeholder_1920.png')) {
      this.imageUrlSmall = 'assets/placeholder_1920.png';
      this.imageUrlBig = 'assets/placeholder_1920.png';
    } else {
      if (url.endsWith('png')) {
        this.imageUrlSmall = url.replace(/_\d+.png/, '_' + this.rocket.imageSizes[0] + '.png');
        this.imageUrlBig = url.replace(/_\d+.png/, '_' + this.rocket.imageSizes[this.rocket.imageSizes.length - 1] + '.png');
      } else {
        this.imageUrlSmall = url.replace(/_\d+.jpg/, '_' + this.rocket.imageSizes[0] + '.jpg');
        this.imageUrlBig = url.replace(/_\d+.jpg/, '_' + this.rocket.imageSizes[this.rocket.imageSizes.length - 1] + '.jpg');
      }
    }
  }
  openHighRes() {
    this.modalController.create({
      component: BigImageModal,
      componentProps: {
        url: this.imageUrlBig,
        title: this.rocket.name,
      }
    }).then(modal => modal.present());
  }
}
