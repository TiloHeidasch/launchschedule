import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'launch-list-entry',
  templateUrl: './launch-list-entry.component.html',
  styleUrls: ['./launch-list-entry.component.scss'],
})
export class LaunchListEntryComponent implements OnInit {
  @Input('launch') launch;
  title: string;
  subtitle: string;
  date: Date;
  imageUrl: string;
  constructor() { }

  ngOnInit() {
    this.title = this.launch.name.split('|')[1].trim();
    this.subtitle = this.launch.name.split('|')[0].trim();
    this.date = new Date(this.launch.net);
    const url: string = this.launch.rocket.imageURL;
    if (url.endsWith('png')) {
      this.imageUrl = url.replace(/_\d+.png/, '_' + this.launch.rocket.imageSizes[0] + '.png');
    } else {
      this.imageUrl = url.replace(/_\d+.jpg/, '_' + this.launch.rocket.imageSizes[0] + '.jpg');
    }
  }

}
