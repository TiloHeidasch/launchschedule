import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NewsTagsComponent } from "./news-tags.component";

describe("NewsTagsComponent", () => {
  let component: NewsTagsComponent;
  let fixture: ComponentFixture<NewsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsTagsComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
