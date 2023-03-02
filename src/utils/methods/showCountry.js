import FilterDataContext from "../../contexts/filterDataContext";
import { nanoid } from "nanoid";
import React, { lazy, useContext } from "react";
const CountryCards = lazy(() => import("../../components/molecules/countryListPage/countryCards"));

// gets the list of elements to show
export default function ShowCountry(props) {
  const { infiniteScrollList } = props;

  var items = [];
  for (var i = 0; i < infiniteScrollList.length; i++) {
    items.push(
      <CountryCards key={nanoid()} country={infiniteScrollList[i]} />
    );
  }
  return items;
}
