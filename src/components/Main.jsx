import React from "react";
import style from "./styles/Main.module.css";
import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  console.log(type);
  return (
    <div className={style.main}>
      {type === "artists" || type === undefined ? (
        <>
          <ItemList
            title="Artistas"
            items={5}
            itemArray={artistArray}
            path="/artists"
            idPath="/artist"
          />
        </>
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas"
          items={10}
          itemArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
