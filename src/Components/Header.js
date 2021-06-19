import React, { useEffect, useState } from "react";
import "./Header.css";
import { useDataLayerValue } from "../DataLayer";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";

function Header() {
  const [dropState, setDropState] = useState(false);
  useEffect(() => {
    setDropState(dropState);
  }, [dropState]);
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search ..." type="text" />
      </div>
      <div className="header__right">
        <a className="header__right__button" href="#d">
          UPGRADE
        </a>
        <div className="header__right__name__comp">
          <Avatar
            className="header__right__avatar"
            src={user?.images[0].url}
            alt={user?.display_name}
          />
          <div className="header__right__besideAvatar">
            <p className="header__right__name">{user?.display_name}</p>
            {!dropState ? (
              <ArrowDropDown className="header__right__drop" />
            ) : (
              <ArrowDropUp className="header__right__drop" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
