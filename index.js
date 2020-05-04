const fs = require("fs");
const path = require("path");

var directoryPath = path.join(__dirname, "data/performances");

function getPerformances() {
  fs.readdir(directoryPath, { withFileTypes: true }, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files
      .filter((dirent) => dirent.isFile())
      .map((dirent) => dirent.name)
      .forEach((f) => readFile(path.join(directoryPath, f)));
  });
}

function readFile(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    return data;
  });
}

module.exports = {
  getPerformances,
};
