let https = require("https");
let fs = require("fs");

let dataAll = [];
function requestUrlAndPersistToFile(url, iteration = 0) {
  console.log(process.argv[1] + " requesting " + url);
  try {
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
            process.argv[1] +
              " recieved " +
              recieved.results.length +
              " records"
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
  } catch (error) {
    iteration++;
    console.log(error);
    if (iteration <= 10) requestUrlAndPersistToFile(url, iteration);
  }
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
  return dataAll.map((astronaut) => {
    return {
      id: astronaut.id,
      name: astronaut.name,
      nationality: astronaut.nationality,
      date_of_birth: astronaut.date_of_birth,
      date_of_death: astronaut.date_of_death,
      bio: astronaut.bio,
      profile_image: astronaut.profile_image,
      profile_image_thumbnail: astronaut.profile_image_thumbnail,
      agency: astronaut.agency,
      flights: astronaut.flights.map((launch) => {
        return {
          id: launch.id,
          image: launch.image,
          name: launch.name,
          net: launch.net,
        };
      }),
      last_flight: astronaut.last_flight,
      first_flight: astronaut.first_flight,
    };
  });
}

let path = "astronaut";
let dir = "src/app/data/";
let fileName = "astronauts";
let offset = process.argv[2];
let step = process.argv[3];
let max = +offset + +step;

console.log({ path, fileName, offset, step, max });
requestUrlAndPersistToFile(
  "https://ll.thespacedevs.com/2.2.0/" +
    path +
    "/?format=json&limit=100&mode=detailed&offset=" +
    offset
);
