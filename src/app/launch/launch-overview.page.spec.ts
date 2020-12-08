import { HttpClientTestingModule } from "@angular/common/http/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { LaunchOverviewPage } from "./launch-overview.page";

describe("LaunchOverviewPage", () => {
  let component: LaunchOverviewPage;
  let fixture: ComponentFixture<LaunchOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
