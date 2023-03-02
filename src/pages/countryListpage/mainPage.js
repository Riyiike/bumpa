import React, { Suspense, lazy, useEffect, useContext } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import DropDown from "../../components/organisms/dropDown";
import SearchInput from "../../components/organisms/SearchInput";
import FilterDataContext from "../../contexts/filterDataContext";
const MappedCountries = lazy(() => import("../../components/molecules/countryListPage/allCountries"));
import MainSuspenceLoading from "../../components/molecules/countryListPage/mainSuspenseLoading";


const MainPage =() => {
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
      <Suspense fallback={<MainSuspenceLoading />}>
        {countries ? <MappedCountries countriesList={countries} /> : ""}
      </Suspense>
    </div>
  );
}

export default MainPage;