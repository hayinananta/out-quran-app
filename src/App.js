import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getSurah } from "./actions/surah";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import NotFound from "./pages/notFoundPage/NotFoundPage.";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getSurah());
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
        <ScrollToTop />
      </div>
    );
  }
}

export default connect()(App);
