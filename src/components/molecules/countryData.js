import React from "react";

export default function CountryInfo(props) {
  const { labels, countryData } = props;

  return (
    <div className="mb-5 lg:mb-0">
      {labels.map((label, index) => {
        return (
          <div key={index} className="flex gap-2">
            <span className="dark:text-White">
              {label} :
              <span className="dark:text-VeryLightGray font-light ml-1">
                {countryData[label]}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
