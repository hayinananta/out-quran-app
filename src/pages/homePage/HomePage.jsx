import React, { Component } from "react";
import Header from "../../components/header/Header";
import "./HomePage.scss";
import AboutSection from "../../components/aboutSection/AboutSection";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";
class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <FeaturesSection />
        <AboutSection />
      </>
    );
  }
}

export default HomePage;
