import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpacecraftDetailCardComponent } from './spacecraft-detail-card.component';

describe('SpacecraftDetailCardComponent', () => {
  let component: SpacecraftDetailCardComponent;
  let fixture: ComponentFixture<SpacecraftDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpacecraftDetailCardComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpacecraftDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
