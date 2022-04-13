import { Component } from "@angular/core";
import { AboutCardDetail } from "../about-card/about-card.component";

@Component({
  selector: "app-nasa",
  templateUrl: "./nasa.page.html",
  styleUrls: ["./nasa.page.scss"],
})
export class NasaPage {
  aboutCardDetails: AboutCardDetail[] = [
    {
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
    },
    {
      subtitle: "NASA",
      title: "NASA’s Eyes",
      contentMultiLine: [
        "Experience Earth and our solar system, the universe and the spacecraft exploring them, with immersive apps for Mac, PC and mobile devices.",
      ],
      links: [
        {
          name: "Homepage",
          link: "https://eyes.nasa.gov/",
          isExternal: true,
        },
      ],
      imageSrc:
        "https://eyes.nasa.gov/system/basic_html_elements/11404_eyes_bg.jpg",
    },
    {
      subtitle: "National Aeronautics and Space Administration",
      title: "NASA",
      contentMultiLine: [
        "The National Aeronautics and Space Administration (NASA) is an independent agency of the U.S. federal government responsible for the civilian space program, as well as aeronautics and space research.",
      ],
      links: [
        { name: "NASA.gov", link: "https://www.nasa.gov/", isExternal: true },
        {
          name: "Wikipedia",
          link: "https://en.wikipedia.org/wiki/NASA",
          isExternal: true,
        },
      ],
      imageSrc: "assets/logos/NASA_logo.svg",
    },
  ];
  constructor() {}
}
