import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { PadPage } from "./pad.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("PadPage", () => {
  let component: PadPage;
  let fixture: ComponentFixture<PadPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadPage],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    spyOn(
      TestBed.inject(ActivatedRoute).snapshot.paramMap,
      "get"
    ).and.returnValue("93");
    fixture = TestBed.createComponent(PadPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
