import React from "react";
import SingleItem from "./SingleItem";
import style from "./styles/Main.module.css";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemArray, path, idPath }) => {
  return (
    <div className={style.itemList}>
      <div className={style.itemList__header}>
        <h2>{title} populares</h2>
        <Link to={path} className={style.main__link} >
          Mostrar tudo
        </Link>
      </div>

      <div className={style.itemList__container}>
        {itemArray
          .filter((currValue, index) => index < items)
          .map((currentValue, index) => {
            return (
              <SingleItem
                key={`${title}-${index}`}
                {...currentValue}
                idPath={idPath}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
