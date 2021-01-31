import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RocketDetailCardComponent } from "./rocket-detail-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("RocketDetailCardComponent", () => {
  let component: RocketDetailCardComponent;
  let fixture: ComponentFixture<RocketDetailCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RocketDetailCardComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketDetailCardComponent);
    component = fixture.componentInstance;
    component.rocket = {
      id: 136,
      launch_library_id: 145,
      url: "https://ll.thespacedevs.com/2.1.0/config/launcher/136/",
      name: "Angara 1.2",
      manufacturer: {
        id: 118,
        url: "https://ll.thespacedevs.com/2.1.0/agencies/118/",
        name: "International Launch Services",
        featured: false,
        type: "Commercial",
        country_code: "USA",
        abbrev: "ILS",
        description:
          "International Launch Services, Inc. (ILS) is a joint venture with exclusive rights to the worldwide sale of commercial Angara and Proton rocket launch services. Proton launches take place at the Baikonur Cosmodrome in Kazakhstan while Angara is planned to launch from the Plesetsk and Vostochny Cosmodromes in Russia.",
        administrator: "Kirk Pysher",
        founding_year: "1995",
        launchers: "",
        spacecraft: "",
        parent: "Khrunichev State Research and Production Space Center",
        image_url: null,
      },
      program: [],
      family: "Angara",
      full_name: "Angara 1.2",
      variant: "1.2",
      reusable: false,
      image_url:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/angara25201.2_image_20190224012254.jpeg",
      info_url: "http://www.ilslaunch.com/node/4680",
      wiki_url:
        "https://en.wikipedia.org/wiki/Angara_(rocket_family)#Angara_1.2",
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
