import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AgencyDetailCardComponent } from "./agency-detail-card.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NotificationModule } from "src/app/notification/notification.module";

describe("AgencyDetailCardComponent", () => {
  let component: AgencyDetailCardComponent;
  let fixture: ComponentFixture<AgencyDetailCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyDetailCardComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyDetailCardComponent);
    component = fixture.componentInstance;
    component.agency = {
      id: 141,
      url: "https://ll.thespacedevs.com/2.1.0/agencies/141/",
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
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
