import "./App.css";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify";

function App() {
  const [token, setToken] = useState([]);
  useEffect(() => {
    const tokenHash = getTokenFromResponse();
    window.location.hash = "";
    // console.log(token);
    const _token = tokenHash.access_token;
    if (_token) setToken(_token);
    return () => {};
  }, [token]);

  return (
    <div className="app">
      {/* <h1>Building the spotify app clone </h1> */}
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <Login />
    </div>
  );
}

export default App;
