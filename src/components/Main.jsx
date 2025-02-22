import React from "react";
import style from "./styles/Main.module.css";
import { FaPlayCircle } from "react-icons/fa";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.itemList}>
        <div className={style.itemList__div_image_button}>
          <div className={style.itemList__header}>
            <h2>Artistas populares</h2>
            <a className={style.main__link} href="/">
              Mostrar tudo
            </a>
          </div>

          <div className={style.singleItem}>
            <img
              className={style.singleItem__image}
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt="Imagem do artista X"
            />
            <p>Henrique & Juliano</p>
            <p>Artista</p>
            <FaPlayCircle />
          </div>

          <div className={style.singleItem}>
            <img
              className={style.singleItem__image}
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt="Imagem do artista X"
            />
            <p>Henrique & Juliano</p>
            <p>Artista</p>
            <FaPlayCircle />
          </div>

          <div className={style.singleItem}>
            <img
              className={style.singleItem__image}
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt="Imagem do artista X"
            />
            <p>Henrique & Juliano</p>
            <p>Artista</p>
            <FaPlayCircle />
          </div>

          <div className={style.singleItem}>
            <img
              className={style.singleItem__image}
              src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
              alt="Imagem do artista X"
            />
            <p>Henrique & Juliano</p>
            <p>Artista</p>
            <FaPlayCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
