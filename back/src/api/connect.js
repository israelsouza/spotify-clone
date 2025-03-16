import { MongoClient } from "mongodb";

const URL =
  "mongodb+srv://rael-ceo:israel-ceo@spotifyproject.os6az.mongodb.net/?retryWrites=true&w=majority&appName=SpotifyProject";

const client = new MongoClient(URL);

export const db = client.db("spotifyaula");

// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
