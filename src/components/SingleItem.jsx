import React from "react";
import style from "./styles/Main.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleItem = ({ id, idPath, name, image, artist }) => {
  return (
    <Link to={`${idPath}/${id}`} className={style.singleItem}>
      <div className={style.itemList__div_image_button}>
        <div className={style.itemList__div_image}>
          <img
            className={style.singleItem__image}
            src={image}
            alt={`Imagem do artista ${name}`}
          />
        </div>
        <FaPlayCircle className={style.singleItem__icon} />
      </div>

      <div className={style.singleItem__text}>
        <p className={style.singleItem__title}>{name}</p>
        <p className={style.singleItem__type}>{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
