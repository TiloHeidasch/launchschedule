import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchLibraryService } from '../launch-library.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.page.html',
  styleUrls: ['./launch.page.scss'],
})
export class LaunchPage implements OnInit {
  public id: number;
  launch;
  title: string;


  constructor(private activatedRoute: ActivatedRoute, private service: LaunchLibraryService) { }

  async ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.launch = await this.service.getLaunchById(this.id);
    this.title = this.launch.name.split('|')[1].trim();
  }

}
