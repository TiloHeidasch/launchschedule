import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { SpacestationDetailCardComponent } from "./spacestation-detail-card.component";

describe("SpacestationDetailCardComponent", () => {
  let component: SpacestationDetailCardComponent;
  let fixture: ComponentFixture<SpacestationDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationDetailCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SpacestationDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
