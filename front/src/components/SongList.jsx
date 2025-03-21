import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ listSongsFromArtist }) => {
  // let items = 5;
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {listSongsFromArtist
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} key={index} index={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
