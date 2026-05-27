import type { CountryShort } from "../../api";

type Props = {
  countries: CountryShort[];
  onSelectCountry: (code: string) => void;
};

const CountryList = ({ countries, onSelectCountry }: Props) => {
  return (
    <ul>
      {countries.map((item) => (
        <li
          key={item.alpha3Code}
          onClick={() => onSelectCountry(item.alpha3Code)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
