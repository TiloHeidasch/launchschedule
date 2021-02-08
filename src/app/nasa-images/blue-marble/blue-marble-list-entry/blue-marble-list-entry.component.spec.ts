import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { BlueMarbleListEntryComponent } from "./blue-marble-list-entry.component";

describe("BlueMarbleListEntryComponent", () => {
  let component: BlueMarbleListEntryComponent;
  let fixture: ComponentFixture<BlueMarbleListEntryComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BlueMarbleListEntryComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(BlueMarbleListEntryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
