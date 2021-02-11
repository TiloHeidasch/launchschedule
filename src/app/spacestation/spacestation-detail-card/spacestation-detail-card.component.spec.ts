import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SpacestationDetailCardComponent } from "./spacestation-detail-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("SpacestationDetailCardComponent", () => {
  let component: SpacestationDetailCardComponent;
  let fixture: ComponentFixture<SpacestationDetailCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationDetailCardComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacestationDetailCardComponent);
    component = fixture.componentInstance;
    component.spacestation = {
      id: 13,
      url: "https://ll.thespacedevs.com/2.1.0/spacestation/13/",
      name: "Salyut 5",
      status: {
        id: 2,
        name: "De-Orbited",
      },
      type: {
        id: 2,
        name: "Government",
      },
      founded: "1976-06-22",
      deorbited: "1988-08-08",
      height: 13.55,
      width: 4.15,
      mass: 19.0,
      volume: 100,
      description:
        "Salyut 5, also known as OPS-3, was a Soviet space station. Launched in 1976 as part of the Salyut programme, it was the third and last Almaz space station to be launched for the Soviet military. Two Soyuz missions visited the station, each manned by two cosmonauts. A third Soyuz mission attempted to visit the station, but failed to dock, whilst a fourth mission was planned but never launched.",
      orbit: "Low Earth Orbit",
      onboard_crew: 0,
      owners: [
        {
          id: 63,
          url: "https://ll.thespacedevs.com/2.1.0/agencies/63/",
          name: "Russian Federal Space Agency (ROSCOSMOS)",
          featured: true,
          type: "Government",
          country_code: "RUS",
          abbrev: "RFSA",
          description:
            "The Roscosmos State Corporation for Space Activities, commonly known as Roscosmos, is the governmental body responsible for the space science program of the Russian Federation and general aerospace research. Soyuz has many launch locations the Russian sites are Baikonur, Plesetsk and Vostochny however Ariane also purchases the vehicle and launches it from French Guiana.",
          administrator: "Administrator: Dmitry Rogozin",
          founding_year: "1992",
          launchers: "Soyuz",
          spacecraft: "Soyuz",
          parent: null,
          image_url:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/russian2520federal2520space2520agency25202528roscosmos2529_image_20190207032459.jpeg",
        },
      ],
      active_expeditions: [],
      docking_location: [
        {
          id: 22,
          name: "Forward",
          docked: null,
        },
      ],
      image_url:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/spacestation_images/salyut25205_image_20190318095611.png",
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
