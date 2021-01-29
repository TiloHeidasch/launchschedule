import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { NewsListEntryComponent } from "./news-list-entry.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("NewsListEntryComponent", () => {
  let component: NewsListEntryComponent;
  let fixture: ComponentFixture<NewsListEntryComponent>;

  beforeEach(waitForAsync(() => {
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
      id: "6007d5cc858d39001c60635b",
      title: "SpaceX rolls out Falcon 9 rocket for another Starlink mission",
      url:
        "https://spaceflightnow.com/2021/01/18/spacex-rolls-out-falcon-9-rocket-for-another-starlink-mission/",
      imageUrl:
        "https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2020/01/starlink3_stack.jpg",
      newsSite: "Spaceflight Now",
      summary:
        "SpaceX rolled out a Falcon 9 rocket Sunday night to pad 39A at NASA’s Kennedy Space Center in Florida for liftoff with the next 60 Starlink internet satellites, but officials have pushed back the launch until Wednesday.",
      publishedAt: "2021-01-18T07:03:39.000Z",
      updatedAt: "2021-01-20T07:03:40.106Z",
      featured: false,
      launches: [],
      events: [],
    };
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
