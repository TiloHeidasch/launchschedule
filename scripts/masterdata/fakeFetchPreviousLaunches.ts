let fs = require("fs");

let dataAll = [];
function persistData() {
  dataAll.push({"data"});
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

let path = "launch/previous";
let dir = "src/app/data/";
let fileName = "previouslaunches";
let offset = process.argv[2];
let step = process.argv[3];
let max = +offset + +step;

console.log({ path, fileName, offset, step, max });
persistData();
