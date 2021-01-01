import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./HomePage.scss";
import About from "../../components/about/About";
class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
      </>
    );
  }
}

export default HomePage;
