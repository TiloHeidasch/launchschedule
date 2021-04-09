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
        ],
        upcoming: {
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
          ],
        },
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
        ],
      };
      fixture.detectChanges();
    })
  );

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
