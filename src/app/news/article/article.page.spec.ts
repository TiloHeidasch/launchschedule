import { ModalController } from "@ionic/angular/standalone";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";

import { ArticlePage } from "./article.page";

describe("ArticlePage", () => {
  let component: ArticlePage;
  let fixture: ComponentFixture<ArticlePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePage],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ModalController],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
