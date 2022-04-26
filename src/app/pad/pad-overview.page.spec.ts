import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { PadOverviewPage } from "./pad-overview.page";

describe("PadOverviewPage", () => {
  let component: PadOverviewPage;
  let fixture: ComponentFixture<PadOverviewPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadOverviewPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PadOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
