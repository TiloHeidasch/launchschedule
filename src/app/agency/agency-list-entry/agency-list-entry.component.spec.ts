import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AgencyListEntryComponent } from "./agency-list-entry.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("AgencyListEntryComponent", () => {
  let component: AgencyListEntryComponent;
  let fixture: ComponentFixture<AgencyListEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyListEntryComponent);
    component = fixture.componentInstance;
    component.agency = {
      id: 141,
      url: "https://ll.thespacedevs.com/2.2.0/agencies/141/",
      name: "Blue Origin",
      featured: true,
      type: "Commercial",
      country_code: "USA",
      abbrev: "BO",
      description:
        "Blue Origin is an American privately funded aerospace manufacturer and spaceflight services company set up by Amazon.com founder Jeff Bezos with its headquarters in Kent, Washington. The company is developing technologies to enable private human access to space with the goal to dramatically lower costs and increase reliability. Blue Origin currently launches its New Shepard sub-orbital vehicle from its West Texas launch site, they are currently constructing a launch pad for their orbital vehicle New Glenn at Cape Canaveral LC-36.",
      administrator: "CEO: Jeff Bezos",
      founding_year: "2000",
      launchers: "New Shepard | New Glenn",
      spacecraft: "",
      parent: null,
      image_url:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/blue2520origin_image_20190207032427.jpeg",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
