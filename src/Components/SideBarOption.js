import React from "react";
import "./SideBarOption.css";

function SideBarOption({ title, Icon, id }) {
  return (
    <div id={id} className="sideBarOption">
      {/* <h1>SideBarOptions</h1> */}
      {Icon && <Icon className="sideBarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
