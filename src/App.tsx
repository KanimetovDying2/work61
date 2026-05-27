import { useEffect, useState } from "react";
import { axiosInstance, ENDPOINTS, type CountryShort } from "./api";
import "./App.css";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState<CountryShort[]>([]);

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

  return (
    <>
      <CountryList countries={countries} />
    </>
  );
}

export default App;
