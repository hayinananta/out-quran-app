import React from "react";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";

import NavToggle from "../navToggle/NavToggle";
import NavDrawer from "../navDrawer/NavDrawer";
import NavItems from "../navItems/NavItems";

import "./Navbar.scss";

// Function for hide on scroll
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar({ handleToggle, ...props }) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar id="navbar">
          <Toolbar disableGutters={true}>
            <Container fixed>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography id="logo-brand" variant="h4">
                  Our<span>Qur'an</span>
                </Typography>

                {/* Toggle for open drawer when mobile size*/}
                <NavToggle handleOpenDrawer={handleToggle(true)} />

                {/* Nav Items when desktop size */}
                <NavItems />
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}

export default Navbar;
