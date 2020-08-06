import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'event-detail-card',
  templateUrl: './event-detail-card.component.html',
  styleUrls: ['./event-detail-card.component.scss'],
})
export class EventDetailCardComponent implements OnInit {
  @Input('event') event;
  date: Date;

  constructor(private service: LaunchLibraryService) {
  }

  async ngOnInit() {
    this.date = new Date(this.event.date);
  }

}
