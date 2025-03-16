import express from "express";
import { artistArray } from "../front/src/assets/database/artists.js";
import { songsArray } from "../front/src/assets/database/songs.js";

const app = express();
const PORT = 3001;

app.get("/", (request, response) => {
  response.send("Olá, mundo, com configuração do watch!!!!!!!!!!!!!!!");
});

app.get("/artists", (request, response) => {
  response.send(artistArray);
});

app.get("/songs", (request, response) => {
  response.send(songsArray);
});

app.listen(PORT, () => {
  console.log(`Server escutando na porta ${PORT}`);
});
