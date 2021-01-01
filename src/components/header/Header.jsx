import { Toolbar } from "@material-ui/core";
import React from "react";
import JumbotronHeader from "../JumbotronHeader/JumbotronHeader";
import Navbar from "../navBar/Navbar";
const Header = () => {
  return (
    <>
      <Navbar />
      <Toolbar disableGutters />
      <JumbotronHeader />
    </>
  );
};

export default Header;
