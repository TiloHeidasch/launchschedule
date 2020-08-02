import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'launch-status',
  templateUrl: './launch-status.component.html',
  styleUrls: ['./launch-status.component.scss'],
})
export class LaunchStatusComponent implements OnInit {
  @Input('status') status: { id: number, name: string };
  constructor() { }

  ngOnInit() { }

}
