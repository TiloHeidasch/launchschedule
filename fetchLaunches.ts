var https = require("https");
var fs = require("fs");

var dataAll = [];
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
      if (err) return console.log(err);
      console.log(process.argv[1] + " wrote file");
      dataAll = [];
    }
  );
}

function prepareData() {
  return dataAll.map((launch) => {
    return {
      name: launch.name,
      net: launch.net,
      launch_service_provider__name: launch.launch_service_provider
        ? launch.launch_service_provider.name
        : "",
      launch_service_provider__type:
        launch.launch_service_provider && launch.launch_service_provider.type
          ? launch.launch_service_provider.type
          : "",
      rocket__configuration__full_name:
        launch.rocket && launch.rocket.configuration
          ? launch.rocket.configuration.full_name
          : "",
      rocket__configuration__family:
        launch.rocket && launch.rocket.configuration
          ? launch.rocket.configuration.family
          : "",
      rocket__spacecraft_stage__spacecraft__spacecraft_config__name:
        launch.rocket &&
        launch.rocket.spacecraft_stage &&
        launch.rocket.spacecraft_stage.spacecraft &&
        launch.rocket.spacecraft_stage.spacecraft.spacecraft_config
          ? launch.rocket.spacecraft_stage.spacecraft.spacecraft_config.name
          : "",
    };
  });
}
var path = "launch";
var dir = "src/app/data/";
var fileName = "launches";
var offset = process.argv[2];
var step = process.argv[3];
var max = +offset + +step;

requestUrlAndPersistToFile(
  "https://lldev.thespacedevs.com/2.0.0/" +
    path +
    "/?format=json&limit=100&mode=detailed&offset=" +
    offset
);
