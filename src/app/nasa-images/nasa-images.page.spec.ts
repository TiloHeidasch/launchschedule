import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NasaImagesPage } from './nasa-images.page';

describe('NasaImagesPage', () => {
  let component: NasaImagesPage;
  let fixture: ComponentFixture<NasaImagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaImagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NasaImagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
