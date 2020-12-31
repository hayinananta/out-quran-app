import React from "react";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import NavToggle from "../navToggle/NavToggle";
import NavDrawer from "../navDrawer/NavDrawer";
import NavItems from "../navItems/NavItems";

import "./Header.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "#4f4f4f",
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar id="header">
          <Toolbar disableGutters={true}>
            <Container fixed>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography variant="h4" className={classes.title}>
                  OurQur'an
                </Typography>
                <NavToggle handleOpenDrawer={toggleDrawer("left", true)} />
                <NavItems />
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <NavDrawer
        anchor="left"
        open={state["left"]}
        handleClose={toggleDrawer("left", false)}
        handleOpen={toggleDrawer("left", true)}
      />
    </React.Fragment>
  );
}
