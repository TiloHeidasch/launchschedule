import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { LocationDetailCardComponent } from "./location-detail-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LocationDetailCardComponent", () => {
  let component: LocationDetailCardComponent;
  let fixture: ComponentFixture<LocationDetailCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LocationDetailCardComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationDetailCardComponent);
    component = fixture.componentInstance;
    component.location = {
      id: 151,
      url: "https://ll.thespacedevs.com/2.1.0/location/151/",
      name: "Broglio Space Center, Kenya",
      country_code: "ITA",
      map_image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_151_20200803142409.jpg",
      total_launch_count: 0,
      total_landing_count: 0,
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
