import React from 'react'
import logoSpotify from '../assets/logo/spotify-logo.png'

const Header = () => {
  return (
    <div>
        <img src={logoSpotify} alt='' />

        <a href='' target=''>
            <h1>
                Spotify
            </h1>
        </a>
    </div>
  )
}

export default Header