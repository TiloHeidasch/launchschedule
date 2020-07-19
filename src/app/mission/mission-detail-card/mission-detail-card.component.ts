import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'mission-detail-card',
  templateUrl: './mission-detail-card.component.html',
  styleUrls: ['./mission-detail-card.component.scss'],
})
export class MissionDetailCardComponent implements OnInit {
  @Input('id') id;
  mission;

  constructor(private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.mission = await this.service.getMissionById(this.id);
  }

}
