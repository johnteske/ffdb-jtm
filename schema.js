const { JsonDecoder } = require("ts.data.json");

const performances = JsonDecoder.objectStrict(
  {
    date: JsonDecoder.string,
    endDate: JsonDecoder.optional(JsonDecoder.string),
    title: JsonDecoder.string,
    time: JsonDecoder.optional(JsonDecoder.string),
    short: JsonDecoder.optional(JsonDecoder.string),
    long: JsonDecoder.optional(JsonDecoder.string),
    price: JsonDecoder.optional(JsonDecoder.string),
    address: JsonDecoder.optional(JsonDecoder.string),
    url: JsonDecoder.optional(JsonDecoder.string),
    tags: JsonDecoder.optional(JsonDecoder.array(JsonDecoder.string, "TODO")),
    works: JsonDecoder.optional(JsonDecoder.array(JsonDecoder.string, "TODO")),
  },
  "Performance"
);

module.exports = {
  performances,
};
