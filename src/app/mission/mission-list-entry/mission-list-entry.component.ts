import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'mission-list-entry',
  templateUrl: './mission-list-entry.component.html',
  styleUrls: ['./mission-list-entry.component.scss'],
})
export class MissionListEntryComponent implements OnInit {
  @Input('mission') mission;
  title: string;
  subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = this.mission.name;
    this.subtitle = this.mission.type;
  }

}
