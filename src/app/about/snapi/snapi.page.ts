import { Component } from "@angular/core";
import { AboutCardDetail } from "../about-card/about-card.component";

@Component({
  selector: "app-snapi",
  templateUrl: "./snapi.page.html",
  styleUrls: ["./snapi.page.scss"],
})
export class SnapiPage {
  aboutCardDetails: AboutCardDetail[] = [
    {
      subtitle: "Spaceflight-related news articles, blogs and reports",
      title: "Spaceflight News API",
      contentMultiLine: [
        "The Spaceflight News API, or SNAPI for short, started because Derk Weijers wanted an app where he could easily check the latest spaceflight news. As a Linux Engineer by profession, he had some experience with programming, but never had he developed a mobile app. At the start of 2018, he started following an online course for mobile app development (React Native). While doing so, he also started planning the app, and soon came to the conclusion that he would first need to build an API as a uniform interface to get data into his app. The Spaceflight News API was born.",
      ],
      links: [
        {
          isExternal: true,
          link: "https://thespacedevs.com/snapi",
          name: "Spaceflight News API",
        },
        {
          isExternal: true,
          link: "https://www.spaceflightnewsapi.net/documentation",
          name: "API Documentation",
        },
      ],
      imageSrc:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/static/home/thespacedevs/images/snapi_logo.svg",
    },
    {
      subtitle: "Network & Public APIs",
      title: "The Space Devs",
      contentMultiLine: [
        "The Space Devs is a group of space enthusiast developers working on a range of services, united in a common goal to improve public knowledge and accessibility of spaceflight information. We aim to bring space app developers together into a thriving community by providing helpful data and tools, accessible to everyone for free.",
      ],
      links: [
        {
          name: "The Space Devs",
          link: "https://thespacedevs.com/",
          isExternal: true,
        },
        {
          name: "Discord",
          link: "https://discord.com/invite/p7ntkNA",
          isExternal: true,
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com/r/TheSpaceDevs/",
          isExternal: true,
        },
        {
          name: "YouTube",
          link: "https://www.youtube.com/channel/UCCKiR4D6hbgk9lW9UwxZXxg",
          isExternal: true,
        },
        {
          name: "Support The Space Devs",
          link: "https://thespacedevs.com/supportus",
          isExternal: true,
        },
      ],
      imageSrc:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/static/home/thespacedevs/images/round_logo.svg",
    },
  ];
  constructor() {}
}
