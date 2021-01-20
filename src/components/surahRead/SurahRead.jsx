import React, { Component } from "react";
import { Container, Toolbar } from "@material-ui/core";
import "./SurahRead.scss";

class SurahRead extends Component {
  render() {
    return (
      <section id="surah-read" className="top-page">
        <Container>
          <Toolbar />
          {/* {dataAyahs.map((ayah) => (
            <>
              <div id="title">
                <h2>{surah.englishName}</h2>
                <p>{surah.englishNameTranslation}</p>
              </div>
              {surah.ayahs.map((ayah) => (
                <div className="card-ayah">
                  <div className="title">
                    <span className="number-surah"></span>
                    <p className="text-transliteration"></p>
                    <p className="text-translation"></p>
                  </div>
                  <div className="text-arab"></div>
                </div>
              ))}
          ))} */}
        </Container>
      </section>
    );
  }
}

export default SurahRead;
