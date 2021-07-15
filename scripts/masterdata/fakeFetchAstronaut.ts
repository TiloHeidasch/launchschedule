let fs = require("fs");

let dataAll = [];
function requestUrlAndPersistToFile() {
  persistData();
}
function persistData() {
  dataAll.push({
    id: 276,
    url: "https://lldev.thespacedevs.com/2.2.0/astronaut/276/",
    name: "Franz Viehböck",
    status: {
      id: 2,
      name: "Retired",
    },
    type: {
      id: 2,
      name: "Government",
    },
    agency: {
      id: 8,
      url: "https://lldev.thespacedevs.com/2.2.0/agencies/8/",
      name: "Austrian Space Agency",
      type: "Government",
    },
    date_of_birth: "1960-08-24",
    date_of_death: null,
    nationality: "Austrian",
    twitter: null,
    instagram: null,
    bio: "Franz Artur Viehböck (born August 24, 1960 in Vienna) is an Austrian electrical engineer, and was Austria's first cosmonaut. He was titulated „Austronaut“ by his country's media. He visited the Mir space station in 1991 aboard Soyuz TM-13, returning aboard Soyuz TM-12 after spending just over a week in space.",
    profile_image:
      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/franz2520viehb25c325b6ck_image_20181201223901.jpg",
    profile_image_thumbnail:
      "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/default/cache/54/57/5457ce75acb7b188196eb442e3f17b64.jpg",
    wiki: "https://en.wikipedia.org/wiki/Franz_Viehb%C3%B6ck",
    flights: [
      {
        id: "e5115cc2-f7a7-4316-9be4-980b04cc5bff",
        url: "https://lldev.thespacedevs.com/2.2.0/launch/e5115cc2-f7a7-4316-9be4-980b04cc5bff/",
        slug: "soyuz-u2-soyuz-tm-13",
        name: "Soyuz-U2 | Soyuz TM-13",
        status: {
          id: 3,
          name: "Launch Successful",
          abbrev: "Success",
          description:
            "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
        },
        last_updated: "2020-10-31T03:09:02Z",
        net: "1991-10-02T05:59:38Z",
        window_end: "1991-10-02T05:59:38Z",
        window_start: "1991-10-02T05:59:38Z",
        probability: -1,
        holdreason: null,
        failreason: null,
        hashtag: null,
        launch_service_provider: {
          id: 66,
          url: "https://lldev.thespacedevs.com/2.2.0/agencies/66/",
          name: "Soviet Space Program",
          type: "Government",
        },
        rocket: {
          id: 348,
          configuration: {
            id: 101,
            url: "https://lldev.thespacedevs.com/2.2.0/config/launcher/101/",
            name: "Soyuz-U",
            family: "Soyuz-U",
            full_name: "Soyuz-U2",
            variant: "2",
          },
        },
        mission: {
          id: 362,
          name: "Soyuz TM-13",
          description:
            "Soyuz TM-13 was the 13th mission and the tenth long-duration expedition to Mir space station. The mission began on October 2, 1991, 05:59:38 UTC, launching Commander Alexander Volkov, Research Cosmonaut/Flight Engineer Toktar Aubakirov and Research Cosmonaut Franz ViehbÃ¶ck, the first Austrian cosmonaut, into orbit. They docked with Mir two days later. During their stay there, cosmonauts performed EVAs, various station repair and maintenance tasks, and carried out scientific experiments in biology, geophysics, space technology, astronomy etc. They were visited by several Progress resupply spacecrafts, and welcomed aboard the Soyuz TM-14 crew.\nThe mission concluded with a safe landing back on Earth on March 25, 1992, 08:51:22 UTC.",
          launch_designator: null,
          type: "Human Exploration",
          orbit: {
            id: 8,
            name: "Low Earth Orbit",
            abbrev: "LEO",
          },
        },
        pad: {
          id: 32,
          url: "https://lldev.thespacedevs.com/2.2.0/pad/32/",
          agency_id: null,
          name: "1/5",
          info_url: null,
          wiki_url: "",
          map_url:
            "https://www.google.com/maps/place/45Â°55'12.0\"N+63Â°20'31.2\"E",
          latitude: "45.92",
          longitude: "63.342",
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
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_32_20200803143513.jpg",
          total_launch_count: 290,
        },
        webcast_live: false,
        image:
          "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/soyuz-u_image_20191229074852.jpg",
        infographic: null,
        program: [],
      },
    ],
    landings: [
      {
        id: 249,
        url: "https://lldev.thespacedevs.com/2.2.0/spacecraft/flight/249/",
        destination: "Mir",
        mission_end: "1991-10-10T04:12:00Z",
        spacecraft: {
          id: 118,
          url: "https://lldev.thespacedevs.com/2.2.0/spacecraft/118/",
          name: "Soyuz TM-12",
          serial_number: "Soyuz TM 11F732A51 #62",
          status: {
            id: 4,
            name: "Single Use",
          },
          description:
            "Soyuz TM-12 was a Soyuz spacecraft which launched on 18 May 1991 12:50 UTC. It transported one member of the Expedition 9 crew, one Russian, and one British astronaut to Mir. The Expedition 9 crew consisted of Anatoly Artsebarsky. The Russian was EO-10 member Sergei Krikalyov. The British astronaut was Helen Sharman.",
          spacecraft_config: {
            id: 1,
            url: "https://lldev.thespacedevs.com/2.2.0/config/spacecraft/1/",
            name: "Soyuz",
            type: {
              id: 1,
              name: "Unknown",
            },
            agency: {
              id: 63,
              url: "https://lldev.thespacedevs.com/2.2.0/agencies/63/",
              name: "Russian Federal Space Agency (ROSCOSMOS)",
              type: "Government",
            },
            in_use: true,
            image_url:
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/soyuz_image_20201015191152.jpg",
          },
        },
        launch: {
          id: "83a07e03-831d-4067-b362-0ca9d56eb39c",
          url: "https://lldev.thespacedevs.com/2.2.0/launch/83a07e03-831d-4067-b362-0ca9d56eb39c/",
          slug: "soyuz-u2-soyuz-tm-12",
          name: "Soyuz-U2 | Soyuz TM-12",
          status: {
            id: 3,
            name: "Launch Successful",
            abbrev: "Success",
            description:
              "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
          },
          last_updated: "2020-10-31T03:08:51Z",
          net: "1991-05-18T12:50:28Z",
          window_end: "1991-05-18T12:50:28Z",
          window_start: "1991-05-18T12:50:28Z",
          probability: -1,
          holdreason: null,
          failreason: null,
          hashtag: null,
          launch_service_provider: {
            id: 66,
            url: "https://lldev.thespacedevs.com/2.2.0/agencies/66/",
            name: "Soviet Space Program",
            type: "Government",
          },
          rocket: {
            id: 343,
            configuration: {
              id: 101,
              url: "https://lldev.thespacedevs.com/2.2.0/config/launcher/101/",
              name: "Soyuz-U",
              family: "Soyuz-U",
              full_name: "Soyuz-U2",
              variant: "2",
            },
          },
          mission: {
            id: 288,
            name: "Soyuz TM-12",
            description:
              "Soyuz TM-12 was the 12th mission and the ninth long-duration expedition to Mir space station. The mission began on May 18, 1991, 12:50:28 UTC, launching Commander Anatoly Artsebarsky, Flight Engineer Sergei Krikalyov and Research Cosmonaut Helen Sharman, the first British cosmonaut, into orbit. They docked with Mir two days later. During their stay there, cosmonauts performed EVAs, various station repair and maintenance tasks, and carried out scientific experiments in biology, geophysics, space technology, astronomy etc. They were visited by several Progress resupply spacecrafts and welcomed aboard the Soyuz TM-13 crew.\nHelen Sharman returned on May 26, 1991, in Soyuz TM-11 spacecraft. While Sergei Krikalyov stayed on the station as a part of the next long-duration expedition, Anatoly Artsebarsky landed safely back on Earth on October 10, 1991, 04:12:18 UTC.",
            launch_designator: null,
            type: "Human Exploration",
            orbit: {
              id: 8,
              name: "Low Earth Orbit",
              abbrev: "LEO",
            },
          },
          pad: {
            id: 32,
            url: "https://lldev.thespacedevs.com/2.2.0/pad/32/",
            agency_id: null,
            name: "1/5",
            info_url: null,
            wiki_url: "",
            map_url:
              "https://www.google.com/maps/place/45Â°55'12.0\"N+63Â°20'31.2\"E",
            latitude: "45.92",
            longitude: "63.342",
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
              "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_32_20200803143513.jpg",
            total_launch_count: 290,
          },
          webcast_live: false,
          image:
            "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launcher_images/soyuz-u_image_20191229074852.jpg",
          infographic: null,
          program: [],
        },
      },
    ],
    last_flight: "1991-10-02T05:59:38Z",
    first_flight: "1991-10-02T05:59:38Z",
  });
  const data = dataAll;
  if (!fs.existsSync(dir)) {
    console.log(process.argv[1] + " creating directory");
    fs.mkdirSync(dir);
  }
  console.log(process.argv[1] + " writing file");
  fs.writeFile(
    dir + fileName + offset + ".json",
    JSON.stringify(data),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log(process.argv[1] + " wrote file");
      dataAll = [];
    }
  );
}

let path = "astronaut";
let dir = "src/app/data/";
let fileName = "astronauts";
let offset = process.argv[2];
let step = process.argv[3];
let max = +offset + +step;

console.log({ path, fileName, offset, step, max });
persistData();
