import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstronautListEntryComponent } from "./astronaut-list-entry.component";

describe("AstronautListEntryComponent", () => {
  let component: AstronautListEntryComponent;
  let fixture: ComponentFixture<AstronautListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautListEntryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
