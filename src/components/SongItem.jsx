import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/song_item.css'

const SongItem = ({image, name, duration, id, index}) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index+1}</p>

        <div className="song-iten__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da musica ${name}`}
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
