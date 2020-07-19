import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.page.html',
  styleUrls: ['./mission.page.scss'],
})
export class MissionPage implements OnInit {
  public id: number;
  mission;
  title: string;


  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.mission = await this.service.getMissionById(this.id);
    this.title = this.mission.name;
  }

}
