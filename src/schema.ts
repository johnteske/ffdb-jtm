import { JsonDecoder as jd, ok, err } from "ts.data.json";

const stringWithLength = (len: number): jd.Decoder<string> =>
  new jd.Decoder((str: string) => {
    if (str.length === len) {
      return ok(str);
    } else {
      return err(`string is not ${len}`);
    }
  });

// avoid collision with "performance"
export type Show = {
  date: string;
  endDate?: string;
  title: string;
  time?: string;
  short?: string;
  long?: string;
  price?: string;
  address?: string;
  url?: string;
  tags?: string[];
  works?: string[];
};

export const show = jd.objectStrict<Show>(
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
  "Show"
);

export type Recording = {
  releaseDate: string;
  title: string;
  artist: string;
  urls?: string[];
  works?: string[];
};

export const recording = jd.objectStrict<Recording>(
  {
    releaseDate: stringWithLength(4),
    title: jd.string,
    artist: jd.string,
    urls: jd.optional(jd.array(jd.string, "urls")),
    works: jd.optional(jd.array(jd.string, "works")),
  },
  "Recording"
);
