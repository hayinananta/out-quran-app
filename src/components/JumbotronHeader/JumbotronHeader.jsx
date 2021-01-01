import React, { Component } from "react";
import { Button } from "@material-ui/core";
import "./JumbotronHeader.scss";
import { ReactComponent as BackgroundImage } from "../../assets/images/Hero Image.svg";

class JumbotronHeader extends Component {
  render() {
    return (
      <section id="jumbotron-header">
        <div id="back-to-top-anchor" />
        <div className="tex-box">
          <h1>
            A Moslem Daily Worship <br />
            Read <span>Qur’an</span>
          </h1>
          <p>have you read the al-qur’an today ?</p>
          <Button variant="contained" color="secondary">
            Get your surah
          </Button>
        </div>
        <BackgroundImage id="hero-image" />
      </section>
    );
  }
}

export default JumbotronHeader;
