import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { RocketPage } from "./rocket.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("RocketPage", () => {
  let component: RocketPage;
  let fixture: ComponentFixture<RocketPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RocketPage],
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
    ).and.returnValue("136");
    fixture = TestBed.createComponent(RocketPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
