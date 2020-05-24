const { promises: fs } = require("fs");
const path = require("path");

const directoryPath = (dataType) => path.join(__dirname, "data", dataType);

async function getPerformances() {
  const dir = directoryPath("performances");
  const contents = await fs.readdir(dir, { withFileTypes: true });

  const filenames = contents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  return await Promise.all(
    filenames.map(async (filename) => {
      const filepath = path.join(dir, filename);
      const contents = JSON.parse(await fs.readFile(filepath, "utf-8"));
      return { ...contents, date: "20" + filename.split("-")[0] };
    })
  );
}

async function getRecordings() {
  const dir = directoryPath("recordings");
  const contents = await fs.readdir(dir, { withFileTypes: true });

  const filenames = contents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  // all above is duplicated

  return await Promise.all(
    filenames.map(async (filename) => {
      const filepath = path.join(dir, filename);
      const contents = JSON.parse(await fs.readFile(filepath, "utf-8"));
      return contents;
    })
  );
}

module.exports = {
  getPerformances,
  getRecordings,
};
