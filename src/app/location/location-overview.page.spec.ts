import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { LocationOverviewPage } from "./location-overview.page";

describe("LocationOverviewPage", () => {
  let component: LocationOverviewPage;
  let fixture: ComponentFixture<LocationOverviewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
