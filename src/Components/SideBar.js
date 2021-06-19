import React from "react";
import "./SideBar.css";
import spotifyImage from "../assets/spotify2019-830x350.jpg";
import SideBarOption from "./SideBarOption";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import LibraryMusicSharpIcon from "@material-ui/icons/LibraryMusicSharp";
// import { PlaylistAdd } from "@material-ui/icons";
import { useDataLayerValue } from "../DataLayer";

function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="sidebar">
      <img src={spotifyImage} alt="Spotify" />
      <SideBarOption Icon={HomeSharpIcon} title="Home" />
      <SideBarOption Icon={SearchSharpIcon} title="Search" />
      <SideBarOption Icon={LibraryMusicSharpIcon} title="Your Library" />
      <br />
      <strong className="sidebar__playlist">PlayList</strong>
      <hr />
      {/* map through the playlist like this */}
      {/* {console.log(playlists)} */}
      {playlists?.items?.map((playlist) => (
        <SideBarOption id={playlist.id} title={truncate(playlist.name, 30)} />
      ))}
    </div>
  );
}

export default SideBar;
