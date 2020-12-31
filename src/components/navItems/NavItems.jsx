import React from "react";
import { Link } from "react-scroll";
import { Hidden } from "@material-ui/core";
import "./NavItems.scss";

export default function NavItems() {
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
            hashSpy={true}
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
      <div id="nav-items">
        {list()}
        {/* <Link
          to="back-to-top-anchor"
          activeClass="active"
          spy={true}
          hashSpy={true}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          hashSpy={true}
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          hashSpy={true}
          className="nav-link"
        >
          Contact
        </Link>
        <Link
          to="Features"
          activeClass="active"
          spy={true}
          hashSpy={true}
          className="nav-link"
        >
          Contact
        </Link> */}
      </div>
    </Hidden>
  );
}
