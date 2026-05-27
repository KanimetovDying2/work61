import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://restcountries.com/v2",
  timeout: 5000,
});

export const ENDPOINTS = {
  allCountries: "/all?fields=alpha3Code,name",
  singleCountry: (code: string) => `/alpha/${code}`,
};

export interface CountryShort {
  name: string;
  alpha3Code: string;
}

export interface CountryFull {
  name: string;
  capital: string;
  region: string;
  alpha3Code: string;
  population: number;
  independent: boolean;
  borders: string[];
  flag: string;
}
