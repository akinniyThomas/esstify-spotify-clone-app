import React from "react";
import "./Footer.css";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import Replay10Icon from "@material-ui/icons/Replay10";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Forward10Icon from "@material-ui/icons/Forward10";

import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import DevicesIcon from "@material-ui/icons/Devices";

import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import { Grid, Slider } from "@material-ui/core";

import spotifyLogo from "../assets/spotify2019-830x350.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__left__album__img"
          src={spotifyLogo}
          alt="song__img"
        />
        <div className="footer__left__album__text">
          <strong className="footer__left__album__text__title">
            SomethingsHere
          </strong>
          <p className="footer__left__album__text__content">Small Texts Here</p>
        </div>

        <AddCircleOutlineIcon fontSize="small" className="footer__icons" />
        <AspectRatioIcon fontSize="small" className="footer__icons" />
      </div>
      <div className="footer__center">
        <div className="footer__center__upper">
          <Replay10Icon className="footer__icons" />
          <SkipPreviousIcon className="footer__icons" />
          <PlayCircleFilledWhiteIcon
            fontSize="large"
            className="footer__icons footer__center__upper__play"
          />
          <SkipNextIcon className="footer__icons" />
          <Forward10Icon className="footer__icons" />
        </div>
        <div className="footer__center__lower">
          <span>0:00</span>
          <progress value="30" max="100" />
          <span>0:00</span>
        </div>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <QueueMusicIcon className="footer__icons" />
          </Grid>
          <Grid item>
            <DevicesIcon className="footer__icons" />
          </Grid>
          <Grid item>
            <VolumeUpIcon className="footer__icons" />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
