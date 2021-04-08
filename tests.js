const test = require("tape-promise/tape");

const { getShows, getRecordings } = require("./dist");
const schema = require("./dist/schema");

test("getShows", async (t) => {
  const shows = await getShows();
  t.assert(
    shows.every((p) => schema.show.decode(p).isOk()),
    "schema"
  );
});

test("getRecordings", async (t) => {
  const recordings = await getRecordings();
  t.assert(
    recordings.every((p) => schema.recording.decode(p).isOk()),
    "schema"
  );
});
