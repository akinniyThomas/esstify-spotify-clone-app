import React from "react";
import "./SongRow.css";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Box from "@material-ui/core/Box";
import TimeLapseIcon from "@material-ui/icons/Timelapse";

function SongRow({ track, name }) {
  return (
    <tr className="songRow">
      <td>
        <Box className="songRow__connect">
          <SettingsInputAntennaIcon />
        </Box>
        <Box display="none" className="songRow__playArrow">
          <PlayArrowIcon />
        </Box>
      </td>
      <td>
        <img
          src={track?.album?.images[0].url}
          alt={name}
          className="songRow__img"
        />
      </td>
      <td>
        <div className="songRow__nameAndTitle">
          <h3>{track?.name}</h3>
          <p>{name}</p>
        </div>
      </td>
      <td>
        <p>{track?.album?.name}</p>
      </td>
      <td>
        <p>
          {Number.parseInt(track?.duration_ms / 60000)} :
          {Number.parseInt(
            (track?.duration_ms / 60000 -
              Number.parseInt(track?.duration_ms / 60000)) *
              60
          ) > 10
            ? " " +
              Number.parseInt(
                (track?.duration_ms / 60000 -
                  Number.parseInt(track?.duration_ms / 60000)) *
                  60
              )
            : " 0" +
              Number.parseInt(
                (track?.duration_ms / 60000 -
                  Number.parseInt(track?.duration_ms / 60000)) *
                  60
              )}
        </p>
      </td>
    </tr>

    // </div>
  );
}

export default SongRow;
