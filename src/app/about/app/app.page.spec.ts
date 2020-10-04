import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppPage } from './app.page';

describe('AppPage', () => {
  let component: AppPage;
  let fixture: ComponentFixture<AppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
