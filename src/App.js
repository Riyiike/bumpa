import React, { useEffect, useState } from "react";
import NavBar from "./components/organisms/NavBar";
import NavBarContext from "./contexts/NavBarContext";
import axios from "axios";
import { Outlet } from "react-router-dom";
import FilterDataContext from "./contexts/filterDataContext";
import CountryCards from "./components/molecules/countryListPage/countryCards";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [countries, setCountries] = useState();
  const [regionIndex, setRegionIndex] = useState();
  const [searchFilter, setSearchFilter] = useState("");
  const dropDownContent = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  // data states for filtering the countries
  const filterData = {
    regionIndex,
    setRegionIndex,
    dropDownContent,
    searchFilter,
    setSearchFilter,
  };

  // nav bar data
  const navBarObject = {
    darkTheme: darkTheme,
    setDarkTheme: setDarkTheme,
  };

  // dark theme swicther
  useEffect(() => {
    if (darkTheme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkTheme]);

  // fetching countries list
  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <main
      className="min-h-screen text-sm bg-VeryLightGray dark:bg-VeryDarkBlue text-VeryDarkBlue 
    dark:text-White sm:text-base"
    >
      <NavBarContext.Provider value={navBarObject}>
        <NavBar />
      </NavBarContext.Provider>
      <FilterDataContext.Provider value={filterData}>
        <Outlet context={[countries]} />
      </FilterDataContext.Provider>
    </main>
  );
}

export default App;
