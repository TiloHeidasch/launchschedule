import { ModalController } from "@ionic/angular/standalone";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";

import { SpacestationPage } from "./spacestation.page";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRoute } from "@angular/router";

describe("SpacestationPage", () => {
  let component: SpacestationPage;
  let fixture: ComponentFixture<SpacestationPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationPage],
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
    ).and.returnValue("13");
    fixture = TestBed.createComponent(SpacestationPage);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
