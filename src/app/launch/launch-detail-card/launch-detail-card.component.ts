import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'launch-detail-card',
  templateUrl: './launch-detail-card.component.html',
  styleUrls: ['./launch-detail-card.component.scss'],
})
export class LaunchDetailCardComponent implements OnInit {
  @Input('launch') launch;
  title;
  subtitle;
  date;

  constructor(private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.date = new Date(this.launch.net);
    this.title = this.launch.name.split('|')[1].trim();
    this.subtitle = this.launch.name.split('|')[0].trim();

  }

}
