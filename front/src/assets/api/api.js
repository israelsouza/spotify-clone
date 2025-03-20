// FETCH ou AXIOS

import axios from "axios";

const url = "http://localhost:3001";

const endpointArtists = "/artists";
const endpointSongs = "/songs";

const responseArtists = await axios.get(`${url}${endpointArtists}`);
const responseSongs = await axios.get(`${url}${endpointSongs}`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

console.log(songsArray);
