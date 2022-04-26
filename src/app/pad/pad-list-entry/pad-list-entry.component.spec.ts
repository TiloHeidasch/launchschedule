import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { PadListEntryComponent } from "./pad-list-entry.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("PadListEntryComponent", () => {
  let component: PadListEntryComponent;
  let fixture: ComponentFixture<PadListEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PadListEntryComponent);
    component = fixture.componentInstance;
    component.pad = {
      id: 97,
      url: "https://ll.thespacedevs.com/2.2.0/pad/97/",
      agency_id: 161,
      name: "Space Launch Complex 26B",
      info_url: null,
      wiki_url:
        "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Launch_Complex_26",
      map_url: "http://www.google.com/maps?q=28.4433,-80.5712",
      latitude: "28.4433",
      longitude: "-80.5712",
      location: {
        id: 12,
        url: "https://ll.thespacedevs.com/2.2.0/location/12/",
        name: "Cape Canaveral, FL, USA",
        country_code: "USA",
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg",
        total_launch_count: 202,
        total_landing_count: 0,
      },
      map_image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_97_20200803143224.jpg",
      total_launch_count: 3,
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
