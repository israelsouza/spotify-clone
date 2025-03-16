import { artistArray } from "../../../front/src/assets/database/artists.js";
import { songsArray } from "../../../front/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistsArray = artistArray.map((currValue) => {
  const newArtistsObj = { ...currValue };
  delete newArtistsObj.id;

  return newArtistsObj;
});

const newASongsArray = songsArray.map((currValue) => {
  const newSongsObj = { ...currValue };
  delete newSongsObj.id;

  return newSongsObj;
});

const responseSongs = await db.collection("songs").insertMany(newASongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistsArray);
