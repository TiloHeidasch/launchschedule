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
requestUrlAndPersistToFile(
  "https://lldev.thespacedevs.com/2.2.0/" +
    path +
    "?format=json&limit=100&mode=detailed&offset=" +
    offset
);
