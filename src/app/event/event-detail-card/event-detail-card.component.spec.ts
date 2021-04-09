import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { EventDetailCardComponent } from "./event-detail-card.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("EventDetailCardComponent", () => {
  let component: EventDetailCardComponent;
  let fixture: ComponentFixture<EventDetailCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EventDetailCardComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailCardComponent);
    component = fixture.componentInstance;
    component.event = {
      id: 167,
      url: "https://ll.thespacedevs.com/2.2.0/event/167/",
      slug: "sls-flight-support-booster-1-static-fire",
      name: "SLS Flight Support Booster-1 Static Fire",
      type: {
        id: 5,
        name: "Static Fire",
      },
      description:
        "Flight Support Booster-1 (FSB-1) is a full-scale solid rocket booster ground test that supports flights of NASA's Space Launch System.\r\n\r\nThe objective is to confirm motor performance and manufacturing quality of the booster.",
      location: "Promontory, Utah",
      news_url:
        "https://www.nasa.gov/exploration/systems/sls/multimedia/sls-flight-support-booster-test-infographic.html",
      video_url: "https://www.youtube.com/watch?v=21X5lGlDOfg",
      feature_image:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/sls_flight_supp_image_20200827111302.jpeg",
      date: "2020-09-02T18:40:00Z",
      launches: [],
      expeditions: [],
      spacestations: [],
      program: [
        {
          id: 15,
          url: "https://ll.thespacedevs.com/2.2.0/program/15/",
          name: "Artemis",
          description:
            "The Artemis program is a US government-funded crewed spaceflight program that has the goal of landing 'the first woman and the next man' on the Moon, specifically at the lunar south pole region by 2024.",
          agencies: [
            {
              id: 44,
              url: "https://ll.thespacedevs.com/2.2.0/agencies/44/",
              name: "National Aeronautics and Space Administration",
              type: "Government",
            },
          ],
          image_url:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/artemis_program_20200821091844.png",
          start_date: "2017-12-11T00:00:00Z",
          end_date: null,
          info_url: "https://www.nasa.gov/specials/artemis/",
          wiki_url: "https://en.wikipedia.org/wiki/Artemis_program",
        },
      ],
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
