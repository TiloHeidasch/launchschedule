import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';

@Component({
  selector: 'app-spacecraft',
  templateUrl: './spacecraft.page.html',
  styleUrls: ['./spacecraft.page.scss'],
})
export class SpacecraftPage implements OnInit {
  public id: string;
  spacecraft;
  title: string;


  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.spacecraft = await this.service.getSpacecraftById(this.id);
    this.title = this.spacecraft.name;
  }

}
