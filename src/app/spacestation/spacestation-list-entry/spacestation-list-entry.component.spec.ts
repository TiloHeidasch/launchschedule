import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacestationListEntryComponent } from './spacestation-list-entry.component';

describe('SpacestationListEntryComponent', () => {
  let component: SpacestationListEntryComponent;
  let fixture: ComponentFixture<SpacestationListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationListEntryComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacestationListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
