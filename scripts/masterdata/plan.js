let https = require("https");
let fs = require("fs");

const BASE = "https://ll.thespacedevs.com/2.3.0/";
const CHUNK = 500;

// API list endpoint per type (used to read `count`).
const API_PATH = {
  rockets: "launcher_configurations",
  spacestations: "space_stations",
  agencies: "agencies",
  spacecrafts: "spacecraft_configurations",
  pads: "pads",
  locations: "locations",
  previousevents: "events/previous",
  astronauts: "astronauts",
  previouslaunches: "launches/previous",
  launches: "launches",
};

// How to invoke the fetch script for each type.
const SCRIPT = {
  rockets: ["scripts/masterdata/fetch.js", "launcher_configurations rockets"],
  spacestations: ["scripts/masterdata/fetch.js", "space_stations spacestations"],
  agencies: ["scripts/masterdata/fetch.js", "agencies agencies"],
  spacecrafts: ["scripts/masterdata/fetch.js", "spacecraft_configurations spacecrafts"],
  pads: ["scripts/masterdata/fetch.js", "pads pads"],
  locations: ["scripts/masterdata/fetch.js", "locations locations"],
  previousevents: ["scripts/masterdata/fetch.js", "events/previous previousevents"],
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
