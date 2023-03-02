import { Skeleton } from "@mui/material";
import React, { memo, useEffect, useState } from "react";

function CountryTitle(props) {
  const { name, coatOfArms } = props;
  const [imgLoaded, setImgLoaded] = useState(false);

  function onLoadHandle() {
    setImgLoaded(true);
  }

  useEffect(() => {
    setImgLoaded(false);
  }, [coatOfArms]);

  // the coat of arms image and its loading effect
  function Emblem() {
    return (
      <div className={`max-w-[1.5rem] sm:max-w-[2rem]`}>
        <img
          src={coatOfArms}
          alt="coat of arms"
          onLoad={onLoadHandle}
          className={`${imgLoaded ? " block " : "hidden"}`}
        />
        <Skeleton
          width="1.5rem"
          height="1.5rem"
          sx={{
            transform: "scale(1)",
            display: imgLoaded ? "none" : "block",
          }}
          animation="wave"
          variant="circular"
        />
      </div>
    );
  }

  return (
    <h2 className="font-bold text-lg sm:text-2xl mb-4 lg:mb-5 sm:col-span-2 flex items-center gap-2 sm:gap-3">
      {name}
      {coatOfArms ? <Emblem /> : ""}
    </h2>
  );
}

export default memo(CountryTitle);
