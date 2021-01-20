import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import "./AyahCardSkeleton.scss";
const AyahCardSkeleton = (props) => {
  console.log(props);
  const { text } = props;
  return (
    <div className="ayah-card-skeleton">
      <div className="title">
        <span className="number-surah">
          <Skeleton variant="text" width={40} height={40} />
        </span>
        <p className="text-transliteration">
          <Skeleton variant="text" width={375.838} />
        </p>
        <p className="text-translation">
          <Skeleton variant="text" width={675.838} />
        </p>
      </div>
      <div className="text-arab">
        <Skeleton variant="text" width={279.288} height={40} />
      </div>
    </div>
  );
};

export default AyahCardSkeleton;
