import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacestationPage } from './spacestation.page';

describe('SpacestationPage', () => {
  let component: SpacestationPage;
  let fixture: ComponentFixture<SpacestationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacestationPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacestationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
