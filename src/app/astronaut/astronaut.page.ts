import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.page.html',
  styleUrls: ['./astronaut.page.scss'],
})
export class AstronautPage implements OnInit {
  public id: string;
  astronaut;
  title: string;


  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.astronaut = await this.service.getAstronautById(this.id);
    this.title = this.astronaut.name;
  }

}
