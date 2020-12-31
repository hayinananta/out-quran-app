import "./App.scss";
import "./App.css";
import Toolbar from "@material-ui/core/Toolbar";
import { Component } from "react";
import HomePage from "./pages/homePage/HomePage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar id="back-to-top-anchor" />
        <HomePage />
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
