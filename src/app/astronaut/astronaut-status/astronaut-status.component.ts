import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'astronaut-status',
  templateUrl: './astronaut-status.component.html',
  styleUrls: ['./astronaut-status.component.scss'],
})
export class AstronautStatusComponent implements OnInit {
  @Input('status') status: { id: number, name: string };
  constructor() { }

  ngOnInit() { }

}
