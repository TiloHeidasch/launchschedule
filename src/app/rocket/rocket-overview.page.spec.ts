import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { RocketOverviewPage } from "./rocket-overview.page";

describe("RocketOverviewPage", () => {
  let component: RocketOverviewPage;
  let fixture: ComponentFixture<RocketOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RocketOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
