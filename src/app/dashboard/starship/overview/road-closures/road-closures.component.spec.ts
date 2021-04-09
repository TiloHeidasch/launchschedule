import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RoadClosuresComponent } from "./road-closures.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("RoadClosuresComponent", () => {
  let component: RoadClosuresComponent;
  let fixture: ComponentFixture<RoadClosuresComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RoadClosuresComponent],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(RoadClosuresComponent);
      component = fixture.componentInstance;
      component.roadClosures = [
        {
          id: 151,
          title: "Primary Date",
          status: { id: 1, name: "Scheduled" },
          window_start: "2021-04-08T16:00:00Z",
          window_end: "2021-04-08T18:30:00Z",
        },
        {
          id: 148,
          title: "Primary Date",
          status: { id: 1, name: "Scheduled" },
          window_start: "2021-04-09T12:00:00Z",
          window_end: "2021-04-09T17:00:00Z",
        },
        {
          id: 149,
          title: "Secondary Date",
          status: { id: 1, name: "Scheduled" },
          window_start: "2021-04-12T17:00:00Z",
          window_end: "2021-04-13T01:00:00Z",
        },
        {
          id: 150,
          title: "Secondary Date",
          status: { id: 1, name: "Scheduled" },
          window_start: "2021-04-13T17:00:00Z",
          window_end: "2021-04-14T01:00:00Z",
        },
      ];
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
