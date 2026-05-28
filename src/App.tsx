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
  const [isDetailsLoading, setIsDetailsLoading] = useState<boolean>(false);
  const [detailsError, setDetailsError] = useState<string | null>(null);

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
        setIsDetailsLoading(true);
        setDetailsError(null);

        const { data } = await axiosInstance.get(
          ENDPOINTS.singleCountry(selectedCountryCode),
        );
        setSelectedCountryDetails(data);
      } catch (error) {
        console.error("Error. Cannot load this Country", error);
        setDetailsError(
          "Error. Failed to load country details. Please try again.",
        );
      } finally {
        setIsDetailsLoading(false);
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
      <div className="details-container">
        {isDetailsLoading ? (
          <div>Loading country details...</div>
        ) : detailsError ? (
          <div className="error-message">{detailsError}</div>
        ) : selectedCountryDetails ? (
          <CountryDetails
            countryInfo={selectedCountryDetails}
            allBorders={countries}
          />
        ) : (
          <div className="placeholder">
            Please select a country from the list.
          </div>
        )}
      </div>
    </>
  );
};

export default App;
