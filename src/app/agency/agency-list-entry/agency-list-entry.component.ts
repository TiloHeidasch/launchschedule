import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'agency-list-entry',
  templateUrl: './agency-list-entry.component.html',
  styleUrls: ['./agency-list-entry.component.scss'],
})
export class AgencyListEntryComponent implements OnInit {
  @Input('agency') agency;
  title: string;
  subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = this.agency.name;
    this.subtitle = this.agency.abbrev;
  }

}
