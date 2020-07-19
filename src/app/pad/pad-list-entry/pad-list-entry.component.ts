import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'pad-list-entry',
  templateUrl: './pad-list-entry.component.html',
  styleUrls: ['./pad-list-entry.component.scss'],
})
export class PadListEntryComponent implements OnInit {
  @Input('pad') pad;
  title: string;
  subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = this.pad.name;
    this.subtitle = this.pad.abbrev;
  }

}
