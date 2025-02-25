import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import style from "./styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.header}>
      <img src={logoSpotify} alt="logo do spotify" />

      <Link to="/" className={style.header__link}>
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
