import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { SpacestationOverviewPage } from "./spacestation-overview.page";

describe("SpacestationOverviewPage", () => {
  let component: SpacestationOverviewPage;
  let fixture: ComponentFixture<SpacestationOverviewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacestationOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
