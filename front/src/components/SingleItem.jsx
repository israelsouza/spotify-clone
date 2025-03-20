import "../assets/css/singleItem.css";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, idPath, name, image, artist }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="singleItem">
      <div className="itemList__div_image_button">
        <div className="itemList__div_image">
          <img
            className="singleItem__image"
            src={image}
            alt={`Imagem do artista ${name}`}
          />
        </div>
        <FaPlayCircle className="singleItem__icon" />
      </div>

      <div className="singleItem__text">
        <div className="single-item__two-lines">
          <p className="singleItem__title">{name}</p>
        </div>
        <p className="singleItem__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
