import React, { memo } from "react";
import CountryNames from "./countryNames";
import {Link} from "react-router-dom"
import baseUrl from "../../../utils/route/baseUrl";

function CountryCards(props) {
  const { country } = props;

  const countryName = country.name.common.replace(/\s+/g, "_").toLowerCase();

  const infos = [
    {
      label: "population",
      value: country.population,
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
      className="max-w-xs w-full bg-White dark:bg-DarkBlue overflow-hidden rounded-md 
    capitalize drop-shadow-xl shadow-DarkBlue"
    >
      <div className="h-[12rem] relative">
      <Link to={`${baseUrl}${countryName}`} className={`w-full`}>

        <img
          className="h-full w-full absolute object-cover object-center"
          src={country.flags.svg}
          alt="country flag"
        />
        </Link>
      </div>
      <div className="p-6">
        <CountryNames country={country} />
        {infos.map((inf, infoIdx) => {
          return (
            <div key={infoIdx} className="flex gap-2">
              <span className="dark:text-White">{inf.label} : </span>
              <span className="dark:text-VeryLightGray font-light">
                {inf.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(CountryCards);