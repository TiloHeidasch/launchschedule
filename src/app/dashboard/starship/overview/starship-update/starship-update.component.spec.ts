import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { StarshipUpdateComponent } from "./starship-update.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("StarshipUpdateComponent", () => {
  let component: StarshipUpdateComponent;
  let fixture: ComponentFixture<StarshipUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarshipUpdateComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StarshipUpdateComponent);
    component = fixture.componentInstance;
    component.update = {
      id: 423,
      profile_image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
      comment: "Starship SN11 launch failure, possibly due to engine issues.",
      info_url: "https://twitter.com/elonmusk/status/1376891464333017090",
      created_by: "Nosu",
      created_on: "2021-03-30T14:12:30Z",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
