import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.page.html',
  styleUrls: ['./rocket.page.scss'],
})
export class RocketPage implements OnInit {
  public id: number;
  rocket;
  title: string;


  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.rocket = await this.service.getRocketById(this.id);
    this.title = this.rocket.name;
  }

}
