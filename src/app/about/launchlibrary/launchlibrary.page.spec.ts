import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaunchlibraryPage } from './launchlibrary.page';

describe('LaunchlibraryPage', () => {
  let component: LaunchlibraryPage;
  let fixture: ComponentFixture<LaunchlibraryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchlibraryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchlibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
