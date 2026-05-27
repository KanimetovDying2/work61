import type { CountryShort } from "../../api";

type Props = {
  countries: CountryShort[];
};

const CountryList = ({ countries }: Props) => {
  return (
    <ul>
      {countries.map((item) => (
        <li key={item.alpha3Code}>{item.name}</li>
      ))}
    </ul>
  );
};

export default CountryList;
