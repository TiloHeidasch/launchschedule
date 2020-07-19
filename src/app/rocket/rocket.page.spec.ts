import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RocketPage } from './rocket.page';

describe('RocketPage', () => {
  let component: RocketPage;
  let fixture: ComponentFixture<RocketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RocketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
