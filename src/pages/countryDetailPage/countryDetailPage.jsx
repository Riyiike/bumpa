import React,{useState,useEffect} from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import BorderCountries from "../../components/molecules/countrDetailPage/borderCountries";
import Loading from "../../components/molecules/countrDetailPage/Loading";
import getCountryDataInfo from "../../utils/data/getCountryData";
import { labels1 } from "../../utils/methods/infoLabels";
import { labels2 } from "../../utils/methods/infoLabels";
import BackBtn from "../../components/atoms/backButton";
import CountryImage from "../../components/molecules/countrDetailPage/countryImage";
import CountryInfo from "../../components/molecules/countrDetailPage/countryData";
import CountryTitle from "../../components/molecules/countrDetailPage/countryTitle";



export async function CountryDetailPageLoader({ params }) {
  return params.countryName;
}

const CountryDetailPage = () => {
    const countryName = useLoaderData().replace(/_+/g, " ").toLowerCase();
    const [countries] = useOutletContext();
    const [country, setCountry] = useState();
    let countryData = getCountryDataInfo(country);
    const [isLoading, setIsLoading] = useState(false);
  
    function getCountryData() {
      for (let i = 0; i < countries.length; i++) {
        if (countries[i].name.common.toLowerCase() === countryName)
          setCountry(countries[i]);
      }
    }
  
    useEffect(() => {
      if (countries != null && country == null) getCountryData();
    }, [countries]);
  
    useEffect(() => {
      if (countries != null) getCountryData();
      setIsLoading(false);
    }, [countryName]);
  
    window.scrollTo(0, 0);
  
    return (
      <div className="w-[90%] max-w-md lg:max-w-6xl mx-auto capitalize py-14 relative">
        <BackBtn setIsLoading={setIsLoading} />
        <div className="grid justify-center lg:gap-5 lg:grid-cols-2 lg:justify-between mx-auto lg:text-left">
          <CountryImage flag={countryData.flag} countryName={countryName} />
          <div className=" grid lg:grid-cols-2 grid-rows-[2.6em] gap-x-5">
            <CountryTitle
              name={countryData.name}
              coatOfArms={countryData.coatOfArms}
            />
            <CountryInfo labels={labels1} countryData={countryData} />
            <CountryInfo labels={labels2} countryData={countryData} />
            <BorderCountries
              countries={countries}
              currentCountry={country}
              borderSigns={countryData["border countries"]}
            />
          </div>
        </div>
        <Loading isLoading={isLoading} />
      </div>
  );
};

export default CountryDetailPage;
