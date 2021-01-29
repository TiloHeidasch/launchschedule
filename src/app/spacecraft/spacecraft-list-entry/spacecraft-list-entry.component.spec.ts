import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SpacecraftListEntryComponent } from "./spacecraft-list-entry.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("SpacecraftListEntryComponent", () => {
  let component: SpacecraftListEntryComponent;
  let fixture: ComponentFixture<SpacecraftListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacecraftListEntryComponent);
    component = fixture.componentInstance;
    component.spacecraft = {
      id: 10,
      url: "https://ll.thespacedevs.com/2.1.0/config/spacecraft/10/",
      name: "Apollo Command/Service Module",
      agency: {
        id: 44,
        url: "https://ll.thespacedevs.com/2.1.0/agencies/44/",
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
      maiden_flight: "1966-02-26",
      human_rated: true,
      crew_capacity: 3,
      image_url:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/apollo2520command2fservice2520module_image_20190207032507.jpeg",
      nation_url:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/apollo2520command2fservice2520module_image_20190207032507.png",
      wiki_link: "https://en.wikipedia.org/wiki/Apollo_Command/Service_Module",
      info_link: "",
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
