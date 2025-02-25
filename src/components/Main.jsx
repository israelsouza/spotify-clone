import React from "react";
import style from "./styles/Main.module.css";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className={style.main}>
      <ItemList
        title="Artistas"
        items={5}
        itemArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
      <ItemList
        title="Músicas"
        items={10}
        itemArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
