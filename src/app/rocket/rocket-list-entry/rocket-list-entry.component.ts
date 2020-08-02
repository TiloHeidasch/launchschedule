import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rocket-list-entry',
  templateUrl: './rocket-list-entry.component.html',
  styleUrls: ['./rocket-list-entry.component.scss'],
})
export class RocketListEntryComponent implements OnInit {
  @Input('rocket') rocket;
  title: string;
  subtitle: string;
  imageUrl: string;

  constructor() { }

  ngOnInit() {
    this.title = this.rocket.name;
    this.subtitle = this.rocket.family;
  }

}
