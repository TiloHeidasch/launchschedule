import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AstroImageOfTheDayPage } from './astro-image-of-the-day.page';

describe('AstroImageOfTheDayPage', () => {
  let component: AstroImageOfTheDayPage;
  let fixture: ComponentFixture<AstroImageOfTheDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroImageOfTheDayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AstroImageOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
