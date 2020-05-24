const { JsonDecoder: jd, ok, err } = require("ts.data.json");

const stringWithLength = (len) =>
  new jd.Decoder((str) => {
    if (str.length === len) {
      return ok(str);
    } else {
      return err(`string is not ${len}`);
    }
  });

const performance = jd.objectStrict(
  {
    date: stringWithLength(8),
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

const recording = jd.objectStrict(
  {
    url: jd.optional(jd.string),
  },
  "Recording"
);

module.exports = {
  performance,
  recording,
};
