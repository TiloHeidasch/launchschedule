import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RoverListEntryComponent } from "./rover-list-entry.component";

describe("RoverListEntryComponent", () => {
  let component: RoverListEntryComponent;
  let fixture: ComponentFixture<RoverListEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoverListEntryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RoverListEntryComponent);
    component = fixture.componentInstance;
    component.marsPhoto = {
      id: 794222,
      sol: 3023,
      camera: {
        id: 20,
        name: "FHAZ",
        rover_id: 5,
        full_name: "Front Hazard Avoidance Camera",
      },
      img_src:
        "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03023/opgs/edr/fcam/FLB_665850850EDR_F0860174FHAZ00341M_.JPG",
      earth_date: "2021-02-06",
      rover: {
        id: 5,
        name: "Rover",
        landing_date: "2012-08-06",
        launch_date: "2011-11-26",
        status: "active",
      },
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
