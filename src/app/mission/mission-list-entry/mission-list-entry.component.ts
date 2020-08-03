import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'mission-list-entry',
  templateUrl: './mission-list-entry.component.html',
  styleUrls: ['./mission-list-entry.component.scss'],
})
export class MissionListEntryComponent implements OnInit {
  @Input('mission') mission;

  constructor(private service: LaunchLibraryService) { }

  async ngOnInit() {
  }

}
