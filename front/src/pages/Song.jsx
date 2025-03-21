import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { name, duration, image, artist, audio } = songsArray.filter(
    (currSongObj) => currSongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currValue, index) => currValue.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndexTwo = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  const randomIdFromArtistTwo = songsArrayFromArtist[randomIndexTwo]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da musica ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
            width={"75px"}
            height={"75px"}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomIdFromArtistTwo={randomIdFromArtistTwo}
          audio={audio}
        />

        <div className="song__info">
          <p className="song__name">{name}</p>
          <p className="song__artist">{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
