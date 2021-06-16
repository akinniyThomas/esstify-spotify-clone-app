import "./App.css";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify";
import Player from "./Components/Player";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const tokenHash = getTokenFromResponse();
    window.location.hash = "";
    // console.log(token);
    const _token = tokenHash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("person", user);
      });
    }
    // return () => {};
  }, [token]);

  return (
    <div className="app">
      {console.log(token)}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
