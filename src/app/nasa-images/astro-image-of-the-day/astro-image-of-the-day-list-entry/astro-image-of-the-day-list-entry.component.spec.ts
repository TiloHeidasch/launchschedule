import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AstroImageOfTheDayListEntryComponent } from './astro-image-of-the-day-list-entry.component';

describe('AstroImageOfTheDayListEntryComponent', () => {
  let component: AstroImageOfTheDayListEntryComponent;
  let fixture: ComponentFixture<AstroImageOfTheDayListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroImageOfTheDayListEntryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AstroImageOfTheDayListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
