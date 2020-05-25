const getData = require("./get-data");

async function getPerformances() {
  const performances = await getData("performances");
  return performances.map((d) => ({
    ...d.content,
    date: "20" + d.filename.split("-")[0],
  }));
}

async function getRecordings() {
  const recordings = await getData("recordings");
  return recordings.map((d) => ({
    ...d.content,
    releaseDate: d.filename.split("-")[0],
  }));
}

module.exports = {
  getPerformances,
  getRecordings,
};
