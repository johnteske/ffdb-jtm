const { promises: fs } = require("fs");
const path = require("path");

const directoryPath = (dataType) => path.join(__dirname, "data", dataType);

async function getData(subdir) {
  // read directory
  const dir = directoryPath(subdir);
  const contents = await fs.readdir(dir, { withFileTypes: true });

  // filter for files only
  const filenames = contents
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

  // read and parse JSON
  return await Promise.all(
    filenames.map(async (filename) => {
      const filepath = path.join(dir, filename);
      const content = JSON.parse(await fs.readFile(filepath, "utf-8"));
      return { content, filename };
    })
  );
}

module.exports = getData;
