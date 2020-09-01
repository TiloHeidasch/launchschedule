import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SpacecraftPage } from "./spacecraft.page";

describe("SpacecraftPage", () => {
  let component: SpacecraftPage;
  let fixture: ComponentFixture<SpacecraftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacecraftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
