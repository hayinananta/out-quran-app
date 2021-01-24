import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import AsmaulHusnaCard from "../asmaulhusnaCard/AsmaulHusnaCard";
import AsmaulHusnaCardSkeleton from "../asmaulhusnaCardSkeleton/asmaulhusnaCardSkeleton";
import ErrorHandle from "../error/ErrorHandle";

import "./FeatureAsmaulHusna.scss";
const mapStateToProps = (state) => {
  return {
    items: state.asmaulhusna.items,
    error: state.asmaulhusna.error,
    loading: state.asmaulhusna.loading,
  };
};

const FeatureAsmaulHusna = (props) => {
  const { items, error, loading } = props;
  if (error) return <ErrorHandle />;
  console.log(items);
  return (
    <section id="featured-asmaulhusna">
      <Grid container spacing={3}>
        {loading ? (
          <AsmaulHusnaCardSkeleton />
        ) : (
          items.map((item) => <AsmaulHusnaCard key={item.number2} {...item} />)
        )}
      </Grid>
    </section>
  );
};

export default connect(mapStateToProps)(FeatureAsmaulHusna);
