import { useContext } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { CARD_PER_PAGE } from "../config";
import CountriesContext from "../contexts/countries";
import Card from "./card";

const Cards = () => {
  const { countries, isLoading, page, region } = useContext(CountriesContext);
  return (
    <main className="cards">
      {isLoading ? (
        <BsGlobe2 className="spinner"/>
      ) : (
        <ul className="cards__list">
          {region === 'All'? 
          countries.slice((page - 1) * CARD_PER_PAGE, page * CARD_PER_PAGE).map((card, i) => (
            <Card card={card} key={i} />
          )):
          countries.filter(country => country.region === region).slice((page - 1) * CARD_PER_PAGE, page * CARD_PER_PAGE).map((card, i) => (
            <Card card={card} key={i} />
          ))}

          {/* next 4 lines for responsive when there is 1 or 2 card in the page! */}
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      )}
    </main>
  );
};

export default Cards;
