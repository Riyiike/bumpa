// if there is more to show then add more items to the infinite scroll list
const loadCountries = (
    tempCountries,
    setTempCountries,
    smallCountryList,
    setHasMore,
    itemsPerPage
  ) => {
    if (
      tempCountries.length === smallCountryList.length ||
      tempCountries.length > smallCountryList.length
    ) {
      setHasMore(false);
    } else {
      const passedLimit =
        tempCountries.length + itemsPerPage >= smallCountryList.length;
  
      if (!passedLimit) {
        setTempCountries(
          tempCountries.concat(
            smallCountryList.slice(
              tempCountries.length,
              tempCountries.length + itemsPerPage
            )
          )
        );
      } else {
        setTempCountries(
          tempCountries.concat(smallCountryList.slice(tempCountries.length))
        );
      }
    }
  };
  
  export default loadCountries;
  