import React from "react";
import CountryCards from "./countryCards";

const AllCountries= (props)=> {
    const { countriesList } = props;
    let newCountriesList = countriesList;
  
    return (
      <div
        className="grid justify-center justify-items-center gap-5 grid-cols-countriesMap 
        max-w-[93rem] mx-auto "
      >
        {newCountriesList.map((country, countryIdx) => {
          return <CountryCards key={countryIdx} country={country} />;
        })}
      </div>
    );
  
}
export default AllCountries;