import { use, useRef, useState, useEffect } from "react";
import React from "react";
import {
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoPlayCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import "../assets/css/player.css";

const formatType = (timeInSecunds) => {
  const minutes = Math.floor(timeInSecunds / 60)    .toString()    .padStart(2, "0");
  const secunds = Math.floor(timeInSecunds - minutes * 60)    .toString()    .padStart(2, "0");

  return `${minutes}:${secunds}`;
};

const timeInSecund = (timeString) => {
  const splitArray = timeString.split(':')
  const minutes = Number(splitArray[0])
  const secunds = Number(splitArray[1])

  return secunds + minutes * 60
}

const Player = ({  duration,  randomIdFromArtist,  randomIdFromArtistTwo,  audio,}) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatType(0));

  const durationInSecunds = timeInSecund(duration)

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatType(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty( "--_progress", ( audioPlayer.current.currentTime / durationInSecunds) * 100  + '%' )
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <IoPlaySkipBackOutline className="player__icon" />
        </Link>

        {/* LOGICA PARA DAR DISPLAY NONE E DISPLAY BLOCK */}
        <IoPlayCircleOutline
          className="player__icon player__icon--play"
          // icon={isPlaying ? IoPauseCircleOutline : IoPlayCircleOutline}
          // esse atributo nao funciona com react-icons, fzr logica manualmente
          onClick={() => playPause()}
        />

        <Link to={`/song/${randomIdFromArtistTwo}`}>
          <IoPlaySkipForwardOutline className="player__icon" />
        </Link>
      </div>

      <div className="player__progress">
        <p className="player__time">{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p className="player__time">{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
