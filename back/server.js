import express from "express";
import cors from "cors";
import { db } from "./src/api/connect.js";

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send("Olá, mundo, com configuração do watch!!!!!!!!!!!!!!!");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static("../front/dist"));

app.get("*", async (request, response) => {
  response.sendFile(express.static("../front/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server escutando na porta ${PORT}`);
});
