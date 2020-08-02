import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AstronautPage } from './astronaut.page';

describe('AstronautPage', () => {
  let component: AstronautPage;
  let fixture: ComponentFixture<AstronautPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AstronautPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AstronautPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
