import type { CountryFull, CountryShort } from "../../api";

type Props = {
  countryInfo: CountryFull;
  allBorders: CountryShort[];
};

const CountryDetails = ({ countryInfo, allBorders }: Props) => {
  const borderNames = countryInfo.borders?.map((code) => {
    const foundCountry = allBorders.find((c) => c.alpha3Code === code);
    return foundCountry ? foundCountry.name : code;
  });

  return (
    <div>
      <h2>{countryInfo.name}</h2>
      <img src={countryInfo.flag} alt={`Flag of ${countryInfo.name}`} />
      <p>Capital: {countryInfo.capital}</p>
      <p>Region: {countryInfo.region}</p>
      <p>Population: {countryInfo.population}</p>
      <p>Independent: {countryInfo.independent ? "Yes" : "No"}</p>
      <p>
        Borders with:{" "}
        {borderNames && borderNames.length > 0
          ? borderNames.join(`, `)
          : "No borders"}
      </p>
    </div>
  );
};

export default CountryDetails;
