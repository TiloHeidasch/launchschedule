import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BigImageModal } from './big-image-modal.page';

describe('BigImageModalPage', () => {
  let component: BigImageModal;
  let fixture: ComponentFixture<BigImageModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BigImageModal],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BigImageModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
