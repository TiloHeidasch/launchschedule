import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { AstroImageOfTheDayListEntryComponent } from "./astro-image-of-the-day-list-entry.component";

describe("AstroImageOfTheDayListEntryComponent", () => {
  let component: AstroImageOfTheDayListEntryComponent;
  let fixture: ComponentFixture<AstroImageOfTheDayListEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstroImageOfTheDayListEntryComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AstroImageOfTheDayListEntryComponent);
    component = fixture.componentInstance;
    component.astroImageOfTheDay = {
      copyright: "Ariel Cappelletti",
      date: "2021-02-08",
      explanation:
        "Stars can be like artists. With interstellar gas as a canvas, a massive and tumultuous Wolf-Rayet star has created the picturesque ruffled half-circular filaments called WR32, on the image left. Additionally, the winds and radiation from a small cluster of stars, NGC 3324, have sculpted a 35 light year cavity on the upper right, with its right side appearing as a recognizable face in profile.  This region's popular name is the Gabriela Mistral Nebula for the famous  Chilean poet. Together, these interstellar clouds lie about 8,000 light-years away in the Great Carina Nebula, a complex stellar neighborhood harboring numerous clouds of gas and dust rich with imagination inspiring shapes. The featured telescopic view captures these nebulae's characteristic emission from ionized sulfur, hydrogen, and oxygen atoms mapped to the red, green, and blue hues of the popular Hubble Palette.    New: APOD now available in Bulgarian from Bulgaria",
      hdurl:
        "https://apod.nasa.gov/apod/image/2102/WR23Friends_cappelletti_4438.jpg",
      media_type: "image",
      service_version: "v1",
      title: "WR32 and Interstellar Clouds in Carina",
      url: "https://apod.nasa.gov/apod/image/2102/WR23Friends_cappelletti_960.jpg",
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
