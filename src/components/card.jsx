import { useContext } from "react";
import CountriesContext from "../contexts/countries";

const Card = (props) => {
  const { countries } = useContext(CountriesContext);
  console.log(countries);
  return (
    <li className="cards__item" key={props.id}>
      <a href="/infoPage(temp).html" className="card">
        <div className="card__flag-box">
          <img
            className="card__flag"
            src={countries[props.id].flags.svg}
            alt="Country flag"
          />
        </div>
        <div className="card__text-box">
          <h2 className="card__name">{countries[props.id].name.common}</h2>
          <div className="card__population">
            <span className="card__key">Population:</span>{" "}
            {countries[props.id].population}
          </div>
          <div className="card__region">
            <span className="card__key">Region:</span>{" "}
            {countries[props.id].region}
          </div>
          <div className="card__capital">
            <span className="card__key">Capital:</span>{" "}
            {countries[props.id].capital || "-"}
          </div>
        </div>
      </a>
    </li>
  );
};

export default Card;
