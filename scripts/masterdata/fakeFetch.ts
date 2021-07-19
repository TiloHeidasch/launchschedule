let fs = require("fs");

let dataAll = [];
function persistData() {
  switch (fileName) {
    case "agencies":
      dataAll.push({
        id: 225,
        url: "https://lldev.thespacedevs.com/2.2.0/agencies/225/",
        name: "1worldspace",
        featured: false,
        type: "Commercial",
        country_code: "USA",
        abbrev: "1WSP",
        description:
          "A now nonexistent satellite radio network company that operated two satellites to bring coverage with 62 stations to most of the Eastern Hemisphere. They went bankrupt in 2008. There has been a plan to relaunch the company, but it was announced in 2011, and nothing has been done since.",
        administrator: null,
        founding_year: "1960",
        launchers: "None",
        spacecraft: "AfriStar and AsiaStar",
        parent: null,
        launch_library_url: "https://launchlibrary.net/1.4/agency/225",
        total_launch_count: 0,
        successful_launches: 0,
        consecutive_successful_launches: 0,
        failed_launches: 0,
        pending_launches: 0,
        successful_landings: 0,
        failed_landings: 0,
        attempted_landings: 0,
        consecutive_successful_landings: 0,
        info_url: null,
        wiki_url: "https://en.wikipedia.org/wiki/1worldspace",
        logo_url: null,
        image_url: null,
        nation_url: null,
        launcher_list: [],
        spacecraft_list: [],
      });
      break;
    case "locations":
      dataAll.push({
        id: 151,
        name: "Broglio Space Center, Kenya",
        country_code: "ITA",
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_151_20200803142409.jpg",
        total_launch_count: 0,
        total_landing_count: 0,
        pads: [
          {
            id: 155,
            url: "https://lldev.thespacedevs.com/2.2.0/pad/155/",
            agency_id: null,
            name: "San Marco platform",
            info_url: null,
            wiki_url: "https://en.wikipedia.org/wiki/Broglio_Space_Center",
            map_url: "http://maps.google.com/maps?q=-2.9383333,40.210306",
            latitude: "-2.9383333",
            longitude: "40.210306",
            map_image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_155_20200803143349.jpg",
            total_launch_count: 0,
          },
        ],
      });
      break;
    case "previousevents":
      dataAll.push({
        id: 266,
        url: "https://lldev.thespacedevs.com/2.2.0/event/266/",
        slug: "progress-ms-17-docking",
        name: "Progress MS-17 Docking",
        updates: [],
        type: {
          id: 2,
          name: "Docking",
        },
        description:
          "The Progress MS-17 spacecraft is scheduled to autonomously dock to the Poisk module of the ISS.",
        location: "International Space Station",
        news_url: null,
        video_url: "https://www.youtube.com/watch?v=21X5lGlDOfg",
        feature_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/event_images/progress_ms-17__image_20210519065742.jpg",
        date: "2021-07-02T00:00:00Z",
        launches: [
          {
            id: "a330c94f-5191-42a2-9401-59a6268f590a",
            url: "https://lldev.thespacedevs.com/2.2.0/launch/a330c94f-5191-42a2-9401-59a6268f590a/",
            slug: "soyuz-21a-progress-ms-17-78p",
            name: "Soyuz 2.1a | Progress MS-17 (78P)",
            status: {
              id: 1,
              name: "Go for Launch",
              abbrev: "Go",
              description:
                "Current T-0 confirmed by official or reliable sources.",
            },
            last_updated: "2021-05-24T17:36:35Z",
            net: "2021-06-29T23:27:00Z",
            window_end: "2021-06-29T23:27:00Z",
            window_start: "2021-06-29T23:27:00Z",
            probability: null,
            holdreason: "",
            failreason: "",
            hashtag: null,
            launch_service_provider: {
              id: 63,
              url: "https://lldev.thespacedevs.com/2.2.0/agencies/63/",
              name: "Russian Federal Space Agency (ROSCOSMOS)",
              type: "Government",
            },
            rocket: {
              id: 2839,
              configuration: {
                id: 24,
                url: "https://lldev.thespacedevs.com/2.2.0/config/launcher/24/",
                name: "Soyuz 2.1a",
                family: "Soyuz",
                full_name: "Soyuz 2.1a",
                variant: "",
              },
            },
            mission: {
              id: 1305,
              name: "Progress MS-17 (78P)",
              description:
                "The Progress MS-17 spacecraft will resupply the International Space Station.",
              launch_designator: null,
              type: "Resupply",
              orbit: {
                id: 8,
                name: "Low Earth Orbit",
                abbrev: "LEO",
              },
            },
            pad: {
              id: 20,
              url: "https://lldev.thespacedevs.com/2.2.0/pad/20/",
              agency_id: null,
              name: "31/6",
              info_url: null,
              wiki_url: "",
              map_url: "http://maps.google.com/maps?q=45.996+N,+63.564+E",
              latitude: "45.996034",
              longitude: "63.564003",
              location: {
                id: 15,
                url: "https://lldev.thespacedevs.com/2.2.0/location/15/",
                name: "Baikonur Cosmodrome, Republic of Kazakhstan",
                country_code: "KAZ",
                map_image:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_15_20200803142517.jpg",
                total_launch_count: 471,
                total_landing_count: 0,
              },
              map_image:
                "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_20_20200803143516.jpg",
              total_launch_count: 80,
            },
            webcast_live: false,
            image:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/soyuz_2.1a_image_20201013143850.jpg",
            infographic: null,
            program: [
              {
                id: 17,
                url: "https://lldev.thespacedevs.com/2.2.0/program/17/",
                name: "International Space Station",
                description:
                  "The International Space Station programme is tied together by a complex set of legal, political and financial agreements between the sixteen nations involved in the project, governing ownership of the various components, rights to crewing and utilization, and responsibilities for crew rotation and resupply of the International Space Station. It was conceived in 1984 by President Ronald Reagan, during the Space Station Freedom project as it was originally called.",
                agencies: [
                  {
                    id: 16,
                    url: "https://lldev.thespacedevs.com/2.2.0/agencies/16/",
                    name: "Canadian Space Agency",
                    type: "Government",
                  },
                  {
                    id: 27,
                    url: "https://lldev.thespacedevs.com/2.2.0/agencies/27/",
                    name: "European Space Agency",
                    type: "Multinational",
                  },
                  {
                    id: 37,
                    url: "https://lldev.thespacedevs.com/2.2.0/agencies/37/",
                    name: "Japan Aerospace Exploration Agency",
                    type: "Government",
                  },
                  {
                    id: 44,
                    url: "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
                    name: "National Aeronautics and Space Administration",
                    type: "Government",
                  },
                  {
                    id: 63,
                    url: "https://lldev.thespacedevs.com/2.2.0/agencies/63/",
                    name: "Russian Federal Space Agency (ROSCOSMOS)",
                    type: "Government",
                  },
                ],
                image_url:
                  "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/international2_program_20201129184745.png",
                start_date: "1998-11-20T06:40:00Z",
                end_date: null,
                info_url:
                  "https://www.nasa.gov/mission_pages/station/main/index.html",
                wiki_url:
                  "https://en.wikipedia.org/wiki/International_Space_Station_programme",
                mission_patches: [],
              },
            ],
          },
        ],
        expeditions: [],
        spacestations: [
          {
            id: 4,
            url: "https://lldev.thespacedevs.com/2.2.0/spacestation/4/",
            name: "International Space Station",
            status: {
              id: 1,
              name: "Active",
            },
            founded: "1998-11-20",
            description:
              "The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.",
            orbit: "Low Earth Orbit",
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/spacestation_images/international2520space2520station_image_20190220215716.jpeg",
          },
        ],
        program: [
          {
            id: 17,
            url: "https://lldev.thespacedevs.com/2.2.0/program/17/",
            name: "International Space Station",
            description:
              "The International Space Station programme is tied together by a complex set of legal, political and financial agreements between the sixteen nations involved in the project, governing ownership of the various components, rights to crewing and utilization, and responsibilities for crew rotation and resupply of the International Space Station. It was conceived in 1984 by President Ronald Reagan, during the Space Station Freedom project as it was originally called.",
            agencies: [
              {
                id: 16,
                url: "https://lldev.thespacedevs.com/2.2.0/agencies/16/",
                name: "Canadian Space Agency",
                type: "Government",
              },
              {
                id: 27,
                url: "https://lldev.thespacedevs.com/2.2.0/agencies/27/",
                name: "European Space Agency",
                type: "Multinational",
              },
              {
                id: 37,
                url: "https://lldev.thespacedevs.com/2.2.0/agencies/37/",
                name: "Japan Aerospace Exploration Agency",
                type: "Government",
              },
              {
                id: 44,
                url: "https://lldev.thespacedevs.com/2.2.0/agencies/44/",
                name: "National Aeronautics and Space Administration",
                type: "Government",
              },
              {
                id: 63,
                url: "https://lldev.thespacedevs.com/2.2.0/agencies/63/",
                name: "Russian Federal Space Agency (ROSCOSMOS)",
                type: "Government",
              },
            ],
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/program_images/international2_program_20201129184745.png",
            start_date: "1998-11-20T06:40:00Z",
            end_date: null,
            info_url:
              "https://www.nasa.gov/mission_pages/station/main/index.html",
            wiki_url:
              "https://en.wikipedia.org/wiki/International_Space_Station_programme",
            mission_patches: [],
          },
        ],
      });
      break;
    case "pads":
      dataAll.push({
        id: 93,
        url: "https://lldev.thespacedevs.com/2.2.0/pad/93/",
        agency_id: 161,
        name: "Space Launch Complex 3W",
        info_url: null,
        wiki_url: "",
        map_url: "http://maps.google.com/maps?q=34.644+N,+120.593+W",
        latitude: "34.644",
        longitude: "-120.593",
        location: {
          id: 11,
          url: "https://lldev.thespacedevs.com/2.2.0/location/11/",
          name: "Vandenberg SFB, CA, USA",
          country_code: "USA",
          map_image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_11_20200803142416.jpg",
          total_launch_count: 85,
          total_landing_count: 3,
        },
        map_image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_93_20200803143225.jpg",
        total_launch_count: 3,
      });
      break;
    case "rockets":
      dataAll.push({
        id: 136,
        url: "https://lldev.thespacedevs.com/2.2.0/config/launcher/136/",
        name: "Angara 1.2",
        description:
          "The Angara 1.2 is the base launcher for the Angara launch family that uses a modular approach to create multiple launch vehicle configurations for various mission requirements. The Angara 1.2 consists of a standard Universal Rocket Module for the core stage and either a modified Block I Upper Stage or a Briz-KM upper stage.",
        family: "Angara",
        full_name: "Angara 1.2",
        manufacturer: {
          id: 118,
          url: "https://lldev.thespacedevs.com/2.2.0/agencies/118/",
          name: "International Launch Services",
          featured: false,
          type: "Commercial",
          country_code: "USA",
          abbrev: "ILS",
          description:
            "International Launch Services, Inc. (ILS) is a joint venture with exclusive rights to the worldwide sale of commercial Angara and Proton rocket launch services. Proton launches take place at the Baikonur Cosmodrome in Kazakhstan while Angara is planned to launch from the Plesetsk and Vostochny Cosmodromes in Russia.",
          administrator: "Kirk Pysher",
          founding_year: "1995",
          launchers: "",
          spacecraft: "",
          launch_library_url: "https://launchlibrary.net/1.4/agency/118",
          total_launch_count: 0,
          consecutive_successful_launches: 0,
          successful_launches: 0,
          failed_launches: 0,
          pending_launches: 2,
          consecutive_successful_landings: 0,
          successful_landings: 0,
          failed_landings: 0,
          attempted_landings: 0,
          info_url: "http://www.ilslaunch.com/",
          wiki_url:
            "http://en.wikipedia.org/wiki/International_Launch_Services",
          logo_url:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/logo/international2520launch2520services_logo_20200714154120.png",
          image_url: null,
          nation_url: null,
        },
        program: [],
        variant: "1.2",
        alias: "",
        min_stage: 2,
        max_stage: 2,
        length: 41.5,
        diameter: 2.9,
        maiden_flight: "2014-07-09",
        launch_cost: "31 Millon",
        launch_mass: 171,
        leo_capacity: 3700,
        gto_capacity: null,
        to_thrust: 1920,
        apogee: null,
        vehicle_range: null,
        image_url:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/angara25201.2_image_20190224012254.jpeg",
        info_url: "http://www.ilslaunch.com/node/4680",
        wiki_url:
          "https://en.wikipedia.org/wiki/Angara_(rocket_family)#Angara_1.2",
        total_launch_count: 0,
        consecutive_successful_launches: 0,
        successful_launches: 0,
        failed_launches: 0,
        pending_launches: 2,
      });
      break;
    case "spacecrafts":
      dataAll.push({
        id: 10,
        url: "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/10/",
        name: "Apollo Command/Service Module",
        type: {
          id: 1,
          name: "Unknown",
        },
        agency: {
          id: 999,
          url: "https://lldev.thespacedevs.com/2.2.0/agencies/999/",
          name: "North American Aviation",
          featured: false,
          type: null,
          country_code: "",
          abbrev: "",
          description:
            "North American Aviation (NAA) was a major American aerospace manufacturer, responsible for a number of historic aircraft, including the T-6 Texan trainer, the P-51 Mustang fighter, the B-25 Mitchell bomber, the F-86 Sabre jet fighter, the X-15 rocket plane, and the XB-70, as well as Apollo command and service module, the second stage of the Saturn V rocket, the Space Shuttle orbiter and the B-1 Lancer.",
          administrator: null,
          founding_year: "1928",
          launchers: "North American X-15",
          spacecraft: "",
          parent: "Boeing",
          image_url: null,
        },
        in_use: false,
        capability: "Cargo and Human Transportation to Lunar Orbit",
        history:
          "The Apollo Command/Service Module (CSM) was one of two principal components of the United States Apollo spacecraft, used for the Apollo program which landed astronauts on the Moon between 1969 and 1972.",
        details:
          "The Apollo Command/Service Module (CSM) was one of two principal components of the United States Apollo spacecraft, used for the Apollo program which landed astronauts on the Moon between 1969 and 1972. The CSM functioned as a mother ship which carried a crew of three astronauts and the second Apollo spacecraft, the Lunar Module, to lunar orbit, and brought the astronauts back to Earth. It consisted of two parts: the conical Command Module, a cabin that housed the crew and carried equipment needed for atmospheric reentry and splashdown; and the cylindrical Service Module which provided propulsion, electrical power and storage for various consumables required during a mission. An umbilical connection transferred power and consumables between the two modules. Just before reentry of the Command Module on the return home, the umbilical connection was severed and the Service Module was cast off and allowed to burn up in the atmosphere.",
        maiden_flight: "1966-02-26",
        height: 11.0,
        diameter: 3.9,
        human_rated: true,
        crew_capacity: 3,
        payload_capacity: 1050,
        flight_life: "14 days",
        image_url:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/apollo2520command2fservice2520module_image_20190207032507.jpeg",
        nation_url:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/apollo2520command2fservice2520module_image_20190207032507.png",
        wiki_link:
          "https://en.wikipedia.org/wiki/Apollo_Command/Service_Module",
        info_link: "",
      });
      break;
    case "spacestations":
      dataAll.push({
        id: 13,
        url: "https://lldev.thespacedevs.com/2.2.0/spacestation/13/",
        name: "Salyut 5",
        status: {
          id: 2,
          name: "De-Orbited",
        },
        type: {
          id: 2,
          name: "Government",
        },
        founded: "1976-06-22",
        deorbited: "1988-08-08",
        height: 13.55,
        width: 4.15,
        mass: 19.0,
        volume: 100,
        description:
          "Salyut 5, also known as OPS-3, was a Soviet space station. Launched in 1976 as part of the Salyut programme, it was the third and last Almaz space station to be launched for the Soviet military. Two Soyuz missions visited the station, each manned by two cosmonauts. A third Soyuz mission attempted to visit the station, but failed to dock, whilst a fourth mission was planned but never launched.",
        orbit: "Low Earth Orbit",
        onboard_crew: 0,
        owners: [
          {
            id: 63,
            url: "https://lldev.thespacedevs.com/2.2.0/agencies/63/",
            name: "Russian Federal Space Agency (ROSCOSMOS)",
            featured: true,
            type: "Government",
            country_code: "RUS",
            abbrev: "RFSA",
            description:
              "The Roscosmos State Corporation for Space Activities, commonly known as Roscosmos, is the governmental body responsible for the space science program of the Russian Federation and general aerospace research. Soyuz has many launch locations the Russian sites are Baikonur, Plesetsk and Vostochny however Ariane also purchases the vehicle and launches it from French Guiana.",
            administrator: "Administrator: Dmitry Rogozin",
            founding_year: "1992",
            launchers: "Soyuz",
            spacecraft: "Soyuz",
            parent: null,
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/russian2520federal2520space2520agency25202528roscosmos2529_image_20190207032459.jpeg",
          },
        ],
        active_expeditions: [],
        docking_location: [
          {
            id: 22,
            name: "Salyut-5 forward",
            docked: null,
          },
        ],
        image_url:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/spacestation_images/salyut25205_image_20190318095611.png",
      });
      break;

    default:
      break;
  }
  if (!fs.existsSync(dir)) {
    console.log(process.argv[1] + " creating directory");
    fs.mkdirSync(dir);
  }
  console.log(process.argv[1] + " writing file");
  fs.writeFile(
    dir + fileName + offset + ".json",
    JSON.stringify(dataAll),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(process.argv[1] + " wrote file");
      dataAll = [];
    }
  );
}

let path = process.argv[2];
let dir = "src/app/data/";
let fileName = process.argv[3];
let offset = process.argv[4];
let step = process.argv[5];
let max = +offset + +step;

console.log({ path, fileName, offset, step, max });
persistData();
