import React from "react";
import { Link } from "react-scroll";
import { Hidden } from "@material-ui/core";
import "./NavItems.scss";

export default function NavItems() {
  // Method for create nav item
  const list = () => {
    return (
      <>
        {["Home", "About", "Contact", "Featrues"].map((text, idx) => (
          <Link
            key={text}
            to={text === "Home" ? "back-to-top-anchor" : text.toLowerCase()}
            activeClass="active"
            spy={true}
            smooth={true}
            className="nav-link"
          >
            {text}
          </Link>
        ))}
      </>
    );
  };

  return (
    <Hidden xsDown implementation="css">
      <div id="nav-items">{list()}</div>
    </Hidden>
  );
}
