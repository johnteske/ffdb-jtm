const test = require("tape-promise/tape");

const { getPerformances } = require("./index");

test("getPerformances", async (t) => {
  // getter
  await t.doesNotReject(getPerformances);

  // TODO full schema test
  const performances = await getPerformances();
  const first = performances[0]
  t.equal(first.date.length, 8);
});
