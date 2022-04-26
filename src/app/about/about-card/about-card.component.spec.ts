import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AboutCardComponent } from "./about-card.component";

describe("AboutCardComponent", () => {
  let component: AboutCardComponent;
  let fixture: ComponentFixture<AboutCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutCardComponent);
    component = fixture.componentInstance;
    component.aboutCardDetail = {
      subtitle: "NASA",
      title: "{ NASA APIs }",
      contentMultiLine: [
        "The objective of this site is to make NASA data, including imagery, eminently accessible to application developers. The api.nasa.gov catalog is growing.",
      ],
      links: [
        {
          name: "API Documentation",
          link: "https://api.nasa.gov/",
          isExternal: true,
        },
      ],
      imageSrc: "assets/logos/NASA_logo.svg",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
