import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import useData from "./hooks/useData";
import { useTheme } from "./hooks/useTheme";

import Block from "./component/block/Block";

import Dashboard from "./layout/Dashboard";
import { getAlbums, getPlaylists } from "./services/api";

function App() {
  const { theme } = useTheme();
  const { isLoading, user } = useData("users");
  const [albums, setAlbums] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      navigate("/login");
      return;
    }
    getAlbums().then((res) => setAlbums(res.albums));
    getPlaylists().then((res) => setPlaylists(res.tracks.items));
  }, []);

  return (
    <div className={theme}>
      {isLoading ? "Loading..." : ""}
      <pre>
        {JSON.stringify({ user, id: localStorage.getItem("userId") }, null, 2)}
      </pre>
      <Dashboard>
        <Block musics={playlists} title={"Albums"} />
        <Block musics={playlists} title={"Playlists"} />
        <Block musics={playlists} title={"Categories"} />
      </Dashboard>
    </div>
  );
}

export default App;
