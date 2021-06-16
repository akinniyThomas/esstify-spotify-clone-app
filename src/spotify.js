const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "c1c81305b11a428a9e3ff47276cdd597";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// http://localhost:3000/#access_token=BQBm-TrP9oo8MnMFXArUk-BQ7e90bG11YwCdlSA7rMm_139wb30X9sb7iKY3MnZckVwkY_cOGe13j9reEQFTBKaPW4M2SVgBrS6DyDWjDPH76XEjA07ucSGaU0R4Z_JPK0s2oGpRzCS5Mpec7VwpZj-068looQ4&token_type=Bearer&expires_in=3600
export const getTokenFromResponse = () => {
  //   console.log(window.location.hash);
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      //   console.log(initial);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scpoe=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
