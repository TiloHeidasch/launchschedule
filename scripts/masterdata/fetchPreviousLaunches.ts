let https = require("https");
let fs = require("fs");

let dataAll = [];
function requestUrlAndPersistToFile(url) {
  console.log(process.argv[1] + " requesting " + url);

  https
    .get(url, (resp) => {
      let data = "";

      // A chunk of data has been recieved.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        const recieved = JSON.parse(data);
        dataAll = dataAll.concat(recieved.results);
        console.log(
          process.argv[1] + " recieved " + recieved.results.length + " records"
        );
        console.log(process.argv[1] + " dataAll.length " + dataAll.length);
        if (recieved.next && recieved.next.search("offset=" + max) == -1) {
          requestUrlAndPersistToFile(recieved.next);
        } else {
          persistData();
        }
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
}
function persistData() {
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
requestUrlAndPersistToFile(
  "https://ll.thespacedevs.com/2.2.0/" +
    path +
    "/?format=json&limit=50&mode=detailed&offset=" +
    offset
);
