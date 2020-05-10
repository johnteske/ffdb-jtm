const { JsonDecoder: jd } = require("ts.data.json");

const performances = jd.objectStrict(
  {
    date: jd.string,
    endDate: jd.optional(jd.string),
    title: jd.string,
    time: jd.optional(jd.string),
    short: jd.optional(jd.string),
    long: jd.optional(jd.string),
    price: jd.optional(jd.string),
    address: jd.optional(jd.string),
    url: jd.optional(jd.string),
    tags: jd.optional(jd.array(jd.string, "tags")),
    works: jd.optional(jd.array(jd.string, "works")),
  },
  "Performance"
);

module.exports = {
  performances,
};
