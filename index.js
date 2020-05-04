const { promises: fs } = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "data/performances");

async function getPerformances() {
  const contents = await fs.readdir(directoryPath, { withFileTypes: true });

  const filenames = contents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  return await Promise.all(
    filenames.map(async (filename) => {
      const filepath = path.join(directoryPath, filename);
      const contents = JSON.parse(await fs.readFile(filepath, "utf-8"));
      return { ...contents, date: "20" + filename.split("-")[0] };
    })
  );
}

module.exports = {
  getPerformances,
};
