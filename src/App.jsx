import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Song from "./pages/Song.jsx";
import Songs from "./pages/Songs.jsx";
import Artist from "./pages/Artist.jsx";
import Artists from "./pages/Artists.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/song/:id" element={<Song />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
