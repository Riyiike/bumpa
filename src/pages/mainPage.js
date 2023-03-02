import React from "react";
import { useOutletContext } from "react-router-dom";
import AllCountries from "../components/molecules/countryListPage/allCountries";


const MainPage =() => {
  const [countries] = useOutletContext();

  return (
    <div className="pt-8 px-5 max-w-7xl mx-auto">
      <div className="sm:flex justify-between mb-5 items-center">
      </div>
        {countries ? <AllCountries countriesList={countries} /> : ""}
    </div>
  );
}

export default MainPage;