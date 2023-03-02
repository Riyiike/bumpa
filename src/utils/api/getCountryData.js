import numberWithCommas from "../methods/numberWithCommas";

export default function getCountryDataInfo(country) {
  let countryData = country
    ? {
        name: country.name.common,
        "native name":
          country.name.nativeName[Object.keys(country.name.nativeName)[0]]
            .common,
        population: numberWithCommas(country.population),
        region: country.region,
        "sub region": country.subregion,
        capital: country.capital ? country.capital[0] : null,
        "top level domain": country.tld ? country.tld[0] : "none",
        currencies: country.currencies
          ? country.currencies[Object.keys(country.currencies)[0]].name
          : [],
        languages: country.languages
          ? Object.values(country.languages).join(", ")
          : "",
        "border countries": country.borders,
        flag: country.flags.svg,
        coatOfArms: country.coatOfArms.svg,
      }
    : {};

  return countryData;
}
