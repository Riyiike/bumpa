import React, { useEffect, useContext } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import AllCountries from "../components/molecules/countryListPage/allCountries";
import SearchInput from "../components/organisms/searchInput";
import DropDown from "../components/organisms/dropDown";
import FilterDataContext from "../contexts/filterDataContext";

const MainPage = () => {
  const [countries] = useOutletContext();
  const { regionIndex, searchFilter } = useContext(FilterDataContext);
  let [_, setSearchParams] = useSearchParams();

  // sets the url search params based on region and search filters
  useEffect(() => {
    setSearchParams((prev) => {
      if (searchFilter) {
        prev.set("search", searchFilter);
      } else prev.delete("search");
      if (regionIndex != undefined) {
        prev.set("region", regionIndex);
      } else prev.delete("region");
      return prev;
    });
  }, []);

  return (
    <div className="pt-8 px-5 max-w-7xl mx-auto">
      <div className="sm:flex justify-between mb-5 items-center">
        <SearchInput />
        <DropDown />
      </div>
      {countries ? <AllCountries countriesList={countries} /> : ""}
    </div>
  );
};

export default MainPage;
