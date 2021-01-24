import React from "react";
import Grid from "@material-ui/core/Grid";
import "./AsmaulHusnaCard.scss";
const AsmaulHusnaCard = ({ number, name, transliteration, en }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div className="asmaulhusna-collection-item">
        <h1 className="text-asmaulhusna">{name}</h1>
        <h2 className="text-transliteration">{`${number}. ${transliteration}`}</h2>
        <p className="text-translation">{en.meaning}</p>
      </div>
    </Grid>
  );
};

export default AsmaulHusnaCard;
