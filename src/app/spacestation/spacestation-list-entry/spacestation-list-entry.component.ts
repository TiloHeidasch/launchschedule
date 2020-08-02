import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'spacestation-list-entry',
  templateUrl: './spacestation-list-entry.component.html',
  styleUrls: ['./spacestation-list-entry.component.scss'],
})
export class SpacestationListEntryComponent implements OnInit {
  @Input('spacestation') spacestation;
  title: string;
  subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = this.spacestation.name;
    this.subtitle = this.spacestation.orbit;
  }

}
