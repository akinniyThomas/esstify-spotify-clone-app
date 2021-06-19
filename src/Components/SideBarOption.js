import React from "react";
import "./SideBarOption.css";
import { useDataLayerValue } from "../DataLayer";

function SideBarOption({ title, Icon, id }) {
  const [, dispatch] = useDataLayerValue();
  function populate(id) {
    dispatch({
      type: "SET_SELECTED_PLAYLIST",
      selectedPlaylistId: id,
    });
  }
  return (
    <div id={id} className="sideBarOption" onClick={() => populate(id)}>
      {/* <h1>SideBarOptions</h1> */}
      {Icon && <Icon className="sideBarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
