import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { SpacecraftOverviewPage } from "./spacecraft-overview.page";

describe("SpacecraftOverviewPage", () => {
  let component: SpacecraftOverviewPage;
  let fixture: ComponentFixture<SpacecraftOverviewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacecraftOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
