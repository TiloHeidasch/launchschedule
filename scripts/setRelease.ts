import * as fs from "fs";

const [, , versionCode, versionName, track] = process.argv;

if (!versionCode || versionName === undefined || track === undefined) {
  console.error("Usage: setRelease.ts <versionCode> <versionName> <track>");
  process.exit(1);
}

const file = "src/environments/environment.prod.ts";
let content = fs.readFileSync(file, "utf8");

content = content.replace(/versionCode:\s*[^\n,]+,/, `versionCode: ${versionCode},`);
content = content.replace(/versionName:\s*"[^"]*",/, `versionName: "${versionName}",`);
content = content.replace(/track:\s*"[^"]*"/, `track: "${track}"`);

fs.writeFileSync(file, content);
console.log(`Set versionCode=${versionCode} versionName=${versionName} track=${track}`);
