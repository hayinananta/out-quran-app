import { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import HomePage from "./pages/homePage/HomePage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import "./App.css";
import "./App.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Toolbar id="back-to-top-anchor" /> */}
        <HomePage />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
