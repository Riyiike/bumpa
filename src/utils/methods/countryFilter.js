
export default function countriesFilter(
    countriesList,
    regionIndex = null,
    dropDownContent,
    searchFilter
  ) {
    const searchReg = new RegExp(searchFilter, "i");
    return countriesList.filter((contr) => {
      let pass = true;
      if (regionIndex !== null && contr.region !== dropDownContent[regionIndex]) {
        pass = false;
      }
      if (searchFilter !== "" && !searchReg.test(contr.name.common)) {
        pass = false;
      }
      return pass;
    });
  }
  