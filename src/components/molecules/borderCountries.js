import React from "react";
import { Link } from "react-router-dom";
import baseUrl from "../../utils/route/baseUrl";

const BorderCountries =(props)=> {
  const { countries, borderSigns } = props;
  const neighbours = borderSigns
    ? borderSigns.map((sign) => {
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].cca3 === sign)
            return {
              name: countries[i].name.common,
              linkName: countries[i].name.common
                .replace(/\s+/g, "_")
                .toLowerCase(),
            };
        }
      })
    : [];

  if (!borderSigns) return;
  return (
    <div className=" sm:col-span-2 sm:mt-2 ">
      <h2 className="font-bold text-base mb-4">border countries</h2>
      <div className="flex gap-2 flex-wrap">
        {neighbours.map((border, index) => {
          return (
            <Link
              to={`${baseUrl}${border.linkName}`}
              key={index}
              className="bg-White dark:bg-DarkBlue p-[.3em] px-[1.3em] rounded-sm drop-shadow-lg "
            >
              {border.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BorderCountries;