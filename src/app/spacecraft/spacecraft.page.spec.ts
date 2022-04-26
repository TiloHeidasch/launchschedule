import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SpacecraftPage } from "./spacecraft.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe("SpacecraftPage", () => {
  let component: SpacecraftPage;
  let fixture: ComponentFixture<SpacecraftPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    spyOn(
      TestBed.inject(ActivatedRoute).snapshot.paramMap,
      "get"
    ).and.returnValue("10");
    fixture = TestBed.createComponent(SpacecraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
