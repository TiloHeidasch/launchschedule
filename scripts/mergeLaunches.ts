let fs = require("fs");

let dataAll = [];

function readData() {
  for (let index = 0; index < +maximum; index += +steps) {
    fs.readFile(dir + fileName + index + ".json", "utf8", function (err, data) {
      // Display the file content
      dataAll.push(...JSON.parse(data));
      console.log(dataAll.length);

      // save when enough data
      if (dataAll.length > +maximum - +steps) {
        saveData();
      }
    });
  }
}

function saveData() {
  if (!fs.existsSync(dir)) {
    console.log(process.argv[1] + " creating directory");
    fs.mkdirSync(dir);
  }
  console.log(process.argv[1] + " writing file");
  fs.writeFile(
    dir + fileName + ".json",
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

let dir = "src/app/data/";
let fileName = "launches";
let maximum = process.argv[2];
let steps = process.argv[3];
readData();
