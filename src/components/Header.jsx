import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'
import style from './styles/Header.module.css'

const Header = () => {
  return (
    <div className={style.header}>
        <img src={logoSpotify} alt='logo do spotify' />

        <a className={style.header__link} href='/'>
            <h1>
                Spotify
            </h1>
        </a>
    </div>
  )
}

export default Header