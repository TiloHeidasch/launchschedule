import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { AstronautPage } from "./astronaut.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("AstronautPage", () => {
  let component: AstronautPage;
  let fixture: ComponentFixture<AstronautPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautPage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ModalController],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    spyOn(
      TestBed.inject(ActivatedRoute).snapshot.paramMap,
      "get"
    ).and.returnValue("276");
    fixture = TestBed.createComponent(AstronautPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
