import { Component, OnInit } from "@angular/core";
import { AboutCardDetail } from "../about-card/about-card.component";

@Component({
  selector: "app-ll2",
  templateUrl: "./ll2.page.html",
  styleUrls: ["./ll2.page.scss"],
})
export class Ll2Page implements OnInit {
  aboutCardDetails: AboutCardDetail[] = [
    {
      subtitle: "Rocket launches, space events and crewed spaceflight",
      title: "Launch Library 2",
      contentMultiLine: [
        "The Launch Library 2 API is the official successor of the popular Launch Library API. It keeps its core features whilst also including everything the broader Space Launch Now API had to offer. The result is a large database delivering a more complete experience for each rocket launch and space event. The philosophy behind the API also remains unchanged : the entire database is accessible to everyone, for free.",
      ],
      links: [
        {
          isExternal: true,
          link: "https://thespacedevs.com/llapi",
          name: "Launch Library 2",
        },
        {
          isExternal: true,
          link: "https://ll.thespacedevs.com",
          name: "API Documentation",
        },
      ],
      imageSrc:
        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/static/home/thespacedevs/images/ll2_logo.svg",
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

  ngOnInit() {}
}
