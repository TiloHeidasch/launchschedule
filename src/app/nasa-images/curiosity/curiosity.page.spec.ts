import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuriosityPage } from './curiosity.page';

describe('CuriosityPage', () => {
  let component: CuriosityPage;
  let fixture: ComponentFixture<CuriosityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuriosityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
