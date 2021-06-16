import React from "react";
import "./Login.css";
import spotifyLogo from "../assets/spotify2019-830x350.jpg";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img src={spotifyLogo} alt="spotify" />
      <a href={loginUrl}>LOGIN With Spotify</a>
    </div>
  );
}

export default Login;
