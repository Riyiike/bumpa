import { Skeleton } from "@mui/material";
import React, { memo, useEffect, useState } from "react";

function CountryImage(props) {
  const { flag, countryName } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [countryName]);

  function onLoadHandle() {
    setImgLoaded(true);
  }

  return (
    <div className="mb-5">
      <img
        src={flag}
        alt="country flag"
        onLoad={onLoadHandle}
        className={`w-full max-h-60 max-w-md drop-shadow-lg ${
          imgLoaded ? "block" : "hidden"
        }`}
      />
      <Skeleton
        width="100%"
        height="100%"
        sx={{
          transform: "scale(1)",
          display: imgLoaded ? "none" : "block",
          minHeight: "15rem",
        }}
        animation="wave"
      />
    </div>
  );
}

export default memo(CountryImage);
