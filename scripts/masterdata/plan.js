let https = require("https");
let fs = require("fs");

const BASE = "https://ll.thespacedevs.com/2.2.0/";
const CHUNK = 500;

// API list endpoint per type (used to read `count`).
const API_PATH = {
  rockets: "config/launcher",
  spacestations: "spacestation",
  agencies: "agencies",
  spacecrafts: "config/spacecraft",
  pads: "pad",
  locations: "location",
  previousevents: "event/previous",
  astronauts: "astronaut",
  previouslaunches: "launch/previous",
  launches: "launch",
};

// How to invoke the fetch script for each type.
const SCRIPT = {
  rockets: ["scripts/masterdata/fetch.js", "config/launcher rockets"],
  spacestations: ["scripts/masterdata/fetch.js", "spacestation spacestations"],
  agencies: ["scripts/masterdata/fetch.js", "agencies agencies"],
  spacecrafts: ["scripts/masterdata/fetch.js", "config/spacecraft spacecrafts"],
  pads: ["scripts/masterdata/fetch.js", "pad pads"],
  locations: ["scripts/masterdata/fetch.js", "location locations"],
  previousevents: ["scripts/masterdata/fetch.js", "event/previous previousevents"],
  astronauts: ["scripts/masterdata/fetchAstronaut.js", ""],
  previouslaunches: ["scripts/masterdata/fetchPreviousLaunches.js", ""],
  launches: ["scripts/fetchLaunches.js", ""],
};

function getCount(path) {
  return new Promise((resolve) => {
    https
      .get(BASE + path + "/?format=json&limit=1", (resp) => {
        let data = "";
        resp.on("data", (c) => (data += c));
        resp.on("end", () => {
          try {
            resolve(JSON.parse(data).count || 0);
          } catch (e) {
            resolve(0);
          }
        });
      })
      .on("error", () => resolve(0));
  });
}

(async () => {
  const matrix = [];
  const merges = {};
  for (const entity of Object.keys(API_PATH)) {
    const count = await getCount(API_PATH[entity]);
    const [script, args] = SCRIPT[entity];
    const offsets = [];
    for (let o = 0; o < count; o += CHUNK) offsets.push(o);
    if (offsets.length === 0) offsets.push(0);
    for (const o of offsets) {
      matrix.push({ entity: entity, offset: o, script: script, args: args });
    }
    merges[entity] =
      entity === "launches"
        ? "node scripts/mergeLaunches.js " + count + " " + CHUNK
        : "node scripts/masterdata/merge.js " + entity + " " + count + " " + CHUNK;
  }
  const out = process.env.GITHUB_OUTPUT;
  fs.appendFileSync(out, "matrix=" + JSON.stringify(matrix) + "\n");
  fs.appendFileSync(out, "merges=" + JSON.stringify(merges) + "\n");
  fs.appendFileSync(
    out,
    "entities=" + JSON.stringify(Object.keys(API_PATH)) + "\n"
  );
})();
