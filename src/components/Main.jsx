import React from "react";
import style from "./styles/Main.module.css";
import { FaPlayCircle } from "react-icons/fa";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.itemList}>
        <div className={style.itemList__header}>
          <h2>Artistas populares</h2>
          <a className={style.main__link} href="/">
            Mostrar tudo
          </a>
        </div>

        <div className={style.itemList__container}>
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
        </div>

        <div className={style.itemList__header}>
          <h2>Musicas populares</h2>
          <a className={style.main__link} href="/">
            Mostrar tudo
          </a>
        </div>

        <div className={style.itemList__container}>
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


          
        </div>
      </div>
    </div>
  );
};

export default Main;
