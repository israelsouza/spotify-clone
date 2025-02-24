import React from "react";
import SingleItem from "./SingleItem";
import style from "./styles/Main.module.css";
import { artistArray } from "../assets/database/artists";

const ItemList = ({ title, items }) => {
  return (
    <div className={style.itemList}>
      <div className={style.itemList__header}>
        <h2>{title} populares</h2>
        <a className={style.main__link} href="/">
          Mostrar tudo
        </a>
      </div>

      <div className={style.itemList__container}>
        {artistArray
          .filter((currValue, index) => index < items)
          .map((currentValue, index) => {
            return (
              <SingleItem
                key={`${title}-${index}`}
                {...currentValue}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
