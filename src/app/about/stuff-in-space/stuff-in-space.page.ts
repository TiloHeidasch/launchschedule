import { Component } from "@angular/core";
import { AboutCardDetail } from "../about-card/about-card.component";

@Component({
  selector: "app-stuff-in-space",
  templateUrl: "./stuff-in-space.page.html",
  styleUrls: ["./stuff-in-space.page.scss"],
})
export class StuffInSpacePage {
  aboutCardDetails: AboutCardDetail[] = [
    {
      subtitle: "Spaceflight-related news articles, blogs and reports",
      title: "Stuff In Space",
      contentMultiLine: [
        "Stuff in Space is a realtime 3D map of objects in Earth orbit, visualized using WebGL.",
        "The website updates daily with orbit data from Space-Track.org and uses the excellent satellite.js Javascript library to calculate satellite positions.",
      ],
      links: [
        {
          isExternal: true,
          link: "http://stuffin.space",
          name: "Stuff in Space",
        },
        {
          isExternal: true,
          link: "https://github.com/jeyoder/ThingsInSpace",
          name: "Github",
        },
        {
          isExternal: true,
          link: "mailto:info@stuffin.space",
          name: "Contact the Author",
        },
      ],
      imageSrc: "assets/StuffInSpace.png",
    },
  ];
  constructor() {}
}
