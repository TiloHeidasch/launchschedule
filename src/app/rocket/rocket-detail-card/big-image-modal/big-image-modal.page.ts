import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-big-image-modal',
  templateUrl: './big-image-modal.page.html',
  styleUrls: ['./big-image-modal.page.scss'],
})
export class BigImageModal implements OnInit {
  url: string;
  title: string;
  @ViewChild('slider', { read: ElementRef, static: false }) slider: ElementRef;
  constructor(private navParams: NavParams, private modalController: ModalController) { }

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  ngOnInit() {
    this.url = this.navParams.get('url');
    this.title = this.navParams.get('title');
  }
  close() {
    this.modalController.dismiss();
  }
}
