import React, { useEffect,lazy, useContext,Suspense } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import SearchInput from "../components/organisms/searchInput";
import DropDown from "../components/organisms/dropDown";
import MainSuspenseLoading from "../utils/api/mainSuspenseLoading"
import FilterDataContext from "../contexts/filterDataContext";


const AllCountries = lazy(() => import("../components/molecules/allCountries"));


const MainPage = () => {
  const [countries] = useOutletContext();
  const { regionIndex, searchFilter } = useContext(FilterDataContext);
  const [searchParam, setSearchParams] = useSearchParams();
  // sets the url search params based on region and search filters
  useEffect(() => {
    setSearchParams((prev) => {
      if (searchFilter) {
        prev.set("search", searchFilter);
      } else prev.delete("search");
      if (regionIndex !== undefined) {
        prev.set("region", regionIndex);
      } else prev.delete("region");
      return prev;
    });
  }, [regionIndex, setSearchParams, searchFilter]);

  return (
    <div className="pt-8 px-5 max-w-7xl mx-auto">
    <div className="sm:flex justify-between mb-5 items-center">
      <SearchInput />
      <DropDown />
    </div>
    <Suspense fallback={<MainSuspenseLoading/>}>
      {countries ? <AllCountries countriesList={countries} /> : ""}
    </Suspense>
  </div>
  );
};

export default MainPage;
