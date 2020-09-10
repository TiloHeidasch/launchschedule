import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NotificationIconComponent } from "./notification-icon.component";

describe("NotificationIconComponent", () => {
  let component: NotificationIconComponent;
  let fixture: ComponentFixture<NotificationIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationIconComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
