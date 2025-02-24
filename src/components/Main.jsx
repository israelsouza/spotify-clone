import React from "react";
import style from "./styles/Main.module.css";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className={style.main}>
      <ItemList title="Artistas" items={5} />
      <ItemList title="Músicas" items={10}/>
    </div>
  );
};

export default Main;
