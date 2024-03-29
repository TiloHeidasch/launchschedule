import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AgencyPage } from "./agency.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("AgencyPage", () => {
  let component: AgencyPage;
  let fixture: ComponentFixture<AgencyPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgencyPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    spyOn(
      TestBed.inject(ActivatedRoute).snapshot.paramMap,
      "get"
    ).and.returnValue("225");
    fixture = TestBed.createComponent(AgencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
