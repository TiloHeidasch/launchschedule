import { Component, OnInit, Input } from '@angular/core';
import { LaunchLibraryService } from 'src/app/launch-library.service';

@Component({
  selector: 'payload-detail-card',
  templateUrl: './payload-detail-card.component.html',
  styleUrls: ['./payload-detail-card.component.scss'],
})
export class PayloadDetailCardComponent implements OnInit {
  @Input('id') id;
  payload;

  constructor(private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.payload = await this.service.getPayloadById(this.id);
  }

}
