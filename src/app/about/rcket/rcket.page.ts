import { Component } from "@angular/core";
import { PlaceholderService } from "src/app/placeholder.service";
import { environment } from "src/environments/environment";
import { AboutCardDetail } from "../about-card/about-card.component";

@Component({
  selector: "app-rcket",
  templateUrl: "./rcket.page.html",
  styleUrls: ["./rcket.page.scss"],
})
export class RcketPage {
  aboutCardDetails: AboutCardDetail[] = [
    {
      title: "Tilo Heidasch",
      subtitle: "Author",
      contentMultiLine: [
        "Hi, I am Tilo - creator of RCKET",
        "I am a professional Software Engineer and Enterprise Architect, currently employed at Capgemini.",
        "Since my early days, I have been interested in Space. Back in 1993, my parents took me to KSC. Back then I was completely overwhelmed and was not fully able to process everything. However, upon first sight of the Space Shuttle External Tank, I appearantly called it the chocolate rocket due to its brown-ish appeal.",
        "Growing older, I eventually learned how to develop mobile apps, hence I developed my first Android App - Launchschedule. Based on LaunchLibrary1.",
        "Getting more experience and learning more technologies, I used the sundown of LL1 and replacement by LL2 as the trigger to create RCKET.",
        "First being called Launchschedule, in a lack of a better name, I have now decided to call this App RCKET.",
        "RCKET is fully open source. It uses data from TheSpaceDevs LL2 aswell as SNAPI (Space News API)",
        "If you stumble across an issue or a bug, please feel free to open an Issue in Github.",
        "If you want to rate the App, I'd be happy if you would do so in Google Play",
      ],
      links: [
        {
          name: "Issues",
          link: "https://github.com/TiloHeidasch/launchschedule/issues",
          isExternal: true,
        },
        {
          name: "Rate this App",
          link: "https://play.google.com/store/apps/details?id=de.th105.launchschedule",
          isExternal: true,
        },
      ],
      image: {
        imageSrc: "assets/saturn5.jpg",
        title: "Tilo Heidasch",
        subtitle: "Me visiting the Saturn V at KSC with my mother in 1993.",
      },
    },
    {
      title: "Github",
      subtitle: "Open Source",
      contentMultiLine: [
        "You can checkout the entire source code of this app is on Github.",
        "Client contains the source code for the mobile app, aswell as the browser variant.",
        "Server contains the source code for the Notification Automation backend.",
      ],
      links: [
        {
          name: "Client",
          link: "https://github.com/TiloHeidasch/launchschedule",
          isExternal: true,
        },
        {
          name: "Server",
          link: "https://github.com/TiloHeidasch/launchschedule-notifications",
          isExternal: true,
        },
      ],
      imageSrc:
        "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
    },
    {
      title: "Version",
      contentMultiLine: [
        "Codename: " + environment.versionName,
        "Version Code: " + (environment.versionCode + 1000),
      ],
      imageSrc: this.placeholderService.getVersion(),
    },
    {
      subtitle: "Credit",
      title: "Open Source Licenses",
      contentMultiLine: [
        "Some contents of this app are taken from other creators under an Open Source License",
        "",
        "Satellite Icon: CC BY - Edward Boatman",
        "Font: Public domain, GPL, OFL - Eduardo Tunni",
        "Placeholder: Inspired by - Ryte Magazine",
      ],
      links: [
        {
          name: "Satellite by Edward Boatman",
          link: "https://thenounproject.com/term/satellite/408/",
          isExternal: true,
        },
        {
          name: "Font by Eduardo Tunni",
          link: "https://www.1001freefonts.com/de/changa.font",
          isExternal: true,
        },
        {
          name: "Ryte 404 Page",
          link: "https://de.ryte.com/magazine/wp-content/uploads/2017/10/1500x800-404EInstellungen.png",
          isExternal: true,
        },
      ],
      imageSrc: this.placeholderService.getCredits(),
    },
  ];
  constructor(private placeholderService: PlaceholderService) {}
}
