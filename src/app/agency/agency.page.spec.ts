import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgencyPage } from './agency.page';

describe('AgencyPage', () => {
  let component: AgencyPage;
  let fixture: ComponentFixture<AgencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
