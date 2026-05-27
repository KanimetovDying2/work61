import { useEffect, useState } from "react";
import {
  axiosInstance,
  ENDPOINTS,
  type CountryFull,
  type CountryShort,
} from "./api";
import "./App.css";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [countries, setCountries] = useState<CountryShort[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(
    null,
  );
  const [selectedCountryDetails, setSelectedCountryDetails] =
    useState<CountryFull | null>(null);

  const handleSelectCountry = (code: string) => {
    setSelectedCountryCode(code);
  };

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const { data } = await axiosInstance.get(ENDPOINTS.allCountries);
        setCountries(data);
      } catch (error) {
        console.error("Error. Cannot load Countries", error);
      }
    };
    getAllCountries();
  }, []);

  useEffect(() => {
    if (selectedCountryCode === null) return;
    const getFullCountry = async () => {
      try {
        const { data } = await axiosInstance.get(
          ENDPOINTS.singleCountry(selectedCountryCode),
        );
        setSelectedCountryDetails(data);
      } catch (error) {
        console.error("Error. Cannot load this Country", error);
      }
    };
    getFullCountry();
  }, [selectedCountryCode]);

  return (
    <>
      <CountryList
        countries={countries}
        onSelectCountry={handleSelectCountry}
      />
      {selectedCountryDetails && (
        <CountryDetails countryInfo={selectedCountryDetails} />
      )}
    </>
  );
};

export default App;
