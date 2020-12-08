import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { EventOverviewPage } from "./event-overview.page";

describe("EventOverviewPage", () => {
  let component: EventOverviewPage;
  let fixture: ComponentFixture<EventOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
