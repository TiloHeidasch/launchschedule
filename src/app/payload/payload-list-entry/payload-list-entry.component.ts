import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'payload-list-entry',
  templateUrl: './payload-list-entry.component.html',
  styleUrls: ['./payload-list-entry.component.scss'],
})
export class PayloadListEntryComponent implements OnInit {
  @Input('payload') payload;
  title: string;
  subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = this.payload.name;
    this.subtitle = this.payload.typeName;
  }

}
