import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { LaunchListEntryComponent } from "./launch-list-entry.component";

describe("LaunchListEntryComponent", () => {
  let component: LaunchListEntryComponent;
  let fixture: ComponentFixture<LaunchListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchListEntryComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
