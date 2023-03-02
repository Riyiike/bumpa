import React, { useContext, useState, useEffect } from "react";
import CountryCards from "./countryCards";
import FilterDataContext from "../../../contexts/filterDataContext";
import countriesFilter from "../../../utils/methods/countryFilter";


const AllCountries = (props) => {
  const { countriesList } = props;
  let newCountriesList = countriesList;
  const { searchFilter, regionIndex, dropDownContent } = useContext(FilterDataContext);
  const [filteredCountryList, setFilteredCountryList] = useState(countriesList);
  const itemsPerPage = 20;
  
  useEffect(() => {
    setFilteredCountryList(() =>
      countriesFilter(countriesList, regionIndex, dropDownContent, searchFilter)
    );
  }, [searchFilter, regionIndex]);


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
};
export default AllCountries;
