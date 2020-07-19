import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatisticPage } from './statistic.page';

describe('StatisticPage', () => {
  let component: StatisticPage;
  let fixture: ComponentFixture<StatisticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
