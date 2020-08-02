import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacecraftListEntryComponent } from './spacecraft-list-entry.component';

describe('SpacecraftListEntryComponent', () => {
  let component: SpacecraftListEntryComponent;
  let fixture: ComponentFixture<SpacecraftListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftListEntryComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacecraftListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
