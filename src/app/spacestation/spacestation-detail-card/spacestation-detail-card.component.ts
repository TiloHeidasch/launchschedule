import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'spacestation-detail-card',
  templateUrl: './spacestation-detail-card.component.html',
  styleUrls: ['./spacestation-detail-card.component.scss'],
})
export class SpacestationDetailCardComponent implements OnInit {
  @Input('spacestation') spacestation;

  constructor(private service: LaunchLibraryService) {
  }

  async ngOnInit() {
  }

}
