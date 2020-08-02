import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'astronaut-list-entry',
  templateUrl: './astronaut-list-entry.component.html',
  styleUrls: ['./astronaut-list-entry.component.scss'],
})
export class AstronautListEntryComponent implements OnInit {
  @Input('astronaut') astronaut;
  title: string;
  subtitle: string;
  constructor() { }

  ngOnInit() {
    this.title = this.astronaut.name;
    this.subtitle = this.astronaut.nationality;
  }

}
