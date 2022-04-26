import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SpacecraftDetailCardComponent } from "./spacecraft-detail-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("SpacecraftDetailCardComponent", () => {
  let component: SpacecraftDetailCardComponent;
  let fixture: ComponentFixture<SpacecraftDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftDetailCardComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacecraftDetailCardComponent);
    component = fixture.componentInstance;
    component.spacecraft = {
      id: 10,
      url: "https://ll.thespacedevs.com/2.2.0/config/spacecraft/10/",
      name: "Apollo Command/Service Module",
      type: {
        id: 1,
        name: "Unknown",
      },
      agency: {
        id: 44,
        url: "https://ll.thespacedevs.com/2.2.0/agencies/44/",
        name: "National Aeronautics and Space Administration",
        featured: true,
        type: "Government",
        country_code: "USA",
        abbrev: "NASA",
        description:
          "The National Aeronautics and Space Administration is an independent agency of the executive branch of the United States federal government responsible for the civilian space program, as well as aeronautics and aerospace research. NASA have many launch facilities but most are inactive. The most commonly used pad will be LC-39B at Kennedy Space Center in Florida.",
        administrator: "Administrator: Jim Bridenstine",
        founding_year: "1958",
        launchers: "Space Shuttle | SLS",
        spacecraft: "Orion",
        parent: null,
        image_url:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/national2520aeronautics2520and2520space2520administration_image_20190207032448.jpeg",
      },
      in_use: false,
      capability: "Cargo and Human Transportation to Lunar Orbit",
      history:
        "The Apollo Command/Service Module (CSM) was one of two principal components of the United States Apollo spacecraft, used for the Apollo program which landed astronauts on the Moon between 1969 and 1972.",
      details:
        "The Apollo Command/Service Module (CSM) was one of two principal components of the United States Apollo spacecraft, used for the Apollo program which landed astronauts on the Moon between 1969 and 1972. The CSM functioned as a mother ship which carried a crew of three astronauts and the second Apollo spacecraft, the Lunar Module, to lunar orbit, and brought the astronauts back to Earth. It consisted of two parts: the conical Command Module, a cabin that housed the crew and carried equipment needed for atmospheric reentry and splashdown; and the cylindrical Service Module which provided propulsion, electrical power and storage for various consumables required during a mission. An umbilical connection transferred power and consumables between the two modules. Just before reentry of the Command Module on the return home, the umbilical connection was severed and the Service Module was cast off and allowed to burn up in the atmosphere.",
      maiden_flight: "1966-02-26",
      height: 11.0,
      diameter: 3.9,
      human_rated: true,
      crew_capacity: 3,
      payload_capacity: 1050,
      flight_life: "14 days",
      image_url:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/apollo2520command2fservice2520module_image_20190207032507.jpeg",
      nation_url:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/apollo2520command2fservice2520module_image_20190207032507.png",
      wiki_link: "https://en.wikipedia.org/wiki/Apollo_Command/Service_Module",
      info_link: "",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
