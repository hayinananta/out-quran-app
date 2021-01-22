import React from "react";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import AudioSurah from "../audioSurah/AudioSurah";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import "./PlayLIstBar.scss";

// Method for hide on scroll
const HideOnScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
};

const PlayListBar = ({ handleToggle, ...props }) => {
  return (
    <>
      <HideOnScroll {...props}>
        <div id="playListBar">
          <Toolbar disableGutters={true}>
            <AudioSurah />
          </Toolbar>
        </div>
      </HideOnScroll>
    </>
  );
};

export default PlayListBar;
