let fs = require("fs");

let dataAll = [];
function persistData() {
  for (let index = 0; index < 500; index++) {
    dataAll.push({
      id: "9279744e-46b2-4eca-adea-f1379672ec81",
      url: "https://lldev.thespacedevs.com/2.2.0/launch/9279744e-46b2-4eca-adea-f1379672ec81/",
      slug: "atlas-lv-3a-samos-2",
      flightclub_url: null,
      r_spacex_api_id: null,
      name: "Atlas LV-3A | Samos 2",
      status: {
        id: 3,
        name: "Launch Successful",
        abbrev: "Success",
        description:
          "The launch vehicle successfully inserted its payload(s) into the target orbit(s).",
      },
      last_updated: "2020-10-31T03:00:01Z",
      updates: [],
      net: "1961-01-31T20:21:19Z",
      window_end: "1961-01-31T20:21:19Z",
      window_start: "1961-01-31T20:21:19Z",
      probability: 0,
      holdreason: "",
      failreason: "",
      hashtag: "",
      launch_service_provider: {
        id: 161,
        url: "https://lldev.thespacedevs.com/2.2.0/agencies/161/",
        name: "United States Air Force",
        featured: false,
        type: "Government",
        country_code: "USA",
        abbrev: "USAF",
        description: null,
        administrator: null,
        founding_year: null,
        launchers: "",
        spacecraft: "",
        launch_library_url: "https://launchlibrary.net/1.4/agency/161",
        total_launch_count: 31,
        consecutive_successful_launches: 0,
        successful_launches: 19,
        failed_launches: 12,
        pending_launches: 0,
        consecutive_successful_landings: 0,
        successful_landings: 0,
        failed_landings: 0,
        attempted_landings: 0,
        info_url: "http://www.af.mil",
        wiki_url: "http://en.wikipedia.org/wiki/United_States_Air_Force",
        logo_url: null,
        image_url: null,
        nation_url: null,
      },
      rocket: {
        id: 2362,
        configuration: {
          id: 183,
          url: "https://lldev.thespacedevs.com/2.2.0/config/launcher/183/",
          name: "Atlas Agena B",
          description:
            "The Atlas LV-3A was a largely unsuccessful configuration until it was given an Agena B upper stage. It was responsible for the launch of Mariner II to Venus and had one of the first engines that could be restarted in orbit.",
          family: "Atlas",
          full_name: "Atlas LV-3 Agena B",
          manufacturer: {
            id: 161,
            url: "https://lldev.thespacedevs.com/2.2.0/agencies/161/",
            name: "United States Air Force",
            featured: false,
            type: "Government",
            country_code: "USA",
            abbrev: "USAF",
            description: null,
            administrator: null,
            founding_year: null,
            launchers: "",
            spacecraft: "",
            launch_library_url: "https://launchlibrary.net/1.4/agency/161",
            total_launch_count: 31,
            consecutive_successful_launches: 0,
            successful_launches: 19,
            failed_launches: 12,
            pending_launches: 0,
            consecutive_successful_landings: 0,
            successful_landings: 0,
            failed_landings: 0,
            attempted_landings: 0,
            info_url: "http://www.af.mil",
            wiki_url: "http://en.wikipedia.org/wiki/United_States_Air_Force",
            logo_url: null,
            image_url: null,
            nation_url: null,
          },
          program: [],
          variant: "LV-3 Agena B",
          alias: "",
          min_stage: null,
          max_stage: null,
          length: 20.27,
          diameter: 3.05,
          maiden_flight: null,
          launch_cost: "$14.21M",
          launch_mass: 130,
          leo_capacity: null,
          gto_capacity: null,
          to_thrust: 363,
          apogee: null,
          vehicle_range: null,
          image_url: null,
          info_url: "http://www.astronautix.com/a/atlasagenalv-3a.html",
          wiki_url: null,
          total_launch_count: 8,
          consecutive_successful_launches: 0,
          successful_launches: 3,
          failed_launches: 5,
          pending_launches: 0,
        },
        launcher_stage: [],
        spacecraft_stage: null,
      },
      mission: null,
      pad: {
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
      },
      infoURLs: [],
      vidURLs: [],
      webcast_live: false,
      image: null,
      infographic: null,
      program: [],
      orbital_launch_attempt_count: null,
      location_launch_attempt_count: 1,
      pad_launch_attempt_count: 1,
      agency_launch_attempt_count: 1,
      orbital_launch_attempt_count_year: null,
      location_launch_attempt_count_year: 1,
      pad_launch_attempt_count_year: 1,
      agency_launch_attempt_count_year: 1,
      mission_patches: [],
    });
  }
  const data = prepareData();
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

function prepareData() {
  return dataAll.map((launch) => {
    return {
      id: launch.id,
      name: launch.name,
      status: launch.status
        ? {
            id: launch.status.id,
            name: launch.status.name,
          }
        : undefined,
      net: launch.net,
      hashtag: launch.hashtag,
      launch_service_provider: launch.launch_service_provider
        ? {
            id: launch.launch_service_provider.id,
            name: launch.launch_service_provider.name,
            abbrev: launch.launch_service_provider.abbrev,
            logo_url: launch.launch_service_provider.logo_url,
            image_url: launch.launch_service_provider.image_url,
            nation_url: launch.launch_service_provider.nation_url,
          }
        : undefined,
      rocket: launch.rocket
        ? {
            configuration: launch.rocket.configuration
              ? {
                  id: launch.rocket.configuration.id,
                  name: launch.rocket.configuration.name,
                  family: launch.rocket.configuration.family,
                  full_name: launch.rocket.configuration.full_name,
                }
              : undefined,
            spacecraft_stage: launch.rocket.spacecraft_stage
              ? {
                  launch_crew: launch.rocket.spacecraft_stage.launch_crew
                    ? launch.rocket.spacecraft_stage.launch_crew.map(
                        (crewMember) => {
                          return {
                            id: crewMember.id,
                            role: crewMember.role
                              ? {
                                  id: crewMember.role.id,
                                  role: crewMember.role.role,
                                }
                              : undefined,
                            astronaut: crewMember.astronaut
                              ? {
                                  id: crewMember.astronaut.id,
                                  name: crewMember.astronaut.name,
                                  status: crewMember.astronaut.status
                                    ? {
                                        id: crewMember.astronaut.status.id,
                                        name: crewMember.astronaut.status.name,
                                      }
                                    : undefined,
                                  date_of_birth:
                                    crewMember.astronaut.date_of_birth,
                                  date_of_death:
                                    crewMember.astronaut.date_of_death,
                                  nationality: crewMember.astronaut.nationality,
                                }
                              : undefined,
                          };
                        }
                      )
                    : undefined,
                }
              : undefined,
          }
        : undefined,
      mission: launch.mission
        ? {
            id: launch.mission.id,
            name: launch.mission.name,
            description: launch.mission.description,
            type: launch.mission.type,
          }
        : undefined,
      pad: launch.pad
        ? {
            id: launch.pad.id,
            name: launch.pad.name,
            location: launch.pad.location
              ? {
                  id: launch.pad.location.id,
                  name: launch.pad.location,
                }
              : undefined,
            map_image: launch.pad.map_image,
          }
        : undefined,
      vidURLs: launch.vidURLs,
      image: launch.image,
      infographic: launch.infographic,
    };
  });
}
let path = "launch/previous";
let dir = "src/app/data/";
let fileName = "previouslaunches";
let offset = process.argv[2];
let step = process.argv[3];
let max = +offset + +step;

console.log({ path, fileName, offset, step, max });
persistData();
