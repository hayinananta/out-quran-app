import React from "react";
import Grid from "@material-ui/core/Grid";

import { Skeleton } from "@material-ui/lab";
import "./asmaulhusnaCardSkeleton.scss";
const AsmaulHusnaCardSkeleton = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
        <Grid key={value} item xs={12} sm={6} md={4}>
          <div className="asmaulhusna-collection-item-skeleton">
            <h1 className="text-asmaulhusna">
              <Skeleton variant="text" />
            </h1>
            <h2 className="text-transliteration">
              <Skeleton variant="text" />
            </h2>
            <p className="text-translation">
              <Skeleton variant="text" />
            </p>
          </div>
        </Grid>
      ))}
    </>
  );
};

export default AsmaulHusnaCardSkeleton;
