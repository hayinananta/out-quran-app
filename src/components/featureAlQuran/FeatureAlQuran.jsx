import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import SurahCard from "../surahCard/SurahCard";
import SurahCardSkeleton from "../surahCardSkeleton/SurahCardSkeleton";
import SearchBox from "../searchBox/SearchBox";
import ErrorHandle from "../error/ErrorHandle";

import "./FeaturedAlQuran.scss";
const mapStateToProps = (state) => {
  return {
    items: state.surah.items,
    error: state.surah.error,
    loading: state.surah.loading,
    searchField: state.searchSurah.searchField,
  };
};

class FeatureAlQuran extends Component {
  render() {
    const { items, error, loading, searchField } = this.props;
    if (error) return <ErrorHandle />;

    // Filtering surah with search field
    const filteredSurah = items.filter((surah) =>
      surah.englishName.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <>
        <div className="search-container">
          <SearchBox />
        </div>
        <Grid container spacing={3}>
          {loading ? (
            <SurahCardSkeleton />
          ) : (
            filteredSurah.map((props) => (
              <SurahCard key={props.number} {...props} />
            ))
          )}
        </Grid>
      </>
    );
  }
}

export default connect(mapStateToProps)(FeatureAlQuran);
