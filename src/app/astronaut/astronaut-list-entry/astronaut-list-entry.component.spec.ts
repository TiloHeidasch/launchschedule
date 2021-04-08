import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstronautListEntryComponent } from "./astronaut-list-entry.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

const astronaut = {
  id: 276,
  url: "https://ll.thespacedevs.com/2.2.0/astronaut/276/",
  name: "Franz Viehböck",
  status: {
    id: 2,
    name: "Retired",
  },
  type: {
    id: 2,
    name: "Government",
  },
  date_of_birth: "1960-08-24",
  date_of_death: null,
  nationality: "Austrian",
  bio:
    "Franz Artur Viehböck (born August 24, 1960 in Vienna) is an Austrian electrical engineer, and was Austria's first cosmonaut. He was titulated „Austronaut“ by his country's media. He visited the Mir space station in 1991 aboard Soyuz TM-13, returning aboard Soyuz TM-12 after spending just over a week in space.",
  twitter: null,
  instagram: null,
  wiki: "https://en.wikipedia.org/wiki/Franz_Viehb%C3%B6ck",
  agency: {
    id: 8,
    url: "https://ll.thespacedevs.com/2.2.0/agencies/8/",
    name: "Austrian Space Agency",
    featured: false,
    type: "Government",
    country_code: "AUT",
    abbrev: "ALR",
    description:
      "The Austrian Space Agency was founded in 1972 and joined the ESA as a member in 1987. In 2005, control of the ALR was transferred to the Austrian Agency for Aerospace. They coordinated the first flight of an Austrian in space with a Soyuz launch in 1990.",
    administrator: "Andreas Geisler",
    founding_year: "1972",
    launchers: "",
    spacecraft: "Spacelab | GALILEO",
    parent: null,
    image_url: null,
  },
  profile_image:
    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/franz2520viehb25c325b6ck_image_20181201223901.jpg",
  profile_image_thumbnail:
    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/default/cache/54/57/5457ce75acb7b188196eb442e3f17b64.jpg",
  last_flight: "1991-10-02T05:59:38Z",
  first_flight: "1991-10-02T05:59:38Z",
};
describe("AstronautListEntryComponent", () => {
  let component: AstronautListEntryComponent;
  let fixture: ComponentFixture<AstronautListEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Title should be set with astronaut", () => {
    component.astronaut = astronaut;
    component.ngOnInit();
    expect(component.title).toBe(astronaut.name);
  });
  it("Subtitle should be set with astronaut", () => {
    component.astronaut = astronaut;
    component.ngOnInit();
    expect(component.subtitle).toBe(astronaut.nationality);
  });
});
