import { getDataFrom } from "ffdb";
const getData = getDataFrom("data");

import { Show, Recording } from "./schema";

export async function getShows() {
  const show = await getData<Show>("performances");
  return show.map((d) => ({
    ...d.content,
    date: "20" + d.filename.split("-")[0],
  }));
}

export async function getRecordings() {
  const recordings = await getData<Recording>("recordings");
  return recordings.map((d) => ({
    ...d.content,
    releaseDate: d.filename.split("-")[0],
  }));
}
