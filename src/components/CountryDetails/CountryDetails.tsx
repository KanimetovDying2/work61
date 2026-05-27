import type { CountryFull } from "../../api";

type Props = {
  countryInfo: CountryFull;
};

const CountryDetails = ({ countryInfo }: Props) => {
  return (
    <div>
      <h2>{countryInfo.name}</h2>
      <img src={countryInfo.flag} alt={`Flag of ${countryInfo.name}`} />
      <p>Capital: {countryInfo.capital}</p>
      <p>Region: {countryInfo.region}</p>
      <p>Population: {countryInfo.population}</p>
      <p>Independent: {countryInfo.independent ? "Yes" : "No"}</p>
      <p>Borders: {countryInfo.borders.join(`, `)}</p>
    </div>
  );
};

export default CountryDetails;
