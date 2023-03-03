import React, { memo } from "react";
import CountryNames from "./countryNames";
import {Link} from "react-router-dom"
import baseUrl from "../../utils/route/baseUrl";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@mui/material";
import numberWithCommas from "../../utils/methods/numberWithCommas";

function CountryCards(props) {
  const { country } = props;
  const countryName = country.name.common.replace(/\s+/g, "_").toLowerCase();

  const infos = [
    {
      label: "population",
      value: numberWithCommas(country.population),
    },
    {
      label: "region",
      value: country.region,
    },
    {
      label: "capital",
      value: country.capital,
    },
  ];

  return (
    <div
      className={`max-w-xs w-full relative bg-White  dark:bg-DarkBlue 
      overflow-hidden rounded-md capitalize drop-shadow-xl shadow-DarkBlue`}
    >
      {/* clickable country element */}
      <Link to={`${baseUrl}${countryName}`} className={`w-full`}>
        <div className="h-[12rem] relative">
          <LazyLoadImage
            className="h-full w-full absolute object-cover object-center"
            src={country.flags.svg}
            placeholder={
              <Skeleton
                height="100%"
                sx={{ transform: "scale(1)" }}
                animation="wave"
              />
            }
            alt="country flag"
          />
        </div>
        <div className="p-6">
          <CountryNames country={country} />
          {infos.map((inf, infoIdx) => {
            return (
              <div key={infoIdx} className="flex gap-2">
                <span className="dark:text-White">
                  {inf.label} :
                  <span className="dark:text-VeryLightGray font-light ml-1">
                    {inf.value}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </Link>

    </div>
  );
}

export default memo(CountryCards);