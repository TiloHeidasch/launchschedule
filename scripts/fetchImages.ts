let https = require("https");
var request = require("sync-request");
let fs = require("fs");

const type = process.argv[2];
const inputFile = process.argv[3];
const outputFile = process.argv[4];
const dayRetentionThreshold = +process.argv[5];
const keys = parseKeys();

const imageFolder = "assets/" + type + "/";
const threshold = dayRetentionThreshold * 24 * 60 * 60 * 1000;

console.log({
  type,
  inputFile,
  outputFile,
  dayRetentionThreshold,
  keys,
  imageFolder,
  threshold,
});

function parseKeys() {
  const retVal = [];
  for (let index = 6; index < process.argv.length; index++) {
    const argument = process.argv[index];
    retVal.push(argument);
  }
  return retVal;
}

function downloadImage(url, filepath) {
  console.log(process.argv[1] + " downloading " + url);
  const res = request("GET", url).getBody();
  console.log(process.argv[1] + " downloaded " + url);
  fs.writeFileSync(filepath, res);
  console.log(process.argv[1] + " wrote File " + filepath);
}

function createRequiredFolders() {
  const folders = imageFolder.split("/");
  let folderStructure = "";
  for (let index = 0; index < folders.length; index++) {
    const folder = folders[index];
    folderStructure += folder + "/";
    createFolder(folderStructure);
  }
}

function createFolder(path) {
  if (!fs.existsSync(path)) {
    console.log(process.argv[1] + " creating directory for " + path);
    fs.mkdirSync(path);
  }
}

function readFileContents(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}
function doesFileExist(path) {
  return fs.existsSync(path);
}
function printProgeress(current, total) {
  const progressElements = 43;
  let progress = "[";
  for (let index = 0; index < progressElements; index++) {
    if (current / total >= index / progressElements) {
      progress += "■";
    } else {
      progress += "-";
    }
  }
  progress += "]";
  progress += " - " + current + "/" + total;
  console.log(process.argv[1] + " " + progress);
}

function downloadImageIfNecessary(entry, key) {
  if (!entry[key]) {
    return entry;
  }
  const newEntry = entry;
  const split = entry[key].split(".");
  const extension = split[split.length - 1];
  const imageOutputPath =
    imageFolder + type + "_" + entry.id + "_" + key + "." + extension;
  const imageDownloadPath = "src/" + imageOutputPath;
  if (doesFileExist(imageDownloadPath)) {
    console.log(process.argv[1] + " file exists: " + imageOutputPath);
    // exists
    // is it too old?
    const fileDate = getFileCreationDate(imageDownloadPath);
    const now = new Date();
    if (now.valueOf() - fileDate.valueOf() > threshold) {
      console.log(process.argv[1] + " file is too old: " + imageOutputPath);
      try {
        downloadImage(entry[key], imageDownloadPath);
      } catch (error) {
        console.log(
          process.argv[1] + " error in downloading: " + imageOutputPath
        );
        console.log(error);
        return entry;
      }
    }
  } else {
    console.log(process.argv[1] + " file does not exist: " + imageOutputPath);
    try {
      downloadImage(entry[key], imageDownloadPath);
    } catch (error) {
      console.log(
        process.argv[1] + " error in downloading: " + imageOutputPath
      );
      console.log(error);
      return entry;
    }
  }
  newEntry[key] = imageOutputPath;
  return newEntry;
}

function persistModifiedEntries(path, entries) {
  console.log(process.argv[1] + " writing file");
  fs.writeFileSync(path, JSON.stringify(entries));
  console.log(process.argv[1] + " wrote file");
}

function getFileCreationDate(path) {
  const stats = fs.statSync(path);
  return new Date(stats.mtime);
}

function fetchImages() {
  //readfile Inputfile
  //foreach entry in file
  //check if required file is already downloaded, if so: check if it is not too old
  //download and safe image
  //write outputfile
  createRequiredFolders();
  const modifiedEntries = [];
  const entries = readFileContents(inputFile);

  for (let entryNumber = 0; entryNumber < entries.length; entryNumber++) {
    printProgeress(entryNumber, entries.length);
    const entry = entries[entryNumber];
    let modifiedEntry = entry;
    for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
      const key = keys[keyIndex];
      modifiedEntry = downloadImageIfNecessary(modifiedEntry, key);
    }
    modifiedEntries.push(modifiedEntry);
  }
  persistModifiedEntries(outputFile, modifiedEntries);
}
fetchImages();
