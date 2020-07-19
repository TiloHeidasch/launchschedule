import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rocket-list-entry',
  templateUrl: './rocket-list-entry.component.html',
  styleUrls: ['./rocket-list-entry.component.scss'],
})
export class RocketListEntryComponent implements OnInit {
  @Input('rocket') rocket;
  title: string;
  subtitle: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.title = this.rocket.name;
    this.subtitle = this.rocket.family.name;
    const url: string = this.rocket.imageURL;
    if (url.endsWith('placeholder_1920.png')) {
      this.imageUrl = 'assets/placeholder_1920.png';
    } else {
      if (url.endsWith('png')) {
        this.imageUrl = url.replace(/_\d+.png/, '_' + this.rocket.imageSizes[0] + '.png');
      } else {
        this.imageUrl = url.replace(/_\d+.jpg/, '_' + this.rocket.imageSizes[0] + '.jpg');
      }
    }
  }

}
