import express from "express";
import { db } from "./src/api/connect.js";

const app = express();
const PORT = 3001;

app.get("/", (request, response) => {
  response.send("Olá, mundo, com configuração do watch!!!!!!!!!!!!!!!");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Server escutando na porta ${PORT}`);
});
