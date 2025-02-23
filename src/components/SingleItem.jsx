import React from "react";
import style from "./styles/Main.module.css";
import { FaPlayCircle } from "react-icons/fa";

const SingleItem = () => {
  return (
    <div className={style.singleItem}>
      <div className={style.itemList__div_image_button}>
        <div className={style.itemList__div_image}>
          <img
            className={style.singleItem__image}
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt="Imagem do artista X"
          />
        </div>
        <FaPlayCircle className={style.singleItem__icon} />
      </div>

      <div className={style.singleItem__text}>
        <p className={style.singleItem__title}>Henrique & Juliano</p>
        <p className={style.singleItem__type}>Artista</p>
      </div>
    </div>
  );
};

export default SingleItem;
