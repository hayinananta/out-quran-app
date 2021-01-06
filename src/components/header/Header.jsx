import React from "react";
import Navbar from "../navBar/Navbar";
import NavDrawer from "../navDrawer/NavDrawer";
const Header = () => {
  // Create state for Nav Drawer
  const [state, setState] = React.useState({
    showDrawer: false,
  });

  // method for toggle drawer (open/close)
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ showDrawer: open });
  };

  return (
    <>
      {/* Nav Drawer is nav items when mobile size */}
      <NavDrawer
        anchor="left"
        open={state["showDrawer"]}
        handleClose={toggleDrawer(false)}
        handleOpen={toggleDrawer(true)}
      />
      <Navbar handleToggle={toggleDrawer} />
    </>
  );
};

export default Header;
