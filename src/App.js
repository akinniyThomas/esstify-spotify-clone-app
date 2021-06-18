import "./App.css";
import Login from "./Components/Login";
import { useEffect } from "react";
import { getTokenFromResponse } from "./spotify";
import Player from "./Components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ playlists, token }, dispatch] = useDataLayerValue();

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
      dispatch({
        type: "SET_SPOTIFY",
        spotify,
      });
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("the playlists here: ", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
    // return () => {};
  }, []);

  return (
    <div className="app">
      {console.log("playlists::::", playlists)}
      {console.log("token::", token)}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
