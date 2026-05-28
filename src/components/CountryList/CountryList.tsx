import type { CountryShort } from "../../api";
import styles from "./CountryList.module.css";

type Props = {
  countries: CountryShort[];
  onSelectCountry: (code: string) => void;
};

const CountryList = ({ countries, onSelectCountry }: Props) => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.list}>
        {countries.map((item) => (
          <li
            key={item.alpha3Code}
            onClick={() => onSelectCountry(item.alpha3Code)}
            className={styles.item}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
