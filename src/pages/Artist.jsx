import "../assets/css/artist.css";
import React, { use } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { useParams } from "react-router-dom";

const Artist = () => {
  const { id } = useParams();

  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj.id === Number(id)
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );

  const randomIdSongFromArtist = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIndex = songsArrayFromArtist[randomIdSongFromArtist].id;

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name} </h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList listSongsFromArtist={songsArrayFromArtist} />
      </div>

      <Link className="single-item__icon--fixed" to={`/song/${randomIndex}`}>
        <FaPlayCircle />
      </Link>
    </div>
  );
};

export default Artist;
