import React, { useState, useEffect } from "react";
import "./Body.css";
import { useDataLayerValue } from "../DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import TimeLapseIcon from "@material-ui/icons/Timelapse";

function Body() {
  const [{ selectedPlaylistId, user, spotify }] = useDataLayerValue();
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [time, setTime] = useState();

  useEffect(() => {
    spotify.getPlaylist(selectedPlaylistId).then((response) => {
      setSelectedPlaylist(response);
      // console.log("response::::", response);
    });

    let totalTime = selectedPlaylist?.tracks?.items?.reduce(
      (sum, item) => sum + item?.track?.duration_ms,
      0
    );
    // console.log(totalTime);
    let hours = Number.parseInt(totalTime / 3600000);
    let mins = totalTime / 3600000 - hours;
    mins *= 60;
    mins = Number.parseInt(mins);
    let _time = `${selectedPlaylist?.tracks?.items.length} songs, ${hours} hr ${mins} mins`;
    setTime(_time);
  }, [selectedPlaylistId]);

  const getFontSize = (textLength) => {
    const baseSize = 10;
    if (textLength >= baseSize) {
      textLength = baseSize - 2;
    }
    let fontSize = baseSize - textLength;
    fontSize *= 25;
    return fontSize;
  };

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        {
          <img
            src={selectedPlaylist?.images[0]?.url}
            /*src={spotifyLogo}*/ alt={selectedPlaylist?.name}
          ></img>
        }
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2 style={{ fontSize: getFontSize(selectedPlaylist?.name.length) }}>
            {selectedPlaylist?.name}
          </h2>
          <p>{selectedPlaylist?.description}</p>
          <div className="body__infoText__songs">
            <p>{user?.display_name}</p>
            <em className="body__infoText__songs__dot"> </em>
            <p className="body__infoText__songs__grayColor">{time}</p>
          </div>
        </div>
      </div>
      <div className="body__icons">
        <PlayCircleFilledIcon
          fontSize="inherit"
          className="body__icon body__green"
        />
        <FavoriteIcon fontSize="large" className="body__icon" />
        <MoreHorizIcon fontSize="large" className="body__icon" />
      </div>
      <div className="body__songs">
        {/* <SongRow playlist={selectedPlaylist} /> */}
        <table className="body__songs__table">
          <tr className="body_songs_tableHeader">
            <th>#</th>
            <th>TITLE</th>
            <th></th>
            <th>ALBUM</th>
            <th>{<TimeLapseIcon />}</th>
          </tr>

          {selectedPlaylist?.tracks?.items.map((playlist) => (
            <SongRow track={playlist?.track} name={selectedPlaylist.name} />
            // <SongRo
          ))}
        </table>
      </div>
    </div>
  );
}

export default Body;
