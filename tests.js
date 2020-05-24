const test = require("tape-promise/tape");

const { getPerformances, getRecordings } = require("./index");
const schema = require("./schema");

test("getPerformances", async (t) => {
  const performances = await getPerformances();
  t.assert(
    performances.every((p) => schema.performance.decode(p).isOk()),
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
