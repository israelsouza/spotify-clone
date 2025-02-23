import React from "react";
import SingleItem from "./SingleItem";
import style from "./styles/Main.module.css";

const ItemList = () => {
  return (
    <div className={style.itemList}>
      <div className={style.itemList__header}>
        <h2>Artistas populares</h2>
        <a className={style.main__link} href="/">
          Mostrar tudo
        </a>
      </div>

      <div className={style.itemList__container}>
        <SingleItem />

        <SingleItem />

        <SingleItem />

        <SingleItem />
      </div>
    </div>
  );
};

export default ItemList;
