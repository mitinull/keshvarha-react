import axios from "axios";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  // useEffect(() => {
  //   console.log(card);
  // }, []);
  const image = card.flags.svg;
  return (
    <li className="cards__item">
      <Link to={card.cca3} className="card">
        <div className="card__flag-box">
          <img className="card__flag" src={image} alt="Country flag" />
        </div>
        <div className="card__text-box">
          <h2 className="card__name">{card.name.common}</h2>
          <div className="card__population">
            <span className="card__key">Population:</span> {card.population}
          </div>
          <div className="card__region">
            <span className="card__key">Region:</span> {card.region}
          </div>
          <div className="card__capital">
            <span className="card__key">Capital:</span> {card.capital || "-"}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
