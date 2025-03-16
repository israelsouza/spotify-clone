import React from "react";
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoPlayCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import '../assets/css/player.css'

const Player = ({duration, randomIdFromArtist, randomIdFromArtistTwo}) => {
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <IoPlaySkipBackOutline  className="player__icon" />
        </Link>

        <IoPlayCircleOutline className="player__icon player__icon--play" />

        <Link to={`/song/${randomIdFromArtistTwo}`}>
          <IoPlaySkipForwardOutline className="player__icon" />
        </Link>
      </div>

      <div className="player__progress">
        <p className="player__time" >00:00</p>

        <div className="player__bar">
          <div className="player__bar-progress"></div>
        </div>

        <p className="player__time">{duration}</p>
      </div>
    </div>
  );
};

export default Player;
