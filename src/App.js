import "./App.css";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify";
import Player from "./Components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const tokenHash = getTokenFromResponse();
    window.location.hash = "";
    // console.log(token);
    const _token = tokenHash.access_token;
    if (_token) {
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
    // return () => {};
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
