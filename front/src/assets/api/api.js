// FETCH ou AXIOS

import axios from "axios";

const url = "https://spotify-clone-wyt4.onrender.com/api"; // "http://localhost:3001/api";

const endpointArtists = "/artists";
const endpointSongs = "/songs";

const responseArtists = await axios.get(`${url}${endpointArtists}`);
const responseSongs = await axios.get(`${url}${endpointSongs}`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
