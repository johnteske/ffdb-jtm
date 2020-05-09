const test = require("tape-promise/tape");

const { getPerformances } = require("./index");
const schema = require("./schema");

test("getPerformances", async (t) => {
  // getter
  await t.doesNotReject(getPerformances);

  // TODO full schema test
  const performances = await getPerformances();
  const first = performances[0];
  t.equal(first.date.length, 8);

  t.assert(
    performances.every((p) => schema.performances.decode(p).isOk()),
    "schema"
  );
});
