import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../../utils/route/baseUrl";
import CountryNames from "./countryNames";
import FilterDataContext from "../../../contexts/filterDataContext";

function CountryCards(props) {
  const { country } = props;
//   const { searchFilter } = useContext(FilterDataContext);

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
        <img
          className="h-full w-full absolute object-cover object-center"
          src={country.flags.svg}
          alt="country flag"
        />
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