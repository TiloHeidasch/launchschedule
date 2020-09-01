import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { LaunchListEntryComponent } from "./launch-list-entry.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("LaunchListEntryComponent", () => {
  let component: LaunchListEntryComponent;
  let fixture: ComponentFixture<LaunchListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchListEntryComponent);
    component = fixture.componentInstance;
    component.launch = {
      id: "15468d99-b3eb-4bf4-81b3-3fda9d2e579d",
      url:
        "https://ll.thespacedevs.com/2.0.0/launch/15468d99-b3eb-4bf4-81b3-3fda9d2e579d/",
      launch_library_id: 1321,
      slug: "vega-ssms-poc",
      name: "Vega | SSMS PoC",
      status: {
        id: 1,
        name: "Go",
      },
      net: "2020-09-02T01:51:10Z",
      window_end: "2020-09-02T01:51:10Z",
      window_start: "2020-09-02T01:51:10Z",
      inhold: false,
      tbdtime: false,
      tbddate: false,
      probability: -1,
      holdreason: null,
      failreason: null,
      hashtag: null,
      launch_service_provider: {
        id: 115,
        url: "https://ll.thespacedevs.com/2.0.0/agencies/115/",
        name: "Arianespace",
        type: "Commercial",
      },
      rocket: {
        id: 57,
        configuration: {
          id: 167,
          launch_library_id: 18,
          url: "https://ll.thespacedevs.com/2.0.0/config/launcher/167/",
          name: "Vega",
          family: "Vega",
          full_name: "Vega",
          variant: "",
        },
      },
      mission: {
        id: 1033,
        launch_library_id: 1235,
        name: "SSMS POC",
        description:
          "The Vega POC (Proof Of Concept) flight will be the first mission of the SSMS (Small Spacecraft Mission Service), a modular carbon fiber dispenser, a program initiated by ESA in 2016, with the contribution of the European Commission. For all the European partners involved, its purpose is to address the burgeoning institutional and commercial small spacecraft market with a new rideshare concept.\n\nPayload includes dozens of satellites: Athena, ION CubeSat Carrier, ESAIL, NEMO-HD, GHGSat C1, six Flock-v cubesats, several Lemur-2 cubesats, twelve SpaceBEE nanosats, FSSCat A & B, RTAF-Sat, DIDO 3, IGOSat, PICASSO, PINO, PIXL, QARMAN, SIMBA, TRISAT, Casaa-Sat, TTÃœ100, and more.",
        launch_designator: null,
        type: "Dedicated Rideshare",
        orbit: {
          id: 17,
          name: "Sun-Synchronous Orbit",
          abbrev: "SSO",
        },
      },
      pad: {
        id: 34,
        url: "https://ll.thespacedevs.com/2.0.0/pad/34/",
        agency_id: 115,
        name: "Ariane Launch Area 1",
        info_url: null,
        wiki_url: "https://en.wikipedia.org/wiki/ELA-1",
        map_url: "https://www.google.com/maps/?q=5.239,-52.775",
        latitude: "5.236",
        longitude: "-52.775",
        location: {
          id: 13,
          url: "https://ll.thespacedevs.com/2.0.0/location/13/",
          name: "Kourou, French Guiana",
          country_code: "GUF",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_13_20200803142412.jpg",
          total_launch_count: 147,
          total_landing_count: 0,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_34_20200803143527.jpg",
        total_launch_count: 15,
      },
      webcast_live: false,
      image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/vega_image_20190224025010.jpeg",
      infographic:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/vega2520257c_infographic_20200831230945.png",
      program: [],
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
