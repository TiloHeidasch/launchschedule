import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayloadPage } from './payload.page';

describe('PayloadPage', () => {
  let component: PayloadPage;
  let fixture: ComponentFixture<PayloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
