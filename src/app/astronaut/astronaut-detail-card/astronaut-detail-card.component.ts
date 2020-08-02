import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'astronaut-detail-card',
  templateUrl: './astronaut-detail-card.component.html',
  styleUrls: ['./astronaut-detail-card.component.scss'],
})
export class AstronautDetailCardComponent implements OnInit {
  @Input('astronaut') astronaut;

  constructor(private service: LaunchLibraryService) {
  }

  async ngOnInit() {
  }

}
