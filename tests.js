const test = require("tape-promise/tape");

const { getPerformances } = require("./index");

test("timing test", async (t) => {
  await t.doesNotReject(getPerformances);
});
