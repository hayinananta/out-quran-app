import React, { Component } from "react";
import Header from "../../components/header/Header";
import SurahRead from "../../components/surahRead/SurahRead";
import { connect } from "react-redux";
import { setSurah } from "../../actions/surah";
class DetailPage extends Component {
  componentDidMount() {
    const { surahId } = this.props.match.params;
    this.props.dispatch(setSurah(surahId));
  }

  render() {
    return (
      <>
        <Header urlPage="alquran" />
        <SurahRead />
      </>
    );
  }
}

export default connect()(DetailPage);
