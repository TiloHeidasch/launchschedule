import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { MissionListEntryComponent } from "./mission-list-entry.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("MissionListEntryComponent", () => {
  let component: MissionListEntryComponent;
  let fixture: ComponentFixture<MissionListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissionListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
