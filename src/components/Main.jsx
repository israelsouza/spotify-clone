import React from "react";
import style from "./styles/Main.module.css";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className={style.main}>
      <ItemList />
      <ItemList />
    </div>
  );
};

export default Main;
