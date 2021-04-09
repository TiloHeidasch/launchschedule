import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";

import { PreviousPage } from "./previous.page";

describe("PreviousPage", () => {
  let component: PreviousPage;
  let fixture: ComponentFixture<PreviousPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PreviousPage],
        imports: [
          IonicModule.forRoot(),
          RouterTestingModule,
          HttpClientTestingModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(PreviousPage);
      component = fixture.componentInstance;
      component.store.dashboard = {
        updates: [
          {
            id: 423,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment:
              "Starship SN11 launch failure, possibly due to engine issues.",
            info_url: "https://twitter.com/elonmusk/status/1376891464333017090",
            created_by: "Nosu",
            created_on: "2021-03-30T14:12:30Z",
          },
          {
            id: 422,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment:
              "Boca Chica road closure and evacuation confirmed for a Starship SN11 launch attempt as early as 13:00 UTC.",
            info_url:
              "https://twitter.com/BocaChicaGal/status/1376853719619399680",
            created_by: "Nosu",
            created_on: "2021-03-30T11:10:46Z",
          },
          {
            id: 417,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment: "Starship SN11 launch NET Monday (March 29).",
            info_url: "https://twitter.com/elonmusk/status/1375545176324734978",
            created_by: "Nosu",
            created_on: "2021-03-26T20:30:28Z",
          },
          {
            id: 416,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment: "No Starship SN11 launch today.",
            info_url: "https://www.cameroncounty.us/spacex/",
            created_by: "Nosu",
            created_on: "2021-03-26T19:43:44Z",
          },
          {
            id: 414,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment:
              "Boca Chica evacuation confirmed. Starship SN11 10 km flight attempt later today.",
            info_url:
              "https://twitter.com/BocaChicaGal/status/1375464984881283075",
            created_by: "Nosu",
            created_on: "2021-03-26T15:12:42Z",
          },
          {
            id: 412,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment:
              "Starship SN11 static fire followed by a 10 km flight attempt tomorrow (March 26), per Cameron County notice. Still pending an evacuation or overpressure notice to residents.",
            info_url:
              "https://www.cameroncounty.us/order-closing-boca-chica-beach-and-state-hwy-4-march-26/",
            created_by: "Nosu",
            created_on: "2021-03-25T22:22:03Z",
          },
          {
            id: 407,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/scottm3_profile_20210217190123.jpg",
            comment:
              "March 25 road closure cancelled. NET Friday March 26 pending road closures.",
            info_url: "https://www.cameroncounty.us/spacex/",
            created_by: "scottm3",
            created_on: "2021-03-24T00:54:09Z",
          },
          {
            id: 406,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment:
              "Road closure cancelled for March 24. Starship SN11 flight NET March 25.",
            info_url: "https://www.cameroncounty.us/spacex/",
            created_by: "Nosu",
            created_on: "2021-03-23T18:35:58Z",
          },
          {
            id: 358,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment:
              "Starship SN11 flight NET Friday March 19, pending a successful static fire.",
            info_url: "https://tfr.faa.gov/save_pages/detail_1_5839.html",
            created_by: "Nosu",
            created_on: "2021-03-16T16:57:33Z",
          },
          {
            id: 357,
            profile_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
            comment:
              "Alert notices are out for a Starship SN11 Static Fire attempt today (March 15) between 11:00 and 17:00 UTC.",
            info_url:
              "https://twitter.com/BocaChicaGal/status/1371229431172378625?s=20",
            created_by: "Nosu",
            created_on: "2021-03-15T06:26:14Z",
          },
        ],
        upcoming: { launches: [], events: [] },
        previous: {
          launches: [
            {
              id: "fc7a010b-0e88-43cb-8953-9a969c475dd6",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/fc7a010b-0e88-43cb-8953-9a969c475dd6/?format=json",
              slug: "starship-sn11-10-km-flight",
              name: "Starship SN11 | 10 km Flight",
              status: {
                id: 4,
                name: "Launch Failure",
                abbrev: "Failure",
                description:
                  "Either the launch vehicle did not reach orbit, or the payload(s) failed to separate.",
              },
              last_updated: "2021-03-30T18:50:00Z",
              net: "2021-03-30T13:00:00Z",
              window_end: "2021-03-30T20:00:00Z",
              window_start: "2021-03-30T12:00:00Z",
              probability: null,
              holdreason: "",
              failreason: "",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2845,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1252,
                name: "10 km Flight",
                description:
                  "The SN11 Starship prototype performed a test flight similar to SN8, SN9 and SN10. It launched up to an altitude of 10 km or 33,000 ft and did a belly flop maneuver followed by a controlled descent, but got destroyed during the landing maneuver.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 187,
                url: "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                agency_id: null,
                name: "Launch Pad B",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                total_launch_count: 2,
              },
              webcast_live: true,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210314064221.jpeg",
              infographic:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210324002218.jpeg",
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: "c0ac9a61-5aac-40d7-9919-3c29ea7d4172",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/c0ac9a61-5aac-40d7-9919-3c29ea7d4172/?format=json",
              slug: "starship-sn10-10-km-flight",
              name: "Starship SN10 | 10 km Flight",
              status: {
                id: 3,
                name: "Launch Successful",
                abbrev: "Success",
                description:
                  "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
              },
              last_updated: "2021-03-08T11:30:52Z",
              net: "2021-03-03T23:15:00Z",
              window_end: "2021-03-04T00:00:00Z",
              window_start: "2021-03-03T15:00:00Z",
              probability: null,
              holdreason: "",
              failreason: "",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2832,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1239,
                name: "10 km Flight",
                description:
                  "The SN10 Starship performed a test flight similar to SN8 and SN9. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver followed by a controlled descent to the landing pad. Despite successfully performing the landing flip maneuver with its three Raptor engines, its vertical velocity was too high on landing, damaging its structure and resulting in an explosive destruction a few minutes after touchdown.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 111,
                url: "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                agency_id: null,
                name: "Launch Pad A",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                total_launch_count: 6,
              },
              webcast_live: true,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308113052.jpeg",
              infographic: null,
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: "44670393-85da-4504-99f3-e5b95d71cbb6",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/44670393-85da-4504-99f3-e5b95d71cbb6/?format=json",
              slug: "starship-sn9-10-km-flight",
              name: "Starship SN9 | 10 km Flight",
              status: {
                id: 7,
                name: "Launch was a Partial Failure",
                abbrev: "Partial Failure",
                description:
                  "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
              },
              last_updated: "2021-03-08T11:29:07Z",
              net: "2021-02-02T20:25:15Z",
              window_end: "2021-02-02T23:59:00Z",
              window_start: "2021-02-02T15:00:00Z",
              probability: null,
              holdreason: "",
              failreason: "Destroyed on landing",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2815,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1224,
                name: "10 km Flight",
                description:
                  "The SN9 Starship performed a first flight similar to the one of SN8. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver and a controlled descent to the landing pad where the landing flip maneuver was unsuccessful and resulted in the destruction of the prototype on impact.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 187,
                url: "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                agency_id: null,
                name: "Launch Pad B",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                total_launch_count: 2,
              },
              webcast_live: true,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308112907.jpeg",
              infographic:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210124205946.png",
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: "fdfc71c4-37a7-4d36-a27c-90b132f0e4aa",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/fdfc71c4-37a7-4d36-a27c-90b132f0e4aa/?format=json",
              slug: "starship-sn8-125-km-flight",
              name: "Starship SN8 | 12.5 km Flight",
              status: {
                id: 7,
                name: "Launch was a Partial Failure",
                abbrev: "Partial Failure",
                description:
                  "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
              },
              last_updated: "2020-12-11T07:22:19Z",
              net: "2020-12-09T22:45:25Z",
              window_end: "2020-12-09T23:00:00Z",
              window_start: "2020-12-09T14:00:00Z",
              probability: null,
              holdreason: "",
              failreason:
                "Test completed set out objectives, but the vehicle failed to land successfully due to low pressure in the propellant header tanks cutting out the engines.",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2803,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1203,
                name: "12.5 km Flight",
                description:
                  "The SN8 Starship prototype was destroyed when attempting to land after a first flight to an altitude of 12.5 km or 41,000 ft.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 111,
                url: "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                agency_id: null,
                name: "Launch Pad A",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                total_launch_count: 6,
              },
              webcast_live: true,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20201211072219.jpeg",
              infographic:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20201204160134.png",
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: "6ada5478-9522-48ac-ad71-549097340355",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/6ada5478-9522-48ac-ad71-549097340355/?format=json",
              slug: "starship-sn6-150m-hop",
              name: "Starship SN6 | 150m Hop",
              status: {
                id: 3,
                name: "Launch Successful",
                abbrev: "Success",
                description:
                  "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
              },
              last_updated: "2020-12-07T20:50:27Z",
              net: "2020-09-03T17:48:00Z",
              window_end: "2020-09-04T01:00:00Z",
              window_start: "2020-09-03T13:00:00Z",
              probability: null,
              holdreason: "",
              failreason: "",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2750,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1147,
                name: "SN6 150m Hop",
                description:
                  "The Starship SN6 prototype sucessfully performed a 150m hop similar to the one successfully performed by its predecessor SN5.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 111,
                url: "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                agency_id: null,
                name: "Launch Pad A",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                total_launch_count: 6,
              },
              webcast_live: true,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20201207205027.jpeg",
              infographic: null,
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: "0389266e-e523-4a18-a320-ed746a5a315b",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/0389266e-e523-4a18-a320-ed746a5a315b/?format=json",
              slug: "starship-hopper-150m-hop",
              name: "Starship Hopper | 150m Hop",
              status: {
                id: 3,
                name: "Launch Successful",
                abbrev: "Success",
                description:
                  "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
              },
              last_updated: "2020-08-21T00:49:16Z",
              net: "2019-08-27T22:02:00Z",
              window_end: "2019-08-27T22:02:00Z",
              window_start: "2019-08-27T22:02:00Z",
              probability: null,
              holdreason: "",
              failreason: "",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2748,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1146,
                name: "Starhopper 150m Hop",
                description:
                  "SpaceX's latest prototype rocket design, Starhopper, has successfully performed a 150m  hop on Tuesday August 27, 2019 at 22:02 UTC.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 111,
                url: "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                agency_id: null,
                name: "Launch Pad A",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                total_launch_count: 6,
              },
              webcast_live: true,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520ho_image_20200820191836.jpg",
              infographic: null,
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: "eae177d1-3de8-4a21-ad79-fe21afac4f04",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/eae177d1-3de8-4a21-ad79-fe21afac4f04/?format=json",
              slug: "starship-hopper-20m-hop",
              name: "Starship Hopper | 20m Hop",
              status: {
                id: 3,
                name: "Launch Successful",
                abbrev: "Success",
                description:
                  "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
              },
              last_updated: "2020-08-21T00:49:13Z",
              net: "2019-07-26T03:45:00Z",
              window_end: "2019-07-26T03:45:00Z",
              window_start: "2019-07-26T03:45:00Z",
              probability: null,
              holdreason: "",
              failreason: "",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2747,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1145,
                name: "Starhopper 20m Hop",
                description:
                  "The Starhopper test article performed an untethered hop to an altitude of 20m.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 111,
                url: "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                agency_id: null,
                name: "Launch Pad A",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                total_launch_count: 6,
              },
              webcast_live: false,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520ho_image_20200820191128.png",
              infographic: null,
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: "20e3fd08-b603-4b05-9c61-a4d4c7cf9e82",
              url:
                "https://ll.thespacedevs.com/2.2.0/launch/20e3fd08-b603-4b05-9c61-a4d4c7cf9e82/?format=json",
              slug: "starship-sn5-150m-hop",
              name: "Starship SN5 | 150m Hop",
              status: {
                id: 3,
                name: "Launch Successful",
                abbrev: "Success",
                description:
                  "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
              },
              last_updated: "2020-12-07T20:50:19Z",
              net: "2020-08-04T23:57:00Z",
              window_end: "2020-08-05T01:00:00Z",
              window_start: "2020-08-04T13:00:00Z",
              probability: -1,
              holdreason: "",
              failreason: "",
              hashtag: null,
              launch_service_provider: {
                id: 121,
                url:
                  "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                name: "SpaceX",
                type: "Commercial",
              },
              rocket: {
                id: 2555,
                configuration: {
                  id: 207,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                  name: "Starship Prototype",
                  family: "Starship",
                  full_name: "Starship Prototype",
                  variant: "Prototype",
                },
              },
              mission: {
                id: 1040,
                name: "Starship SN5 150m Hop",
                description:
                  "The Starship SN5 first flight was a 150m 'hop' from SpaceX's South Texas Launch Site in Boca Chica Village.",
                launch_designator: null,
                type: "Test Flight",
                orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
              },
              pad: {
                id: 111,
                url: "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                agency_id: null,
                name: "Launch Pad A",
                info_url: null,
                wiki_url:
                  "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                map_url:
                  "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                latitude: "25.997116",
                longitude: "-97.15503099856647",
                location: {
                  id: 143,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                  name: "SpaceX Space Launch Facility, TX, USA",
                  country_code: "USA",
                  map_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                  total_launch_count: 8,
                  total_landing_count: 8,
                },
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                total_launch_count: 6,
              },
              webcast_live: false,
              image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20201207205018.jpeg",
              infographic: null,
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
          ],
          events: [
            {
              id: 144,
              url: "https://ll.thespacedevs.com/2.2.0/event/144/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed its first wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/cOm4S8y59Hg",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821071216.png",
              date: "2019-03-25T22:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 145,
              url: "https://ll.thespacedevs.com/2.2.0/event/145/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal-2",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed a wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/iOv34Tfabng",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821072700.png",
              date: "2019-03-28T23:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 146,
              url: "https://ll.thespacedevs.com/2.2.0/event/146/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal-3",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed a wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/vOUrIPebGlI",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821072708.png",
              date: "2019-04-01T21:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 147,
              url: "https://ll.thespacedevs.com/2.2.0/event/147/?format=json",
              slug: "starship-hopper-static-fire",
              name: "Starship Hopper Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The Starhopper prototype has successfully performed its first static fire.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/5vfiM10lc1M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821072715.png",
              date: "2019-04-03T00:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 148,
              url: "https://ll.thespacedevs.com/2.2.0/event/148/?format=json",
              slug: "starship-hopper-tethered-hop",
              name: "Starship Hopper Tethered Hop",
              updates: [],
              type: { id: 14, name: "Test Flight" },
              description:
                "The Starhopper prototype has successfully performed a tethered hop.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/elonmusk/status/1114390314565787648?s=20",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821072723.png",
              date: "2019-04-06T00:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 149,
              url: "https://ll.thespacedevs.com/2.2.0/event/149/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal-4",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed a wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url:
                "https://forum.nasaspaceflight.com/index.php?topic=47120.msg1949464#msg1949464",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821073139.png",
              date: "2019-05-23T23:40:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 150,
              url: "https://ll.thespacedevs.com/2.2.0/event/150/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal-5",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed a wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/ojwoS874BgI",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821073312.png",
              date: "2019-06-19T15:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 151,
              url: "https://ll.thespacedevs.com/2.2.0/event/151/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal-6",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed a wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/dBnyI6NH13Q",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821073541.png",
              date: "2019-07-16T03:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 152,
              url: "https://ll.thespacedevs.com/2.2.0/event/152/?format=json",
              slug: "starship-hopper-static-fire-2",
              name: "Starship Hopper Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The Starhopper prototype has successfully performed a static fire.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/JKyZ_7ZjabU",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821073705.png",
              date: "2019-07-17T03:24:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 153,
              url: "https://ll.thespacedevs.com/2.2.0/event/153/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal-7",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed a wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=-O1AFN9iSi4",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821073926.png",
              date: "2019-07-23T04:57:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 154,
              url: "https://ll.thespacedevs.com/2.2.0/event/154/?format=json",
              slug: "starship-hopper-wet-dress-rehearsal-8",
              name: "Starship Hopper Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The Starhopper prototype has successfully performed a wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/JkzW7mycZhw",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_hopper_image_20200821074147.png",
              date: "2019-08-09T22:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 37,
              url: "https://ll.thespacedevs.com/2.2.0/event/37/?format=json",
              slug: "spacex-starship-architecture-update-2019",
              name: "SpaceX Starship Architecture Update 2019",
              updates: [],
              type: { id: 20, name: "Press Event" },
              description:
                "Elon Musk will host an event where updated details of the Starship and Super Heavy will be shown.\r\n\r\nThis next generation launch vehicle platform will be powered by SpaceX's next-gen methane powered Raptor engines. Both the Mk1 and the Mk2 — another prototype that SpaceX is developing at its Florida facilities — will feature at least three Raptors.",
              location: "Boca Chica, TX",
              news_url:
                "https://twitter.com/elonmusk/status/1166860032052539392",
              video_url: "https://youtu.be/sOpMrVnjYeY",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/spacex2520starship2520architecture2520update_image_20190927182355.jpeg",
              date: "2019-09-29T01:00:00Z",
              launches: [
                {
                  id: "20e3fd08-b603-4b05-9c61-a4d4c7cf9e82",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/20e3fd08-b603-4b05-9c61-a4d4c7cf9e82/?format=json",
                  slug: "starship-sn5-150m-hop",
                  name: "Starship SN5 | 150m Hop",
                  status: {
                    id: 3,
                    name: "Launch Successful",
                    abbrev: "Success",
                    description:
                      "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
                  },
                  last_updated: "2020-12-07T20:50:19Z",
                  net: "2020-08-04T23:57:00Z",
                  window_end: "2020-08-05T01:00:00Z",
                  window_start: "2020-08-04T13:00:00Z",
                  probability: -1,
                  holdreason: "",
                  failreason: "",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2555,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1040,
                    name: "Starship SN5 150m Hop",
                    description:
                      "The Starship SN5 first flight was a 150m 'hop' from SpaceX's South Texas Launch Site in Boca Chica Village.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 111,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                    agency_id: null,
                    name: "Launch Pad A",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                    total_launch_count: 6,
                  },
                  webcast_live: false,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20201207205018.jpeg",
                  infographic: null,
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 155,
              url: "https://ll.thespacedevs.com/2.2.0/event/155/?format=json",
              slug: "starship-mk1-ambient-pressure-test",
              name: "Starship Mk1 Ambient Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "The Mk1 prototype successfully performed its first ambient pressure test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/gmVyMJXnPT8",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_mk1_am_image_20200821074802.jpeg",
              date: "2019-11-18T23:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 156,
              url: "https://ll.thespacedevs.com/2.2.0/event/156/?format=json",
              slug: "starship-mk1-cryoproof-test",
              name: "Starship Mk1 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The Mk1 prototype was destroyed due to a catastrophic failure which occurred during its first cryoproof test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/3nTSubYzQOM",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_mk1_cr_image_20200821074947.jpeg",
              date: "2019-11-20T20:27:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 157,
              url: "https://ll.thespacedevs.com/2.2.0/event/157/?format=json",
              slug: "starship-test-tank-pressure-test",
              name: "Starship Test Tank Pressure Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "A tank prototype has been pressurized to failure to test the dome to barrel weld.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/elonmusk/status/1215719463913345024?s=20",
              video_url: "https://youtu.be/0JkTvfMSHu4",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/default.png",
              date: "2020-01-10T14:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 158,
              url: "https://ll.thespacedevs.com/2.2.0/event/158/?format=json",
              slug: "starship-sn1-cryoproof-test",
              name: "Starship SN1 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN1 prototype was destroyed during its first cryoproof test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/sYeVnGL7fgw",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn1_cr_image_20200821081200.jpeg",
              date: "2020-02-29T00:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 159,
              url: "https://ll.thespacedevs.com/2.2.0/event/159/?format=json",
              slug: "starship-sn2-cryoproof-test",
              name: "Starship SN2 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN2 prototype successfully performed its first cryoproof test.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/BocaChicaGal/status/1236821725242953728",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/default.png",
              date: "2020-03-10T01:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 160,
              url: "https://ll.thespacedevs.com/2.2.0/event/160/?format=json",
              slug: "starship-sn3-ambient-pressure-test",
              name: "Starship SN3 Ambient Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "The SN3 prototype successfully performed its first ambient pressure test.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/elonmusk/status/1245837966427095041?s=20",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn3_am_image_20200821082030.jpeg",
              date: "2020-04-03T02:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 161,
              url: "https://ll.thespacedevs.com/2.2.0/event/161/?format=json",
              slug: "starship-sn3-cryoproof-test",
              name: "Starship SN3 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN3 prototype was destroyed during its first cryoproof test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/wFXQ5SRCy74",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn3_cr_image_20200821082144.jpeg",
              date: "2020-04-04T02:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 136,
              url: "https://ll.thespacedevs.com/2.2.0/event/136/?format=json",
              slug: "starship-sn4-ambient-pressure-test",
              name: "Starship SN4 Ambient Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "The SN4 prototype has successfully performed its ambient pressure test.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/elonmusk/status/1254430299313836036",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_am_image_20200821052728.jpeg",
              date: "2020-04-26T15:21:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 137,
              url: "https://ll.thespacedevs.com/2.2.0/event/137/?format=json",
              slug: "starship-sn4-cryoproof-test",
              name: "Starship SN4 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN4 successfully performed its first cryoproof test.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/elonmusk/status/1254632509863866368?s=20",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_cr_image_20200821053030.jpeg",
              date: "2020-04-27T04:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 103,
              url: "https://ll.thespacedevs.com/2.2.0/event/103/?format=json",
              slug: "starship-sn4-static-fire",
              name: "Starship SN4 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The SN4 has successfully performed its first static fire.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/2UFYwf408VE",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/sn4_static_fire_image_20200506020647.jpeg",
              date: "2020-05-06T01:57:00Z",
              launches: [
                {
                  id: "20e3fd08-b603-4b05-9c61-a4d4c7cf9e82",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/20e3fd08-b603-4b05-9c61-a4d4c7cf9e82/?format=json",
                  slug: "starship-sn5-150m-hop",
                  name: "Starship SN5 | 150m Hop",
                  status: {
                    id: 3,
                    name: "Launch Successful",
                    abbrev: "Success",
                    description:
                      "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
                  },
                  last_updated: "2020-12-07T20:50:19Z",
                  net: "2020-08-04T23:57:00Z",
                  window_end: "2020-08-05T01:00:00Z",
                  window_start: "2020-08-04T13:00:00Z",
                  probability: -1,
                  holdreason: "",
                  failreason: "",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2555,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1040,
                    name: "Starship SN5 150m Hop",
                    description:
                      "The Starship SN5 first flight was a 150m 'hop' from SpaceX's South Texas Launch Site in Boca Chica Village.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 111,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                    agency_id: null,
                    name: "Launch Pad A",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                    total_launch_count: 6,
                  },
                  webcast_live: false,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20201207205018.jpeg",
                  infographic: null,
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 135,
              url: "https://ll.thespacedevs.com/2.2.0/event/135/?format=json",
              slug: "starship-sn4-static-fire-2",
              name: "Starship SN4 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The SpaceX Starship SN4 Prototype has successfully performed its second static fire.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/uoJTza2fpcg",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_st_image_20200821052221.jpeg",
              date: "2020-05-07T07:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 162,
              url: "https://ll.thespacedevs.com/2.2.0/event/162/?format=json",
              slug: "starship-sn4-ambient-pressure-test-3",
              name: "Starship SN4 Ambient Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "The SN4 prototype successfully performed an ambient pressure test.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/nextspaceflight/status/1259027528175325184",
              video_url: "https://youtu.be/dXQmRLFj888",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_am_image_20200821082524.jpeg",
              date: "2020-05-09T07:30:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 138,
              url: "https://ll.thespacedevs.com/2.2.0/event/138/?format=json",
              slug: "starship-sn4-cryoproof-test-2",
              name: "Starship SN4 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN4 prototype successfully performed its second cryoproof test.",
              location: "Boca Chica, Texas",
              news_url:
                "https://twitter.com/NASASpaceflight/status/1259343216228343809",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_cr_image_20200821053446.jpeg",
              date: "2020-05-10T04:25:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 139,
              url: "https://ll.thespacedevs.com/2.2.0/event/139/?format=json",
              slug: "starship-sn4-ambient-pressure-test-2",
              name: "Starship SN4 Ambient Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "The SpaceX Starship SN4 Prototype has successfully performed its second ambient pressure test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_am_image_20200821053647.jpeg",
              date: "2020-05-17T17:58:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 105,
              url: "https://ll.thespacedevs.com/2.2.0/event/105/?format=json",
              slug: "starship-sn4-static-fire-3",
              name: "Starship SN4 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The SpaceX Starship SN4 Prototype has successfully performed its third static fire.",
              location: "Boca Chica, Texas",
              news_url:
                "https://spaceflightnow.com/2020/05/06/spacex-test-fires-raptor-engine-on-starship-test-rocket/",
              video_url: "https://youtu.be/kICMCCXAKVg",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_te_image_20200511085818.jpeg",
              date: "2020-05-19T18:00:54Z",
              launches: [
                {
                  id: "20e3fd08-b603-4b05-9c61-a4d4c7cf9e82",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/20e3fd08-b603-4b05-9c61-a4d4c7cf9e82/?format=json",
                  slug: "starship-sn5-150m-hop",
                  name: "Starship SN5 | 150m Hop",
                  status: {
                    id: 3,
                    name: "Launch Successful",
                    abbrev: "Success",
                    description:
                      "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
                  },
                  last_updated: "2020-12-07T20:50:19Z",
                  net: "2020-08-04T23:57:00Z",
                  window_end: "2020-08-05T01:00:00Z",
                  window_start: "2020-08-04T13:00:00Z",
                  probability: -1,
                  holdreason: "",
                  failreason: "",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2555,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1040,
                    name: "Starship SN5 150m Hop",
                    description:
                      "The Starship SN5 first flight was a 150m 'hop' from SpaceX's South Texas Launch Site in Boca Chica Village.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 111,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                    agency_id: null,
                    name: "Launch Pad A",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                    total_launch_count: 6,
                  },
                  webcast_live: false,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20201207205018.jpeg",
                  infographic: null,
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 140,
              url: "https://ll.thespacedevs.com/2.2.0/event/140/?format=json",
              slug: "starship-sn4-static-fire-4",
              name: "Starship SN4 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The SpaceX Starship SN4 Prototype has successfully performed its fourth static fire.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/HSvE0ry2Gbo",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_st_image_20200821054052.jpeg",
              date: "2020-05-28T18:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 141,
              url: "https://ll.thespacedevs.com/2.2.0/event/141/?format=json",
              slug: "starship-sn4-static-fire-5",
              name: "Starship SN4 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The SN4 prototype and its mount have been destroyed due to an anomaly during its fifth static fire.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/mvtLXa7x_cY",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn4_st_image_20200821054243.jpeg",
              date: "2020-05-29T18:40:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 163,
              url: "https://ll.thespacedevs.com/2.2.0/event/163/?format=json",
              slug: "starship-sn7-cryoproof-test",
              name: "Starship SN7 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN7 prototype was tested to failure with liquid nitrogen. It reached a pressure of 7.6 bar.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/7MLHc0k3Saw",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn7_cr_image_20200821082929.jpeg",
              date: "2020-06-15T19:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 164,
              url: "https://ll.thespacedevs.com/2.2.0/event/164/?format=json",
              slug: "starship-sn7-cryoproof-test-2",
              name: "Starship SN7 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN7 prototype was tested to failure again with a reinforced forward dome seam.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/Cu5YKGrZbYw",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn7_cr_image_20200821083049.jpeg",
              date: "2020-06-23T16:37:15Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 165,
              url: "https://ll.thespacedevs.com/2.2.0/event/165/?format=json",
              slug: "starship-sn5-ambient-pressure-test",
              name: "Starship SN5 Ambient Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "The SN5 prototype successfully performed an ambient pressure test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn5_am_image_20200821083506.jpeg",
              date: "2020-07-20T19:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 166,
              url: "https://ll.thespacedevs.com/2.2.0/event/166/?format=json",
              slug: "starship-sn5-wet-dress-rehearsal",
              name: "Starship SN5 Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "The SN5 successfully performed its first wet dress rehearsal.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn5_we_image_20200821083351.jpeg",
              date: "2020-07-22T18:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 123,
              url: "https://ll.thespacedevs.com/2.2.0/event/123/?format=json",
              slug: "starship-sn5-static-fire",
              name: "Starship SN5 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX will attempt to perform a static fire of its Starship SN5 prototype in preparation of its upcoming 150m hop.\r\n\r\nThe road closure lasts from 8am to 8pm CDT (1pm to 1am UTC).",
              location: "Boca Chica, TX, USA",
              news_url: null,
              video_url: "https://youtu.be/5QbM7Vsz3kg",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn5_st_image_20200730210143.jpg",
              date: "2020-07-30T20:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 142,
              url: "https://ll.thespacedevs.com/2.2.0/event/142/?format=json",
              slug: "starship-sn6-ambient-pressure-test",
              name: "Starship SN6 Ambient Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "The SN6 prototype successfully performed its first ambient pressure test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/19Rk4YEln7A",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn6_am_image_20200821061110.jpeg",
              date: "2020-08-16T18:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 143,
              url: "https://ll.thespacedevs.com/2.2.0/event/143/?format=json",
              slug: "starship-sn6-cryoproof-test",
              name: "Starship SN6 Cryoproof Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "The SN6 prototype successfully performed its first cryoproof test.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://youtu.be/19Rk4YEln7A",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn6_cr_image_20200821061158.jpeg",
              date: "2020-08-16T22:30:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 134,
              url: "https://ll.thespacedevs.com/2.2.0/event/134/?format=json",
              slug: "starship-sn6-static-fire",
              name: "Starship SN6 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "The SN6 prototype has successfully performed its first static fire.",
              location: "Boca Chica, TX, USA",
              news_url: null,
              video_url: "https://youtu.be/ORQeJNXM_FA",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn6_st_image_20200820182238.jpeg",
              date: "2020-08-24T00:44:30Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 169,
              url: "https://ll.thespacedevs.com/2.2.0/event/169/?format=json",
              slug: "starship-sn71-testing-to-failure",
              name: "Starship SN7.1 Testing to Failure",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "SN7.1 performed testing to failure to validate the performance of 304L stainless steel.\r\n\r\nAwaiting status of success.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/sn7.1_testing_image_20200901022721.jpeg",
              date: "2020-09-23T09:58:10Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 177,
              url: "https://ll.thespacedevs.com/2.2.0/event/177/?format=json",
              slug: "sn8-cryoproof-testing",
              name: "SN8 Cryoproof Testing",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "SN8 will undergo a series of tests to validate its build quality.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/sn8_cryoproof_t_image_20200926084708.jpeg",
              date: "2020-10-05T11:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 179,
              url: "https://ll.thespacedevs.com/2.2.0/event/179/?format=json",
              slug: "starship-sn8-preburner-test",
              name: "Starship SN8 Preburner Test",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SN8 conducted a preburner test of the raptor engines in preparation for the future 15km flight.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=AyVDueIIZbY",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_st_image_20201014184312.jpg_large",
              date: "2020-10-19T11:01:43Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 183,
              url: "https://ll.thespacedevs.com/2.2.0/event/183/?format=json",
              slug: "starship-sn8-preburner-test-2",
              name: "Starship SN8 Preburner Test",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SN8 successfully performed a second preburner test of its raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_pr_image_20201020082023.jpg_large",
              date: "2020-10-20T06:22:08Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 182,
              url: "https://ll.thespacedevs.com/2.2.0/event/182/?format=json",
              slug: "starship-sn8-static-fire",
              name: "Starship SN8 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "Starship SN8 sucessfully performed a static fire of its raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_st_image_20201019110502.jpg_large",
              date: "2020-10-20T08:14:21Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 168,
              url: "https://ll.thespacedevs.com/2.2.0/event/168/?format=json",
              slug: "spacex-starship-architecture-update-2020",
              name: "SpaceX Starship Architecture Update 2020",
              updates: [],
              type: { id: 20, name: "Press Event" },
              description:
                "Updated details on the SpaceX Starship vehicle will go live on the spacex website in late October.",
              location: "Boca Chica, TX",
              news_url:
                "https://twitter.com/elonmusk/status/1319729145421598720",
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/spacex_starship_image_20200828170245.jpeg",
              date: "2020-10-31T00:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 185,
              url: "https://ll.thespacedevs.com/2.2.0/event/185/?format=json",
              slug: "starship-sn8-static-fire-2",
              name: "Starship SN8 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "Starship SN8 performed a Raptor engine static fire before its 15 km Flight.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=e4EmN2EVijs",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_te_image_20201027114507.jpg_large",
              date: "2020-11-11T00:08:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 189,
              url: "https://ll.thespacedevs.com/2.2.0/event/189/?format=json",
              slug: "starship-sn8-static-fire-3",
              name: "Starship SN8 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SN8 performed a static fire of its Raptor engines.\r\nThe test was followed by a unintentional loss of pneumatic control of the vehicle, as well as possible damage to a raptor engine.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=tJAxtqCCyn8",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_st_image_20201112224508.jpg_large",
              date: "2020-11-13T01:15:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 193,
              url: "https://ll.thespacedevs.com/2.2.0/event/193/?format=json",
              slug: "starship-sn8-static-fire-4",
              name: "Starship SN8 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SN8 successfully performed a static fire of its Raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_st_image_20201124165142.jpeg",
              date: "2020-11-24T23:23:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 197,
              url: "https://ll.thespacedevs.com/2.2.0/event/197/?format=json",
              slug: "starship-sn8-testing",
              name: "Starship SN8 Testing",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "SN8 performed a Wet Dress Rehearsal to validate tank performance before the 15 km flight.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_st_image_20201129190547.jpeg",
              date: "2020-12-03T03:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 203,
              url: "https://ll.thespacedevs.com/2.2.0/event/203/?format=json",
              slug: "starship-sn8-wet-dress-rehearsal",
              name: "Starship SN8 Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "Starship SN8 will perform a WDR of the vehicle before the 12.5km flight.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn8_we_image_20201207224933.jpeg",
              date: "2020-12-08T00:00:00Z",
              launches: [
                {
                  id: "fdfc71c4-37a7-4d36-a27c-90b132f0e4aa",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/fdfc71c4-37a7-4d36-a27c-90b132f0e4aa/?format=json",
                  slug: "starship-sn8-125-km-flight",
                  name: "Starship SN8 | 12.5 km Flight",
                  status: {
                    id: 7,
                    name: "Launch was a Partial Failure",
                    abbrev: "Partial Failure",
                    description:
                      "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
                  },
                  last_updated: "2020-12-11T07:22:19Z",
                  net: "2020-12-09T22:45:25Z",
                  window_end: "2020-12-09T23:00:00Z",
                  window_start: "2020-12-09T14:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason:
                    "Test completed set out objectives, but the vehicle failed to land successfully due to low pressure in the propellant header tanks cutting out the engines.",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2803,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1203,
                    name: "12.5 km Flight",
                    description:
                      "The SN8 Starship prototype was destroyed when attempting to land after a first flight to an altitude of 12.5 km or 41,000 ft.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 111,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                    agency_id: null,
                    name: "Launch Pad A",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                    total_launch_count: 6,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20201211072219.jpeg",
                  infographic:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20201204160134.png",
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 204,
              url: "https://ll.thespacedevs.com/2.2.0/event/204/?format=json",
              slug: "starship-sn9-pressure-test",
              name: "Starship SN9 Pressure Test",
              updates: [],
              type: { id: 19, name: "Ambient Pressure Test" },
              description:
                "SpaceX has conducted a pressure test on Starship SN9.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_te_image_20201226201555.png",
              date: "2020-12-29T02:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 206,
              url: "https://ll.thespacedevs.com/2.2.0/event/206/?format=json",
              slug: "starship-sn9-cryoproof-rcs-test",
              name: "Starship SN9 Cryoproof + RCS Test",
              updates: [],
              type: { id: 21, name: "Cryoproof Test" },
              description:
                "SpaceX conducted a Cryo test on SN9. The RCS thrusters were also tested.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=-Z2rpRSp4vY",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_te_image_20201229002608.png",
              date: "2020-12-29T23:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 208,
              url: "https://ll.thespacedevs.com/2.2.0/event/208/?format=json",
              slug: "starship-sn9-header-tank-testing",
              name: "Starship SN9 Header Tank Testing",
              updates: [],
              type: { id: 1, name: "Unknown" },
              description:
                "SpaceX likely conducted pressure tests on Starship SN9's header tanks.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: null,
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_he_image_20210104234025.png",
              date: "2021-01-04T23:00:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 207,
              url: "https://ll.thespacedevs.com/2.2.0/event/207/?format=json",
              slug: "starship-sn9-static-fire",
              name: "Starship SN9 Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX performed a static fire on Starship SN9's three raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=x06Y1FNV2fY",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_st_image_20210107083631.jpeg",
              date: "2021-01-06T22:07:00Z",
              launches: [
                {
                  id: "44670393-85da-4504-99f3-e5b95d71cbb6",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/44670393-85da-4504-99f3-e5b95d71cbb6/?format=json",
                  slug: "starship-sn9-10-km-flight",
                  name: "Starship SN9 | 10 km Flight",
                  status: {
                    id: 7,
                    name: "Launch was a Partial Failure",
                    abbrev: "Partial Failure",
                    description:
                      "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
                  },
                  last_updated: "2021-03-08T11:29:07Z",
                  net: "2021-02-02T20:25:15Z",
                  window_end: "2021-02-02T23:59:00Z",
                  window_start: "2021-02-02T15:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "Destroyed on landing",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2815,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1224,
                    name: "10 km Flight",
                    description:
                      "The SN9 Starship performed a first flight similar to the one of SN8. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver and a controlled descent to the landing pad where the landing flip maneuver was unsuccessful and resulted in the destruction of the prototype on impact.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 187,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                    agency_id: null,
                    name: "Launch Pad B",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                    total_launch_count: 2,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308112907.jpeg",
                  infographic:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210124205946.png",
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 216,
              url: "https://ll.thespacedevs.com/2.2.0/event/216/?format=json",
              slug: "starship-sn9-2nd-static-fire",
              name: "Starship SN9 2nd Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX conducted a second static fire test on Starship SN9's raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_2n_image_20210108030811.jpg",
              date: "2021-01-13T18:30:00Z",
              launches: [
                {
                  id: "44670393-85da-4504-99f3-e5b95d71cbb6",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/44670393-85da-4504-99f3-e5b95d71cbb6/?format=json",
                  slug: "starship-sn9-10-km-flight",
                  name: "Starship SN9 | 10 km Flight",
                  status: {
                    id: 7,
                    name: "Launch was a Partial Failure",
                    abbrev: "Partial Failure",
                    description:
                      "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
                  },
                  last_updated: "2021-03-08T11:29:07Z",
                  net: "2021-02-02T20:25:15Z",
                  window_end: "2021-02-02T23:59:00Z",
                  window_start: "2021-02-02T15:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "Destroyed on landing",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2815,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1224,
                    name: "10 km Flight",
                    description:
                      "The SN9 Starship performed a first flight similar to the one of SN8. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver and a controlled descent to the landing pad where the landing flip maneuver was unsuccessful and resulted in the destruction of the prototype on impact.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 187,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                    agency_id: null,
                    name: "Launch Pad B",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                    total_launch_count: 2,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308112907.jpeg",
                  infographic:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210124205946.png",
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 217,
              url: "https://ll.thespacedevs.com/2.2.0/event/217/?format=json",
              slug: "starship-sn9-3rd-static-fire",
              name: "Starship SN9 3rd Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX conducted a third static fire test on Starship SN9's raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_3r_image_20210113184119.jpg",
              date: "2021-01-13T20:23:00Z",
              launches: [
                {
                  id: "44670393-85da-4504-99f3-e5b95d71cbb6",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/44670393-85da-4504-99f3-e5b95d71cbb6/?format=json",
                  slug: "starship-sn9-10-km-flight",
                  name: "Starship SN9 | 10 km Flight",
                  status: {
                    id: 7,
                    name: "Launch was a Partial Failure",
                    abbrev: "Partial Failure",
                    description:
                      "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
                  },
                  last_updated: "2021-03-08T11:29:07Z",
                  net: "2021-02-02T20:25:15Z",
                  window_end: "2021-02-02T23:59:00Z",
                  window_start: "2021-02-02T15:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "Destroyed on landing",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2815,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1224,
                    name: "10 km Flight",
                    description:
                      "The SN9 Starship performed a first flight similar to the one of SN8. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver and a controlled descent to the landing pad where the landing flip maneuver was unsuccessful and resulted in the destruction of the prototype on impact.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 187,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                    agency_id: null,
                    name: "Launch Pad B",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                    total_launch_count: 2,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308112907.jpeg",
                  infographic:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210124205946.png",
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 218,
              url: "https://ll.thespacedevs.com/2.2.0/event/218/?format=json",
              slug: "starship-sn9-4th-static-fire",
              name: "Starship SN9 4th Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX has conducted a fourth static fire test on Starship SN9's raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_4t_image_20210113203457.jpg",
              date: "2021-01-13T21:37:00Z",
              launches: [
                {
                  id: "44670393-85da-4504-99f3-e5b95d71cbb6",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/44670393-85da-4504-99f3-e5b95d71cbb6/?format=json",
                  slug: "starship-sn9-10-km-flight",
                  name: "Starship SN9 | 10 km Flight",
                  status: {
                    id: 7,
                    name: "Launch was a Partial Failure",
                    abbrev: "Partial Failure",
                    description:
                      "Either the launch vehicle reached orbit but did not deliver its payload in the targeted orbit, or an exceptional event made it impossible to consider the mission a success.",
                  },
                  last_updated: "2021-03-08T11:29:07Z",
                  net: "2021-02-02T20:25:15Z",
                  window_end: "2021-02-02T23:59:00Z",
                  window_start: "2021-02-02T15:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "Destroyed on landing",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2815,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1224,
                    name: "10 km Flight",
                    description:
                      "The SN9 Starship performed a first flight similar to the one of SN8. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver and a controlled descent to the landing pad where the landing flip maneuver was unsuccessful and resulted in the destruction of the prototype on impact.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 187,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                    agency_id: null,
                    name: "Launch Pad B",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                    total_launch_count: 2,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308112907.jpeg",
                  infographic:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210124205946.png",
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 220,
              url: "https://ll.thespacedevs.com/2.2.0/event/220/?format=json",
              slug: "starship-sn9-5th-static-fire",
              name: "Starship SN9 5th Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX might conduct a fifth static fire test on Starship SN9's raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_5t_image_20210118125020.jpg",
              date: "2021-01-21T22:44:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 221,
              url: "https://ll.thespacedevs.com/2.2.0/event/221/?format=json",
              slug: "starship-sn9-6th-static-fire",
              name: "Starship SN9 6th Static Fire",
              updates: [],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX might conduct a sixth static fire test on Starship SN9's raptor engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_6t_image_20210122145531.jpg",
              date: "2021-01-22T15:01:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 224,
              url: "https://ll.thespacedevs.com/2.2.0/event/224/?format=json",
              slug: "starship-sn9-wet-dress-rehearsal",
              name: "Starship SN9 Wet Dress Rehearsal",
              updates: [],
              type: { id: 22, name: "Wet Dress Rehearsal" },
              description:
                "SpaceX conducted a wet dress rehearsal on Starship SN9 in preparation of its first flight.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=Ky5l9ZxsG9M",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn9_te_image_20210128205358.jpeg",
              date: "2021-01-28T20:50:00Z",
              launches: [],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 226,
              url: "https://ll.thespacedevs.com/2.2.0/event/226/?format=json",
              slug: "starship-sn10-static-fire",
              name: "Starship SN10 Static Fire",
              updates: [
                {
                  id: 302,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "One engine of SN10 will be swapped out and a new static fire attempted on February 24. Flight NET February 25 pending a successful static fire.",
                  info_url:
                    "https://twitter.com/elonmusk/status/1364473175279620096?s=20",
                  created_by: "Nosu",
                  created_on: "2021-02-24T07:19:57Z",
                },
                {
                  id: 300,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "After a first static fire, Starship SN10 is now expected to fly as early as February 25.",
                  info_url: "https://tfr.faa.gov/save_pages/detail_1_6333.html",
                  created_by: "Nosu",
                  created_on: "2021-02-23T23:16:47Z",
                },
                {
                  id: 294,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment: "SN10 static fire NET February 22",
                  info_url:
                    "https://twitter.com/BocaChicaGal/status/1362519041135493122",
                  created_by: "Nosu",
                  created_on: "2021-02-19T10:07:18Z",
                },
              ],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX successfully performed a static fire of the Starship SN10 vehicle.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=sTA0GTgFn5E",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn10_s_image_20210208012610.jpeg",
              date: "2021-02-23T23:00:00Z",
              launches: [
                {
                  id: "c0ac9a61-5aac-40d7-9919-3c29ea7d4172",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/c0ac9a61-5aac-40d7-9919-3c29ea7d4172/?format=json",
                  slug: "starship-sn10-10-km-flight",
                  name: "Starship SN10 | 10 km Flight",
                  status: {
                    id: 3,
                    name: "Launch Successful",
                    abbrev: "Success",
                    description:
                      "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
                  },
                  last_updated: "2021-03-08T11:30:52Z",
                  net: "2021-03-03T23:15:00Z",
                  window_end: "2021-03-04T00:00:00Z",
                  window_start: "2021-03-03T15:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2832,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1239,
                    name: "10 km Flight",
                    description:
                      "The SN10 Starship performed a test flight similar to SN8 and SN9. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver followed by a controlled descent to the landing pad. Despite successfully performing the landing flip maneuver with its three Raptor engines, its vertical velocity was too high on landing, damaging its structure and resulting in an explosive destruction a few minutes after touchdown.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 111,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                    agency_id: null,
                    name: "Launch Pad A",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                    total_launch_count: 6,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308113052.jpeg",
                  infographic: null,
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 230,
              url: "https://ll.thespacedevs.com/2.2.0/event/230/?format=json",
              slug: "starship-sn10-static-fire-2",
              name: "Starship SN10 Static Fire #2",
              updates: [
                {
                  id: 306,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Second static fire complete. Flight NET tomorrow (February 26).",
                  info_url: null,
                  created_by: "Nosu",
                  created_on: "2021-02-25T23:00:35Z",
                },
                {
                  id: 304,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Road closure cancelled for today (Feb 24). Pushing the second static fire and the flight to February 25 and 26 respectively.",
                  info_url: "https://www.cameroncounty.us/spacex/",
                  created_by: "Nosu",
                  created_on: "2021-02-24T14:13:48Z",
                },
              ],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX performed a second static fire of the Starship SN10 vehicle after swapping out one of its engines.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=sTA0GTgFn5E",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn10_s_image_20210224072220.jpeg",
              date: "2021-02-25T22:57:00Z",
              launches: [
                {
                  id: "c0ac9a61-5aac-40d7-9919-3c29ea7d4172",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/c0ac9a61-5aac-40d7-9919-3c29ea7d4172/?format=json",
                  slug: "starship-sn10-10-km-flight",
                  name: "Starship SN10 | 10 km Flight",
                  status: {
                    id: 3,
                    name: "Launch Successful",
                    abbrev: "Success",
                    description:
                      "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
                  },
                  last_updated: "2021-03-08T11:30:52Z",
                  net: "2021-03-03T23:15:00Z",
                  window_end: "2021-03-04T00:00:00Z",
                  window_start: "2021-03-03T15:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2832,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1239,
                    name: "10 km Flight",
                    description:
                      "The SN10 Starship performed a test flight similar to SN8 and SN9. It launched up to an altitude of 10 km or 33,000 ft, did a belly flop maneuver followed by a controlled descent to the landing pad. Despite successfully performing the landing flip maneuver with its three Raptor engines, its vertical velocity was too high on landing, damaging its structure and resulting in an explosive destruction a few minutes after touchdown.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 111,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/111/?format=json",
                    agency_id: null,
                    name: "Launch Pad A",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_111_20200803143229.jpg",
                    total_launch_count: 6,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210308113052.jpeg",
                  infographic: null,
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 232,
              url: "https://ll.thespacedevs.com/2.2.0/event/232/?format=json",
              slug: "starship-sn11-static-fire",
              name: "Starship SN11 Static Fire",
              updates: [
                {
                  id: 400,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Alert notices are out for a Starship SN11 Static Fire attempt tomorrow (March 22) between 12:00 and 20:00 UTC.",
                  info_url:
                    "https://twitter.com/BocaChicaGal/status/1373737224257277954?s=20",
                  created_by: "Nosu",
                  created_on: "2021-03-21T21:19:13Z",
                },
                {
                  id: 358,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Starship SN11 flight NET Friday March 19, pending a successful static fire.",
                  info_url: "https://tfr.faa.gov/save_pages/detail_1_5839.html",
                  created_by: "Nosu",
                  created_on: "2021-03-16T16:57:33Z",
                },
                {
                  id: 357,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Alert notices are out for a Starship SN11 Static Fire attempt today (March 15) between 11:00 and 17:00 UTC.",
                  info_url:
                    "https://twitter.com/BocaChicaGal/status/1371229431172378625?s=20",
                  created_by: "Nosu",
                  created_on: "2021-03-15T06:26:14Z",
                },
                {
                  id: 354,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Adding the SN11 launch NET Tuesday March 16. Still pending a successful static fire, preparations for flight and FAA approval.",
                  info_url: "https://tfr.faa.gov/save_pages/detail_1_4748.html",
                  created_by: "Nosu",
                  created_on: "2021-03-14T06:42:22Z",
                },
                {
                  id: 349,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Road closure cancelled for today. Next SN11 static fire attempt likely not before Monday (March 15).",
                  info_url: "https://www.cameroncounty.us/spacex/",
                  created_by: "Nosu",
                  created_on: "2021-03-12T19:20:39Z",
                },
                {
                  id: 348,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Starship SN11 Static Fire attempt today (March 12) between 13:00 and 18:00 UTC",
                  info_url:
                    "https://twitter.com/BocaChicaGal/status/1370217153803194372?s=19",
                  created_by: "Nosu",
                  created_on: "2021-03-12T07:50:43Z",
                },
              ],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX performed a static fire of the Starship SN11 vehicle.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=sTA0GTgFn5E",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn11_s_image_20210308182752.jpeg",
              date: "2021-03-22T13:56:37Z",
              launches: [
                {
                  id: "fc7a010b-0e88-43cb-8953-9a969c475dd6",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/fc7a010b-0e88-43cb-8953-9a969c475dd6/?format=json",
                  slug: "starship-sn11-10-km-flight",
                  name: "Starship SN11 | 10 km Flight",
                  status: {
                    id: 4,
                    name: "Launch Failure",
                    abbrev: "Failure",
                    description:
                      "Either the launch vehicle did not reach orbit, or the payload(s) failed to separate.",
                  },
                  last_updated: "2021-03-30T18:50:00Z",
                  net: "2021-03-30T13:00:00Z",
                  window_end: "2021-03-30T20:00:00Z",
                  window_start: "2021-03-30T12:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2845,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1252,
                    name: "10 km Flight",
                    description:
                      "The SN11 Starship prototype performed a test flight similar to SN8, SN9 and SN10. It launched up to an altitude of 10 km or 33,000 ft and did a belly flop maneuver followed by a controlled descent, but got destroyed during the landing maneuver.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 187,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                    agency_id: null,
                    name: "Launch Pad B",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                    total_launch_count: 2,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210314064221.jpeg",
                  infographic:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210324002218.jpeg",
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
            {
              id: 240,
              url: "https://ll.thespacedevs.com/2.2.0/event/240/?format=json",
              slug: "starship-sn11-static-fire-2",
              name: "Starship SN11 Static Fire #2",
              updates: [
                {
                  id: 414,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Boca Chica evacuation confirmed. Starship SN11 10 km flight attempt later today.",
                  info_url:
                    "https://twitter.com/BocaChicaGal/status/1375464984881283075",
                  created_by: "Nosu",
                  created_on: "2021-03-26T15:12:42Z",
                },
                {
                  id: 412,
                  profile_image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/profile_images/nosudrum_profile_20210217201305.jpg",
                  comment:
                    "Starship SN11 static fire followed by a 10 km flight attempt tomorrow (March 26), per Cameron County notice. Still pending an evacuation or overpressure notice to residents.",
                  info_url:
                    "https://www.cameroncounty.us/order-closing-boca-chica-beach-and-state-hwy-4-march-26/",
                  created_by: "Nosu",
                  created_on: "2021-03-25T22:22:03Z",
                },
              ],
              type: { id: 5, name: "Static Fire" },
              description:
                "SpaceX performed a second static fire test of the Starship SN11 vehicle after removing a Raptor engines for repairs.",
              location: "Boca Chica, Texas",
              news_url: null,
              video_url: "https://www.youtube.com/watch?v=sTA0GTgFn5E",
              feature_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/starship_sn11_s_image_20210325152530.jpeg",
              date: "2021-03-26T13:09:00Z",
              launches: [
                {
                  id: "fc7a010b-0e88-43cb-8953-9a969c475dd6",
                  url:
                    "https://ll.thespacedevs.com/2.2.0/launch/fc7a010b-0e88-43cb-8953-9a969c475dd6/?format=json",
                  slug: "starship-sn11-10-km-flight",
                  name: "Starship SN11 | 10 km Flight",
                  status: {
                    id: 4,
                    name: "Launch Failure",
                    abbrev: "Failure",
                    description:
                      "Either the launch vehicle did not reach orbit, or the payload(s) failed to separate.",
                  },
                  last_updated: "2021-03-30T18:50:00Z",
                  net: "2021-03-30T13:00:00Z",
                  window_end: "2021-03-30T20:00:00Z",
                  window_start: "2021-03-30T12:00:00Z",
                  probability: null,
                  holdreason: "",
                  failreason: "",
                  hashtag: null,
                  launch_service_provider: {
                    id: 121,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                    name: "SpaceX",
                    type: "Commercial",
                  },
                  rocket: {
                    id: 2845,
                    configuration: {
                      id: 207,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
                      name: "Starship Prototype",
                      family: "Starship",
                      full_name: "Starship Prototype",
                      variant: "Prototype",
                    },
                  },
                  mission: {
                    id: 1252,
                    name: "10 km Flight",
                    description:
                      "The SN11 Starship prototype performed a test flight similar to SN8, SN9 and SN10. It launched up to an altitude of 10 km or 33,000 ft and did a belly flop maneuver followed by a controlled descent, but got destroyed during the landing maneuver.",
                    launch_designator: null,
                    type: "Test Flight",
                    orbit: { id: 15, name: "Suborbital", abbrev: "Sub" },
                  },
                  pad: {
                    id: 187,
                    url:
                      "https://ll.thespacedevs.com/2.2.0/pad/187/?format=json",
                    agency_id: null,
                    name: "Launch Pad B",
                    info_url: null,
                    wiki_url:
                      "https://en.wikipedia.org/wiki/SpaceX_South_Texas_Launch_Site",
                    map_url:
                      "https://www.google.com/maps?q=25.997116+N,+97.15503099856647+W",
                    latitude: "25.997116",
                    longitude: "-97.15503099856647",
                    location: {
                      id: 143,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/location/143/?format=json",
                      name: "SpaceX Space Launch Facility, TX, USA",
                      country_code: "USA",
                      map_image:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_143_20200803142438.jpg",
                      total_launch_count: 8,
                      total_landing_count: 8,
                    },
                    map_image:
                      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_launch_pad_b_20201211004226.jpg",
                    total_launch_count: 2,
                  },
                  webcast_live: true,
                  image:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_image_20210314064221.jpeg",
                  infographic:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/starship2520sn_infographic_20210324002218.jpeg",
                  program: [
                    {
                      id: 1,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                      name: "SpaceX Starship",
                      description:
                        "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                      agencies: [
                        {
                          id: 121,
                          url:
                            "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                          name: "SpaceX",
                          type: "Commercial",
                        },
                      ],
                      image_url:
                        "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                      start_date: "2019-03-01T05:00:00Z",
                      end_date: null,
                      info_url: "https://www.spacex.com/vehicles/starship/",
                      wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                    },
                  ],
                },
              ],
              expeditions: [],
              spacestations: [],
              program: [
                {
                  id: 1,
                  url:
                    "https://ll.thespacedevs.com/2.2.0/program/1/?format=json",
                  name: "SpaceX Starship",
                  description:
                    "The SpaceX Starship is a fully reusable super heavy-lift launch vehicle under development by SpaceX since 2012, as a self-funded private spaceflight project.  The second stage of the Starship — is designed as a long-duration cargo and passenger-carrying spacecraft. It is expected to be initially used without any booster stage at all, as part of an extensive development program to prove out launch-and-landing and iterate on a variety of design details, particularly with respect to the vehicle's atmospheric reentry.",
                  agencies: [
                    {
                      id: 121,
                      url:
                        "https://ll.thespacedevs.com/2.2.0/agencies/121/?format=json",
                      name: "SpaceX",
                      type: "Commercial",
                    },
                  ],
                  image_url:
                    "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/spacex2520star_program_20201129204513.png",
                  start_date: "2019-03-01T05:00:00Z",
                  end_date: null,
                  info_url: "https://www.spacex.com/vehicles/starship/",
                  wiki_url: "https://en.wikipedia.org/wiki/SpaceX_Starship",
                },
              ],
            },
          ],
        },
        live_streams: [
          {
            title: "LabPadre 24/7 Livestream",
            description:
              "LabPadre is a free 24/7 live stream of the SpaceX Starship construction and testing site in Boca Chica, Texas. Multi camera views placed in several locations capture every moment of the Starship's construction and testing. LabPadre is devoted to supporting and growing the amazing community surrounding SpaceX and their fascinating developments.",
            image: "https://i.ytimg.com/vi/5QbM7Vsz3kg/maxresdefault_live.jpg",
            url: "https://www.youtube.com/watch?v=sTA0GTgFn5E",
          },
          {
            title:
              "Sapphire Cam - Starship SN10 Live At SpaceX Boca Chica Launch Facility",
            description:
              "NO LAUNCH TODAY ~ Monday 2/22/2021 Welcome to the LabPadre 24/7 Livestream! || Onsite weather provided by INITWeather.com || BOCA CHICA NEWS:  New constructi...",
            image: "https://i.ytimg.com/vi/eVDUmtGyBd4/maxresdefault_live.jpg",
            url: "https://www.youtube.com/watch?v=eVDUmtGyBd4",
          },
          {
            title:
              "Lab Cam - Starship SN10 Live At SpaceX Boca Chica Launch Facility",
            description:
              "NO LAUNCH TODAY ~ Monday 2/22/2021 Welcome to the LabPadre 24/7 Livestream! || Onsite weather provided by INITWeather.com || BOCA CHICA NEWS:  New constructi...",
            image: "https://i.ytimg.com/vi/hvImJzC8NQg/maxresdefault_live.jpg",
            url: "https://www.youtube.com/watch?v=hvImJzC8NQg",
          },
          {
            title: "Sentinel Cam - Starship SpaceX Boca Chica Launch Facility",
            description:
              "NO LAUNCH TODAY ~ Wednesday 2/17/2021 Welcome to the LabPadre 24/7 Livestream! || Onsite weather provided by INITWeather.com || BOCA CHICA NEWS: Residents re...",
            image: "https://i.ytimg.com/vi/richjW1jj20/maxresdefault_live.jpg",
            url: "https://www.youtube.com/watch?v=richjW1jj20",
          },
          {
            title:
              "Predator Cam - Starship SN10 At SpaceX Boca Chica Launch Facility",
            description:
              "NO LAUNCH TODAY ~ Monday 2/22/2021 Welcome to the LabPadre 24/7 Livestream! || Onsite weather provided by INITWeather.com || BOCA CHICA NEWS:  New constructi...",
            image: "https://i.ytimg.com/vi/QC31zwimnNc/maxresdefault_live.jpg",
            url: "https://www.youtube.com/watch?v=QC31zwimnNc",
          },
        ],
        road_closures: [
          {
            id: 151,
            title: "Primary Date",
            status: { id: 1, name: "Scheduled" },
            window_start: "2021-04-08T16:00:00Z",
            window_end: "2021-04-08T18:30:00Z",
          },
          {
            id: 148,
            title: "Primary Date",
            status: { id: 1, name: "Scheduled" },
            window_start: "2021-04-09T12:00:00Z",
            window_end: "2021-04-09T17:00:00Z",
          },
          {
            id: 149,
            title: "Secondary Date",
            status: { id: 1, name: "Scheduled" },
            window_start: "2021-04-12T17:00:00Z",
            window_end: "2021-04-13T01:00:00Z",
          },
          {
            id: 150,
            title: "Secondary Date",
            status: { id: 1, name: "Scheduled" },
            window_start: "2021-04-13T17:00:00Z",
            window_end: "2021-04-14T01:00:00Z",
          },
        ],
        notices: [],
        vehicles: [
          {
            id: 93,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/93/?format=json",
            flight_proven: false,
            serial_number: "BN1",
            status: "scrapped",
            details:
              "BN1 was the first Super Heavy prototype built by SpaceX in Boca Chica, TX. It was used as a production and ground operations pathfinder.",
            launcher_config: {
              id: 463,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/463/?format=json",
              name: "Super Heavy Prototype",
              family: "Starship",
              full_name: "Super Heavy Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/none_image_20210401104946.jpg",
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 75,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/75/?format=json",
            flight_proven: false,
            serial_number: "Mk1",
            status: "destroyed",
            details:
              "Starship Mk1 was partially destroyed during max pressure tank testing, when the forward LOX tank ruptured along a weld line of the craft's steel structure, propelling the bulkhead several meters upwards.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/75_image_20200821075135.jpeg",
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 76,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/76/?format=json",
            flight_proven: false,
            serial_number: "SN1",
            status: "destroyed",
            details: "SN1 was destroyed when undergoing pressurization.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/76_image_20200918010747.png",
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 91,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/91/?format=json",
            flight_proven: true,
            serial_number: "SN10",
            status: "destroyed",
            details:
              "SN10 is a Starship Prototype similar in design to SN9. It got destroyed during an explosion on the pad after landing.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/91_image_20210303201919.jpg",
            flights: 1,
            last_launch_date: "2021-03-03T23:15:00Z",
            first_launch_date: "2021-03-03T23:15:00Z",
          },
          {
            id: 92,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/92/?format=json",
            flight_proven: false,
            serial_number: "SN11",
            status: "destroyed",
            details:
              "SN11 is a Starship Prototype similar in design to SN10 and SN9. It got destroyed during its first flight to an altitude of 10 km.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/92_image_20210326174157.jpeg",
            flights: 1,
            last_launch_date: "2021-03-30T13:00:00Z",
            first_launch_date: "2021-03-30T13:00:00Z",
          },
          {
            id: 77,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/77/?format=json",
            flight_proven: false,
            serial_number: "SN2",
            status: "retired",
            details:
              "SN2 successfully went through a pressure and cryo test, but was not used for a static fire or hop.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/77_image_20200917061818.jpg",
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 78,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/78/?format=json",
            flight_proven: false,
            serial_number: "SN3",
            status: "destroyed",
            details:
              "SN3's cryo test failed, the result being the LOX (Liquid Oxygen) Tank collapsing due to underpressurisation.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/78_image_20200917062030.jpg",
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 79,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/79/?format=json",
            flight_proven: false,
            serial_number: "SN4",
            status: "destroyed",
            details:
              "On April 26, 2020, SN4 successfully completed a cryogenic pressure test. On May 29, 2020, SN4 exploded after engine testing.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/79_image_20200821075148.jpeg",
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 70,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/70/?format=json",
            flight_proven: true,
            serial_number: "SN5",
            status: "retired",
            details:
              "Fifth prototype of the Starship prototype vehicle. On the 4th of August, SN5 completed a 150m hop, its first successful launch and landing.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/70_image_20200806074407.jpeg",
            flights: 1,
            last_launch_date: "2020-08-04T23:57:00Z",
            first_launch_date: "2020-08-04T23:57:00Z",
          },
          {
            id: 80,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/80/?format=json",
            flight_proven: true,
            serial_number: "SN6",
            status: "retired",
            details:
              "Starship SN6 first flew on Aug. 23rd in Boca Chica, Texas with a single Raptor engine. It flew to height of 150m before landing safely. This vehicle has now been transported back to the main construction site.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/80_image_20200916194629.jpeg",
            flights: 1,
            last_launch_date: "2020-09-03T17:48:00Z",
            first_launch_date: "2020-09-03T17:48:00Z",
          },
          {
            id: 81,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/81/?format=json",
            flight_proven: false,
            serial_number: "SN7",
            status: "destroyed",
            details: "Intentionally destroyed during a pressurization test.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url: null,
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 82,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/82/?format=json",
            flight_proven: false,
            serial_number: "SN7.1",
            status: "destroyed",
            details:
              "SpaceX Test tank for 304L Stainless Steel. Top bulkhead intentionally burst during pressure testing.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/82_image_20200916201322.jpeg",
            flights: 0,
            last_launch_date: null,
            first_launch_date: null,
          },
          {
            id: 83,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/83/?format=json",
            flight_proven: true,
            serial_number: "SN8",
            status: "destroyed",
            details:
              "SN8 was destroyed when attempting to land after its first flight due to low header tank pressure during landing burn.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/83_image_20201211002626.jpeg",
            flights: 1,
            last_launch_date: "2020-12-09T22:45:25Z",
            first_launch_date: "2020-12-09T22:45:25Z",
          },
          {
            id: 89,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/89/?format=json",
            flight_proven: true,
            serial_number: "SN9",
            status: "destroyed",
            details:
              "SN9 is the first starship prototype to be fully made of 304L stainless steel. It was destroyed on landing after its first flight.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/89_image_20210128075700.jpeg",
            flights: 1,
            last_launch_date: "2021-02-02T20:25:15Z",
            first_launch_date: "2021-02-02T20:25:15Z",
          },
          {
            id: 74,
            url: "https://ll.thespacedevs.com/2.2.0/launcher/74/?format=json",
            flight_proven: true,
            serial_number: "Starhopper",
            status: "retired",
            details:
              "First prototype of the Starship vehicle. Starhopper was a short test article that flew once to a height of 150m before landing safely.",
            launcher_config: {
              id: 207,
              url:
                "https://ll.thespacedevs.com/2.2.0/config/launcher/207/?format=json",
              name: "Starship Prototype",
              family: "Starship",
              full_name: "Starship Prototype",
              variant: "Prototype",
            },
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_core_images/none_image_20200820190716.jpeg",
            flights: 2,
            last_launch_date: "2019-08-27T22:02:00Z",
            first_launch_date: "2019-07-26T03:45:00Z",
          },
        ],
      };
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
