import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';

@Component({
  selector: 'app-payload',
  templateUrl: './payload.page.html',
  styleUrls: ['./payload.page.scss'],
})
export class PayloadPage implements OnInit {
  public id: number;
  payload;
  title: string;


  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.payload = await this.service.getPayloadById(this.id);
    this.title = this.payload.name;
  }

}
