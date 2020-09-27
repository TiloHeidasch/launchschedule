import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NewsListEntryComponent } from "./news-list-entry.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("NewsListEntryComponent", () => {
  let component: NewsListEntryComponent;
  let fixture: ComponentFixture<NewsListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListEntryComponent],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsListEntryComponent);
    component = fixture.componentInstance;
    component.newsItem = {
      date_published: 1597681320,
      date_added: 1597729609,
      tags: ["astronomy", "course", "quiz", "2017"],
      categories: [],
      launches: [],
      events: [],
      _id: "5f3b6b495c993bca0ec35ec1",
      news_site: "planetarysociety",
      news_site_long: "Planetary Society",
      title: "Astronomy Course Quiz 2017",
      url: "https://www.planetary.org/outreach/astronomy-course-quiz-2017",
      id: "",
      featured_image:
        "https://planetary.s3.amazonaws.com/web/assets/pictures/_1200x630_crop_center-center_82_none/PIA10969.jpg?mtime=1572523068",
      published_date: "2020-08-17T16:22:00.000Z",
      imported_date: "2020-08-18T05:46:49.000Z",
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
