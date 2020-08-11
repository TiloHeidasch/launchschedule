import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Statistic2Page } from './statistic2.page';

describe('Statistic2Page', () => {
  let component: Statistic2Page;
  let fixture: ComponentFixture<Statistic2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Statistic2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Statistic2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
